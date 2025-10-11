// calculator-form-ley97.tsx
import React, { useState } from 'react';
import { Calculator, TrendingUp, AlertCircle, Info } from 'lucide-react';

interface CalculatorFormLey97Props {
  onCalculate: (results: {
    pensionEstimada: number;
    saldoAfore: number;
    modalidadRecomendada: string;
    añosDeRetiro: number;
  }) => void;
}

export const CalculatorFormLey97: React.FC<CalculatorFormLey97Props> = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    edad: '',
    saldoAfore: '',
    salarioMensual: '',
    semanasCotizadas: '',
    aportacionesVoluntarias: '',
    rendimientoAnual: '5'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.edad || parseInt(formData.edad) < 18 || parseInt(formData.edad) > 100) {
      newErrors.edad = 'Ingresa una edad válida entre 18 y 100 años';
    }
    if (!formData.saldoAfore || parseFloat(formData.saldoAfore) <= 0) {
      newErrors.saldoAfore = 'Ingresa tu saldo actual de AFORE';
    }
    if (!formData.salarioMensual || parseFloat(formData.salarioMensual) <= 0) {
      newErrors.salarioMensual = 'Ingresa un salario válido';
    }
    if (!formData.semanasCotizadas || parseInt(formData.semanasCotizadas) < 0) {
      newErrors.semanasCotizadas = 'Ingresa las semanas cotizadas';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (!validateForm()) return;
    const edad = parseInt(formData.edad);
    const saldoAfore = parseFloat(formData.saldoAfore);
    const salarioMensual = parseFloat(formData.salarioMensual);
    const semanasCotizadas = parseInt(formData.semanasCotizadas);
    const aportacionesVoluntarias = parseFloat(formData.aportacionesVoluntarias) || 0;
    const rendimientoAnual = parseFloat(formData.rendimientoAnual) / 100;

    const edadRetiro = 65;
    const añosParaRetiro = edadRetiro - edad;
    const aportacionMensualObligatoria = salarioMensual * 0.0625;
    const aportacionAnualTotal = (aportacionMensualObligatoria + aportacionesVoluntarias) * 12;

    let saldoProyectado = saldoAfore;
    for (let i = 0; i < añosParaRetiro; i++) {
      saldoProyectado = (saldoProyectado + aportacionAnualTotal) * (1 + rendimientoAnual);
    }

    const mesesRetiro = 240;
    const pensionRetiroProgramado = saldoProyectado / mesesRetiro;
    const pensionRentaVitalicia = pensionRetiroProgramado * 0.75;

    let modalidadRecomendada = 'Retiro Programado';
    let pensionEstimada = pensionRetiroProgramado;

    if (saldoProyectado > 1500000) {
      modalidadRecomendada = 'Renta Vitalicia';
      pensionEstimada = pensionRentaVitalicia;
    }

    const semanasMinimas = 850;
    const semanasProyectadas = semanasCotizadas + (añosParaRetiro * 52);
    if (semanasProyectadas < semanasMinimas) {
      modalidadRecomendada = `⚠️ Atención: No cumplirás las ${semanasMinimas} semanas mínimas requeridas`;
    }

    onCalculate({
      pensionEstimada: Math.round(pensionEstimada),
      saldoAfore: Math.round(saldoProyectado),
      modalidadRecomendada,
      añosDeRetiro: añosParaRetiro
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#1F294C] rounded-xl flex items-center justify-center">
          <TrendingUp className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#1F294C]">Calculadora Ley 97</h3>
          <p className="text-sm text-gray-600">Sistema de cuentas individuales AFORE</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-800 leading-relaxed">
            Con la Ley 97, tu pensión depende del saldo acumulado en tu AFORE. 
            A mayor ahorro y mejores rendimientos, mayor será tu pensión.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {[ 
          { id: 'edad', label: '¿Cuál es tu edad actual?', placeholder: 'Ej: 45', type: 'number' },
          { id: 'saldoAfore', label: 'Saldo actual en tu AFORE', placeholder: 'Ej: 250000', type: 'number' },
          { id: 'salarioMensual', label: 'Salario mensual actual', placeholder: 'Ej: 15000', type: 'number' },
          { id: 'semanasCotizadas', label: 'Semanas cotizadas hasta hoy', placeholder: 'Ej: 520', type: 'number' },
          { id: 'aportacionesVoluntarias', label: 'Aportaciones voluntarias mensuales (opcional)', placeholder: 'Ej: 1000', type: 'number' },
        ].map(({ id, label, placeholder, type }) => (
          <div key={id}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <input
              type={type}
              value={(formData as any)[id]}
              onChange={(e) => handleInputChange(id, e.target.value)}
              className={`w-full px-4 py-3 text-base border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F294C]/40 transition-all ${
                errors[id] ? 'border-red-500 ring-red-200' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder={placeholder}
            />
            {errors[id] && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors[id]}
              </p>
            )}
          </div>
        ))}

        {/* Rendimiento anual */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Rendimiento anual esperado (%)
          </label>
          <select
            value={formData.rendimientoAnual}
            onChange={(e) => handleInputChange('rendimientoAnual', e.target.value)}
            className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F294C]/40 transition-all"
          >
            <option value="3">3% - Conservador</option>
            <option value="5">5% - Moderado (Recomendado)</option>
            <option value="7">7% - Agresivo</option>
            <option value="9">9% - Muy agresivo</option>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-[#1F294C] text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          <Calculator className="h-5 w-5" />
          Calcular Mi Pensión Ley 97
        </button>
      </div>
    </div>
  );
};
