import React from 'react';
import { Card, CardContent } from './ui/card';
import { TrendingUp, ArrowUp } from 'lucide-react';

interface ResultsPanelProps {
  results: { normal: number; optimized: number; basePercentage: number; ageFactor: number } | null;
}

export function ResultsPanel({ results }: ResultsPanelProps) {
  if (!results) {
    return (
      <Card className="w-full bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full mb-6">
            <TrendingUp className="h-10 w-10 text-gray-500" />
          </div>
          <h3 className="text-2xl text-gray-600 mb-4">Resultados</h3>
          <p className="text-gray-500">
            Completa el formulario para descubrir tu potencial de pensión
          </p>
        </CardContent>
      </Card>
    );
  }

  const improvementPercentage = Math.round(((results.optimized - results.normal) / results.normal) * 100);

  return (
    <Card className="w-full bg-gradient-to-br from-[#04A6CC]/5 to-[#1F294C]/10 border-0 shadow-2xl">
      <CardContent className="p-8 space-y-6">
        <h3 className="text-2xl text-[#1F294C] text-center">Resultados de tu cálculo</h3>

        {/* Detalles del cálculo */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-sm space-y-2">
          <p>✅ Porcentaje base por semanas: <b>{results.basePercentage}%</b></p>
          <p>✅ Factor aplicado por edad: <b>{results.ageFactor * 100}%</b></p>
          <p className="text-2xl font-bold text-[#1F294C] mt-2">
            ➡️ Pensión calculada: ${results.normal.toLocaleString('es-MX', { minimumFractionDigits: 2 })} mensuales
          </p>
        </div>

        {/* Optimizada */}
        <div className="bg-gradient-to-r from-[#04A6CC] to-[#1F294C] rounded-lg p-6 text-white relative">
          <div className="absolute top-2 right-2">
            <div className="bg-yellow-400 text-[#1F294C] px-3 py-1 rounded-full text-xs font-bold">
              +{improvementPercentage}%
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <ArrowUp className="h-6 w-6 text-yellow-400" />
            <h4 className="text-lg">Con asesoría de LIDFI podrías pensionarte con:</h4>
          </div>
          <p className="text-4xl font-bold mb-1">
            ${results.optimized.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-sm opacity-90">mensuales de por vida</p>
        </div>

        {/* Diferencia */}
        <div className="bg-green-50 rounded-lg p-4 border border-green-200 text-center">
          <p className="text-sm text-green-700 mb-1">Diferencia mensual</p>
          <p className="text-2xl text-green-800">
            +${(results.optimized - results.normal).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-green-600">
            ${(results.optimized - results.normal) * 12} adicionales al año
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/5213326069751?text=Hola,%20quiero%20maximizar%20mi%20pensión"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1F294C] hover:bg-[#234567] text-white py-3 rounded-md flex items-center justify-center"
          >
            Quiero maximizar mi pensión
          </a>
          <a
            href="https://wa.me/5213326069751?text=Hola,%20quiero%20agendar%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-[#04A6CC] text-[#04A6CC] hover:bg-[#04A6CC] hover:text-white py-3 rounded-md flex items-center justify-center"
          >
            Agendar consulta gratuita
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
