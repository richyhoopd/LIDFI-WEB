// EstoEsTuDerecho.tsx
import React from 'react';
import { ShieldCheck } from 'lucide-react';
import imgder from '../assets/tablacustom.jpg';
export function EstoEsTuDerecho() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Encabezado */}
        {/* <div className="mb-12">
            <br />
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1F294C] rounded-full mb-6 shadow-lg">
            <ShieldCheck className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F294C] mb-4">
            Esto es tu derecho
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La pensión no es un favor del Estado, es el resultado de tus años de esfuerzo, trabajo y aportaciones.  
            Conoce lo que te pertenece y asegúrate de hacerlo valer.
          </p>
        </div> */}

        {/* Imagen principal */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:scale-[1.02] transition-transform duration-300">
            <img
              src={imgder}
              alt="Esto es tu derecho"
              className="w-80 h-80 object-cover md:w-[420px] md:h-[420px]"
            />
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}
