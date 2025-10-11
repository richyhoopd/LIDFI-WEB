import React, { useState } from 'react';
import { Calculator, DollarSign, Calendar, Briefcase, TrendingUp, AlertCircle, CheckCircle, Info } from 'lucide-react';


// results-panel-ley97.tsx
interface ResultsPanelLey97Props {
  results: {
    pensionEstimada: number;
    saldoAfore: number;
    modalidadRecomendada: string;
    añosDeRetiro: number;
  } | null;
}

export const ResultsPanelLey97: React.FC<ResultsPanelLey97Props> = ({ results }) => {
  if (!results) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Ingresa tus datos para ver tu proyección
          </h3>
          <p className="text-gray-500">
            Tu cálculo de pensión aparecerá aquí
          </p>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const isWarning = results.modalidadRecomendada.includes('⚠️');

  return (
    <div className="space-y-6">
      {/* Main Results Card */}
      <div className={`rounded-2xl p-8 shadow-xl ${
        isWarning 
          ? 'bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300' 
          : 'bg-gradient-to-br from-blue-50 to-purple-50'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-[#1F294C]">Tu Proyección Ley 97</h3>
          {!isWarning && (
            <CheckCircle className="h-8 w-8 text-green-500" />
          )}
        </div>

        {!isWarning ? (
          <>
            <div className="space-y-6">
              {/* Pensión Estimada */}
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm font-semibold text-gray-600 mb-2">
                  PENSIÓN MENSUAL ESTIMADA
                </p>
                <p className="text-4xl font-bold text-[#234567]">
                  {formatCurrency(results.pensionEstimada)}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Modalidad: {results.modalidadRecomendada}
                </p>
              </div>

              {/* Saldo AFORE Proyectado */}
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm font-semibold text-gray-600 mb-2">
                  SALDO AFORE A LOS 65 AÑOS
                </p>
                <p className="text-3xl font-bold text-[#04A6CC]">
                  {formatCurrency(results.saldoAfore)}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  En {results.añosDeRetiro} años
                </p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6 bg-white rounded-xl p-6">
              <h4 className="font-semibold text-[#1F294C] mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Recomendaciones para mejorar tu pensión
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Realiza aportaciones voluntarias mensuales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Cambia a una AFORE con mejores rendimientos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Mantén tu empleo formal para seguir cotizando</span>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-orange-900 mb-2">
                  Atención Requerida
                </p>
                <p className="text-orange-800">
                  {results.modalidadRecomendada}
                </p>
                <p className="text-sm text-orange-700 mt-3">
                  Es importante que aumentes tus semanas cotizadas o consideres 
                  estrategias alternativas para asegurar tu retiro.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Card */}
      <div className="bg-gradient-to-r from-[#234567] to-[#1F294C] rounded-2xl p-8 text-white">
        <h3 className="text-xl font-bold mb-3">
          ¿Quieres maximizar tu pensión?
        </h3>
        <p className="text-blue-100 mb-6">
          Nuestros expertos pueden ayudarte a diseñar una estrategia personalizada 
          para aumentar tu pensión hasta un 40%
        </p>
        <button className="w-full bg-white text-[#234567] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Solicitar Asesoría Gratuita
        </button>
      </div>
    </div>
  );
};