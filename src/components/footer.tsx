import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1F294C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl text-[#04A6CC] mb-4">LIDFI</h3>
            <p className="text-gray-300 mb-4">
              Asesoría Financiera y Patrimonial especializada en maximizar tu pensión y asegurar tu futuro.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[#04A6CC] cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-[#04A6CC] cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#04A6CC] cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Planificación de retiro</li>
              <li>Modalidad 40</li>
              <li>Optimización AFORE</li>
              <li>Asignaciones familiares</li>
              <li>Asesoría Ley 73/97</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Calculadora de pensión</li>
              <li>Guías gratuitas</li>
              <li>Blog financiero</li>
              <li>Preguntas frecuentes</li>
              <li>Casos de éxito</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+52 (33) 1301-3253</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contacto@lidfi.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Guadalajara, Jalisco, México</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 LIDFI Asesoría Financiera y Patrimonial. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            La información proporcionada es de carácter informativo y no constituye asesoría legal o financiera personalizada.
          </p>
        </div>
      </div>
    </footer>
  );
}