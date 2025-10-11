import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AlertTriangle, BookOpen, Target, CheckCircle } from 'lucide-react';

export function InfoSections() {
  return (
    <div className="space-y-20">
     {/* Problem Section */}
<section className="bg-red-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 rounded-full mb-6 shadow-lg">
        <AlertTriangle className="h-10 w-10 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-[#1F294C] mb-4">
        La Realidad del Retiro en México
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Una crisis silenciosa que puede evitarse con la estrategia correcta
      </p>
    </div>
    <br/>

    <div className="grid md:grid-cols-2 gap-12 text-center">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold text-red-600 mb-4">70%</div>
        <p className="text-xl text-gray-700">
          de los adultos mayores en México <br /> no recibe pensión
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold text-red-600 mb-4">
          3 Principales Causas
        </div>
        <ul className="text-lg text-gray-700 space-y-3 text-left max-w-sm mx-auto">
          <li className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0" />
            Desinformación sobre derechos
          </li>
          <li className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0" />
            Complejidad de trámites
          </li>
          <li className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0" />
            Pérdida de vigencia de derechos
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Strategies Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1F294C] rounded-full mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#1F294C] mb-4">
              Estrategias Que Transformarán Tu Pensión
            </h2>
            <p className="text-xl text-gray-600">
              La diferencia entre una pensión promedio y una optimizada
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#04A6CC] to-[#1F294C] text-white">
                <CardTitle>Modalidad 40: Tu Inversión Más Rentable</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Continúa cotizando voluntariamente para aumentar tu salario base de cotización.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Aumenta tu promedio salarial</li>
                  <li>• Suma semanas adicionales</li>
                  <li>• ROI extraordinario a largo plazo</li>
                  <li>• Hasta 25 UMAs de cotización</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#234567] to-[#1F294C] text-white">
                <CardTitle>Asignaciones Familiares +25%</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Derecho poco conocido que puede aumentar tu pensión hasta 25%.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Por cónyuge dependiente</li>
                  <li>• Por hijos menores</li>
                  <li>• Por ascendientes dependientes</li>
                  <li>• Incremento permanente</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}