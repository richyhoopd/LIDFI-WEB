import React from 'react';
import { Shield, TrendingUp, Clock } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#04A6CC] rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl text-[#1F294C] mb-4 font-bold">Estrategia Personalizada</h3>
            <p className="text-xl text-gray-600">
              Cada situación es única. Diseñamos el plan perfecto para tu perfil.
            </p>
          </div>
          
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#04A6CC] rounded-full mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl text-[#1F294C] mb-4 font-bold">Maximiza tu Pensión</h3>
            <p className="text-xl text-gray-600">
              Aumenta hasta 300% tu pensión con las estrategias correctas.
            </p>
          </div>
          
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#04A6CC] rounded-full mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl text-[#1F294C] mb-4 font-bold">El Momento Es Ahora</h3>
            <p className="text-xl text-gray-600">
              Cada día que esperas, pierdes oportunidades de optimización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}