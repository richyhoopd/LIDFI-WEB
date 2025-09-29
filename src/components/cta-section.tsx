import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Phone, Calendar, MessageCircle, Clock } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#1F294C] to-[#234567] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Tu Retiro Digno Comienza Hoy
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            No dejes tu futuro al azar. Cada día que esperas es una oportunidad perdida de optimizar tu pensión.
          </p>
        </div>

       <div className="grid md:grid-cols-3 gap-8 mb-12">
  <Card className="bg-white/10 backdrop-blur border-0 text-white">
    <CardContent className="p-6 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#04A6CC] rounded-full mb-4">
        <Phone className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-lg mb-2">Consulta Gratuita</h3>
      <p className="text-gray-200 mb-4">
        30 minutos para evaluar tu situación y diseñar tu estrategia
      </p>
      <Button 
        className="w-full bg-white text-[#1F294C] hover:bg-gray-100"
        onClick={() => window.open('https://wa.me/5213326069751?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20de%2030%20minutos', '_blank')}
      >
        Llamar ahora
      </Button>
    </CardContent>
  </Card>

  <Card className="bg-white/10 backdrop-blur border-0 text-white">
    <CardContent className="p-6 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#04A6CC] rounded-full mb-4">
        <Calendar className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-lg mb-2">Agendar Cita</h3>
      <p className="text-gray-200 mb-4">
        Reunión presencial u online en el horario que prefieras
      </p>
      <Button 
        className="w-full bg-white text-[#1F294C] hover:bg-gray-100"
        onClick={() => window.open('https://wa.me/5213326069751?text=Hola,%20quiero%20agendar%20una%20cita%20para%20mi%20pensión', '_blank')}
      >
        Agendar
      </Button>
    </CardContent>
  </Card>

  <Card className="bg-white/10 backdrop-blur border-0 text-white">
    <CardContent className="p-6 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#04A6CC] rounded-full mb-4">
        <MessageCircle className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-lg mb-2">WhatsApp</h3>
      <p className="text-gray-200 mb-4">
        Resuelve tus dudas inmediatamente por mensaje
      </p>
      <Button 
        className="w-full bg-white text-[#1F294C] hover:bg-gray-100"
        onClick={() => window.open('https://wa.me/5213326069751?text=Hola,%20tengo%20dudas%20sobre%20mi%20pensión', '_blank')}
      >
        Escribir
      </Button>
    </CardContent>
  </Card>
</div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="h-6 w-6 text-[#04A6CC]" />
            <h3 className="text-2xl text-white">Es urgente</h3>
          </div>
          <p className="text-lg text-gray-200 mb-6">
            Los derechos de la Ley 73 no durarán para siempre. Los últimos trabajadores que pueden aprovecharla se jubilarán entre 2039-2044.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#04A6CC] hover:bg-[#0391b3] text-white px-8 py-4">
              Verificar mis derechos ahora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1F294C] px-8 py-4">
              Descargar guía gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}