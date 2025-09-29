import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#1F294C] via-[#234567] to-[#1F294C] text-white py-16 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl mb-6 text-white font-bold">
              Tu Retiro No Es Casualidad,
              <span className="block text-[#04A6CC]">Es Estrategia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 ">
              Maximiza tu pensión y asegura un futuro digno. El 70% de los mexicanos no recibe pensión, tú puedes ser diferente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button size="lg" className="bg-[#04A6CC] hover:bg-[#0391b3] text-white px-8 py-4">
                Calcular mi pensión ahora
              </Button> */}
              <a
  href="#calculator"
  className="bg-[#04A6CC] hover:bg-[#0391b3] text-white px-8 py-4 rounded-lg text-lg font-medium flex items-center justify-center transition-colors duration-200"
>
  Calcular mi pension ahora
</a>
<a
  href="https://wa.me/5213326069751?text=Hola,%20quiero%20agendar%20una%asesoria%20gratuita"
  target="_blank"
  rel="noopener noreferrer"
  className="border-white text-black hover:bg-white hover:text-[#1F294C] px-8 py-4 rounded-lg border text-lg font-medium flex items-center justify-center transition-colors duration-200"
>
  Agendar asesoria gratuita
</a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:flex justify-center items-center hidden">
            <div className="relative">
              <ImageWithFallback
                src="https://thumbs.dreamstime.com/b/laptop-pointing-mature-couple-home-internet-online-planning-website-to-check-application-together-hug-love-happy-woman-278017477.jpg"
                alt="Financial planning and retirement calculation"
                className="rounded-lg shadow-2xl w-full max-w-lg h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F294C]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}