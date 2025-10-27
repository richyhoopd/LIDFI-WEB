import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calculator } from 'lucide-react';
import Swal from 'sweetalert2';

interface CalculatorFormProps {
  onCalculate: (result: { normal: number; optimized: number; basePercentage: number; ageFactor: number }) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [formData, setFormData] = useState({
    lastJobMonth: '',
    lastJobYear: '',
    currentlyWorking: false,
    monthlySalary: '',
    weeksCotized: '',
    age: ''
  });

  const calculatePension = () => {
    const salary = parseFloat(formData.monthlySalary);
    const weeks = parseInt(formData.weeksCotized);
    const age = parseInt(formData.age);
    const lastYear = parseInt(formData.lastJobYear);
    const lastMonth = parseInt(formData.lastJobMonth);

    const currentYear = new Date().getFullYear();

    if (!salary || !weeks || !age) {
      Swal.fire('Operación inválida', 'Debes ingresar salario, semanas y edad.', 'error');
      return;
    }

    // ❌ Año inválido
    if (lastYear && lastYear > currentYear) {
      Swal.fire('Operación inválida', 'El año de baja no puede ser mayor al actual.', 'error');
      return;
    }

    // ❌ Requisito mínimo de semanas
    if (weeks < 500) {
      Swal.fire('Operación inválida', 'Debes tener al menos 500 semanas para solicitar pensión.', 'error');
      return;
    }

    // ❌ Ley 73 se pensiona con 1300 semanas
    if (weeks < 500) {
      Swal.fire('Operación inválida', 'Actualmente necesitas mínimo 500 semanas para pensionarte bajo la Ley 73.', 'error');
      return;
    }

    // ❌ Edad mínima
    if (age < 60) {
      Swal.fire('Operación inválida', 'La edad mínima para pensionarse es 60 años.', 'error');
      return;
    }

    // ❌ Vigencia de derechos
    let hasRights = true;
    if (!formData.currentlyWorking && lastYear && lastMonth) {
      const today = new Date();
      const lastJobDate = new Date(lastYear, lastMonth - 1, 1);
      const diffYears = (today.getTime() - lastJobDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
      if (diffYears > 5) {
        hasRights = false;
      }
    }
    if (!hasRights) {
      Swal.fire('Operación inválida', 'Perdiste tu vigencia de derechos (más de 5 años sin cotizar).', 'error');
      return;
    }

    // ✅ Paso 1: porcentaje base
    let basePercentage = 35; // 500 semanas
    if (weeks > 500) {
      const additionalYears = Math.floor((weeks - 500) / 52);
      basePercentage += additionalYears * 1.25;
    }
    basePercentage = Math.min(basePercentage, 100);

    // ✅ Paso 2: factor de edad
    let ageFactor = 1;
    if (age === 60) ageFactor = 0.75;
    else if (age === 61) ageFactor = 0.80;
    else if (age === 62) ageFactor = 0.85;
    else if (age === 63) ageFactor = 0.90;
    else if (age === 64) ageFactor = 0.95;
    else if (age >= 65) ageFactor = 1;

    const normalPension = ((salary * basePercentage) / 100) * ageFactor;

    // Optimizado (ejemplo asesoría)
    const optimizedMultiplier = 2.5;
    const optimizedPension = normalPension * optimizedMultiplier;

    onCalculate({
      normal: normalPension,
      optimized: optimizedPension,
      basePercentage,
      ageFactor
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="w-full bg-white shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-[#1F294C] to-[#234567] text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3 text-xl">
          <Calculator className="h-6 w-6" />
          Calcula cuánto puede mejorar tu pensión
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="grid gap-6">

          {/* Fecha de baja */}
          <div className="space-y-3">
            <Label className="text-[#1F294C] text-xl">1) Fecha de baja de mi último trabajo</Label>
            <div className="flex gap-3">
              <div className="flex-1">
                <Label htmlFor="month" className="text-xl text-gray-600">Mes</Label>
                <Input id="month" type="number" min="1" max="12" placeholder="MM"
                  value={formData.lastJobMonth}
                  onChange={(e) => handleInputChange('lastJobMonth', e.target.value)} />
              </div>
              <div className="flex-1">
                <Label htmlFor="year" className="text-xl text-gray-600">Año</Label>
                <Input id="year" type="number" min="1970" max="2100" placeholder="YYYY"
                  value={formData.lastJobYear}
                  onChange={(e) => handleInputChange('lastJobYear', e.target.value)} />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="currently-working"
                checked={formData.currentlyWorking}
                onCheckedChange={(checked: string | boolean) => handleInputChange('currentlyWorking', checked)} />
              <Label htmlFor="currently-working" className="text-xl text-gray-600">
                Actualmente estoy trabajando
              </Label>
            </div>
          </div>

          {/* Salario */}
          <div className="space-y-3">
            <Label htmlFor="salary" className="text-[#1F294C] text-xl">
              2) Salario mensual (promedio de últimos 5 años)
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input id="salary" type="number" placeholder="25,000"
                value={formData.monthlySalary}
                onChange={(e) => handleInputChange('monthlySalary', e.target.value)}
                className="pl-8" />
            </div>
          </div>

          {/* Semanas */}
          <div className="space-y-3">
            <Label htmlFor="weeks" className="text-[#1F294C] text-xl">
              3) Semanas cotizadas (52 semanas por año trabajado)
            </Label>
            <Input id="weeks" type="number" placeholder="1,300"
              value={formData.weeksCotized}
              onChange={(e) => handleInputChange('weeksCotized', e.target.value)} />
            <p className="text-xl text-gray-600">
              Ejemplo: 25 años trabajados = 1,300 semanas
            </p>
          </div>

          {/* Edad */}
          <div className="space-y-3">
            <Label htmlFor="age" className="text-[#1F294C] text-xl">4) Edad actual</Label>
            <Input id="age" type="number" placeholder="60"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)} />
          </div>

          <Button onClick={calculatePension}
            className="w-full bg-[#04A6CC] hover:bg-[#0391b3] text-white py-3">
            Calcular mi pensión estimada
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
