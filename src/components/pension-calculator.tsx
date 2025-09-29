import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calculator, TrendingUp, AlertCircle } from 'lucide-react'; // 🔹 agregado AlertCircle para mensajes

export function PensionCalculator() {
  const [formData, setFormData] = useState({
    lastJobMonth: '',
    lastJobYear: '',
    currentlyWorking: false,
    monthlySalary: '',
    weeksCotized: '',
    age: '' // 🔹 NUEVO: edad actual
  });

  // 🔹 ahora guardamos resultados más completos
  const [result, setResult] = useState<{
    normal: number;
    optimized: number;
    basePercentage: number;
    ageFactor: number;
    hasRights: boolean;
  } | null>(null);

  const calculatePension = () => {
    const salary = parseFloat(formData.monthlySalary);
    const weeks = parseInt(formData.weeksCotized);
    const age = parseInt(formData.age);
    const lastYear = parseInt(formData.lastJobYear);
    const lastMonth = parseInt(formData.lastJobMonth);

    if (!salary || !weeks || !age) return;

    // 🔹 Vigencia de derechos
    let hasRights = true;
    if (!formData.currentlyWorking && lastYear && lastMonth) {
      const today = new Date();
      const lastJobDate = new Date(lastYear, lastMonth - 1, 1);
      const diffYears = (today.getTime() - lastJobDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
      if (diffYears > 5) {
        hasRights = false;
      }
    }

    // 🔹 Requisitos mínimos
    if (weeks < 500 || age < 60 || !hasRights) {
      setResult({
        normal: 0,
        optimized: 0,
        basePercentage: 0,
        ageFactor: 0,
        hasRights
      });
      return;
    }

    // 🔹 Porcentaje base por semanas
    let basePercentage = 35;
    if (weeks > 500) {
      const additionalYears = Math.floor((weeks - 500) / 52);
      basePercentage += additionalYears * 1.25;
    }
    basePercentage = Math.min(basePercentage, 100);

    // 🔹 Factor por edad de retiro
    let ageFactor = 1;
    if (age === 60) ageFactor = 0.75;
    else if (age === 61) ageFactor = 0.80;
    else if (age === 62) ageFactor = 0.85;
    else if (age === 63) ageFactor = 0.90;
    else if (age === 64) ageFactor = 0.95;
    else if (age >= 65) ageFactor = 1;

    const normalPension = ((salary * basePercentage) / 100) * ageFactor;
    const optimizedMultiplier = 2.5; // 🔹 asesoría simulada
    const optimizedPension = normalPension * optimizedMultiplier;

    setResult({
      normal: normalPension,
      optimized: optimizedPension,
      basePercentage,
      ageFactor,
      hasRights
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-[#1F294C] to-[#234567] text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3 text-xl">
          <Calculator className="h-6 w-6" />
          Calcula cuánto puede mejorar tu pensión con solo 4 datos
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="grid gap-6">
          {/* Question 1 */}
          <div className="space-y-3">
            <Label className="text-[#1F294C] text-base">
              1) Fecha de baja de mi último trabajo
            </Label>
            <div className="flex gap-3">
              <div className="flex-1">
                <Label htmlFor="month" className="text-sm text-gray-600">Mes</Label>
                <Input
                  id="month"
                  type="number"
                  min="1"
                  max="12"
                  placeholder="MM"
                  value={formData.lastJobMonth}
                  onChange={(e) => handleInputChange('lastJobMonth', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="year" className="text-sm text-gray-600">Año</Label>
                <Input
                  id="year"
                  type="number"
                  min="1970"
                  max="2025"
                  placeholder="YYYY"
                  value={formData.lastJobYear}
                  onChange={(e) => handleInputChange('lastJobYear', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="currently-working"
                checked={formData.currentlyWorking}
                onCheckedChange={(checked: string | boolean) => handleInputChange('currentlyWorking', checked)}
              />
              <Label htmlFor="currently-working" className="text-sm text-gray-600">
                Actualmente estoy trabajando
              </Label>
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-3">
            <Label htmlFor="salary" className="text-[#1F294C] text-base">
              2) Salario mensual (promedio de últimos 5 años)
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="salary"
                type="number"
                placeholder="25,000"
                value={formData.monthlySalary}
                onChange={(e) => handleInputChange('monthlySalary', e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          {/* Question 3 */}
          <div className="space-y-3">
            <Label htmlFor="weeks" className="text-[#1F294C] text-base">
              3) Semanas cotizadas (52 semanas por año trabajado)
            </Label>
            <Input
              id="weeks"
              type="number"
              placeholder="1,300"
              value={formData.weeksCotized}
              onChange={(e) => handleInputChange('weeksCotized', e.target.value)}
            />
            <p className="text-sm text-gray-600">
              Ejemplo: 25 años trabajados = 1,300 semanas
            </p>
          </div>

          {/* 🔹 Question 4: Edad */}
          <div className="space-y-3">
            <Label htmlFor="age" className="text-[#1F294C] text-base">
              4) Edad actual
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="60"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
            />
          </div>

          <Button 
            onClick={calculatePension}
            className="w-full bg-[#04A6CC] hover:bg-[#0391b3] text-white py-3"
          >
            Calcular mi pensión estimada
          </Button>

          {/* Results */}
          {result !== null && (
            <div className="mt-6 p-6 bg-gradient-to-r from-[#04A6CC]/10 to-[#1F294C]/10 rounded-lg border border-[#04A6CC]/20">
              {!result.hasRights ? (
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-lg text-red-600 font-semibold">Sin vigencia de derechos</h3>
                    <p className="text-sm text-gray-700">
                      Han pasado más de 5 años desde tu última cotización y no estás activo en el IMSS. 
                      En este caso no es posible pensionarse bajo la Ley 73, salvo que se reactive la vigencia.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-6 w-6 text-[#04A6CC]" />
                    <h3 className="text-lg text-[#1F294C] font-semibold">Resultado aproximado</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl text-[#1F294C]">
                      Pensión mensual estimada:{" "}
                      <span className="text-[#04A6CC] font-bold">
                        ${result.normal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                      </span>
                    </p>
                    <p className="text-base text-gray-700">
                      Se calculó con un <strong>{result.basePercentage.toFixed(2)}%</strong> 
                      sobre tu salario promedio y un factor por edad de retiro del{" "}
                      <strong>{(result.ageFactor * 100).toFixed(0)}%</strong>.
                    </p>
                    <p className="text-base text-gray-700">
                      Con estrategias de optimización, tu pensión podría aumentar hasta:{" "}
                      <span className="text-green-600 font-bold">
                        ${result.optimized.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      *Este cálculo es una estimación con base en la Ley 73 del IMSS. Los montos finales pueden variar 
                      según tu situación específica, vigencia y ajustes del IMSS.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
