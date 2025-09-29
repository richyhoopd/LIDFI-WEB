import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqs = [
  // LEY 73 vs LEY 97
  {
    id: "ley-applicable",
    question: "¿Cómo sé si me corresponde la Ley 73 o la Ley 97?",
    answer: "Ley 73: Si te diste de alta en el IMSS antes del 1 de julio de 1997. Ley 97: Si comenzaste a cotizar a partir del 1 de julio de 1997."
  },
  
  // CÁLCULO DE PENSIÓN
  {
    id: "calculo-pension",
    question: "¿Cómo se calcula la pensión en cada ley?",
    answer: "Ley 73: Se basa en el salario promedio de los últimos 5 años y el número de semanas cotizadas. Ley 97: Depende del ahorro acumulado en tu AFORE, los rendimientos y aportaciones voluntarias."
  },
  
  // REQUISITOS DE SEMANAS
  {
    id: "semanas-cotizadas",
    question: "¿Cuántas semanas necesito cotizar?",
    answer: "Ley 73: Mínimo 500 semanas cotizadas. Ley 97: En 2025 se requieren 850 semanas, aumentando progresivamente hasta 1,000 semanas en 2031."
  },
  
  // EDAD DE JUBILACIÓN
  {
    id: "edad-pension",
    question: "¿Cuál es la edad mínima para pensionarse?",
    answer: "Cesantía en edad avanzada: Desde los 60 años. Vejez: A partir de los 65 años (aplica para ambas leyes)."
  },
  
  // NUEVAS PREGUNTAS INCORPORADAS
  {
    id: "semanas-sin-edad",
    question: "¿Si tengo más de 500 semanas me puedo pensionar aunque no tenga 60 años de edad?",
    answer: "No, porque un requisito es la edad."
  },
  
  {
    id: "modalidad-40-conveniencia",
    question: "¿Me conviene invertirle a mi modalidad 40 si tengo menos de 1300 semanas?",
    answer: "No, porque para el IMSS 500 semanas es un requisito y de ahí incrementa hasta un 2-2.5% más por año trabajado."
  },
  
  {
    id: "vigencia-derechos",
    question: "¿Me puedo pensionar si tengo más de 6 años sin cotizar aunque tenga más de 60 años y más de 500 semanas cotizadas?",
    answer: "No, el IMSS contempla un requisito que se llama vigencia de derechos, que si un trabajador deja de cotizar más de 6 años para pensionarse tiene que cotizar un año obrero patronal."
  },
  
  // MEJORA DE PENSIÓN
  {
    id: "mejorar-pension",
    question: "¿Puedo mejorar mi pensión?",
    answer: "Sí, con estrategias como: Modalidad 40 (Ley 73): Permite seguir cotizando voluntariamente. Aportaciones voluntarias a tu AFORE (Ley 97). Plan privado de pensión (PPR)."
  },
  
  // CONSULTA DE SEMANAS
  {
    id: "consultar-semanas",
    question: "¿Dónde puedo consultar mis semanas cotizadas?",
    answer: "En el portal del IMSS: Consulta de semanas cotizadas. Necesitas tu CURP, NSS y correo electrónico."
  },
  
  // CAMBIO DE AFORE
  {
    id: "cambio-afore-semanas",
    question: "¿Si me cambio de AFORE pierdo semanas?",
    answer: "No, no tiene relación el cambio de AFORE con las semanas cotizadas."
  },
  
  // PÉRDIDA DE DINERO AL CAMBIAR AFORE
  {
    id: "cambio-afore-dinero",
    question: "¿Si me cambio de AFORE pierdo dinero?",
    answer: "No, aunque es cierto que puede haber minusvalía. Si al cambio de AFORE aparece menos, es porque tu AFORE anterior tuvo minusvalía y tomaste una buena decisión al cambiarte. Porque en tu AFORE que te acabas de cambiar no tenía tu dinero no pudo haber invertido mal."
  },
  
  // PREGUNTAS ORIGINALES DEL COMPONENTE
  {
    id: "diferencia-leyes",
    question: "¿Cuál es la diferencia entre Ley 73 y Ley 97?",
    answer: "La Ley 73 garantiza una pensión basada en tu salario promedio de los últimos 5 años y las semanas cotizadas, mientras que la Ley 97 depende del saldo acumulado en tu AFORE. Para muchas personas, la Ley 73 ofrece pensiones más altas, especialmente si cotizaron antes de 1997."
  },
  {
    id: "modalidad-40", 
    question: "¿Qué es la Modalidad 40 y cómo me beneficia?",
    answer: "La Modalidad 40 te permite seguir cotizando voluntariamente al IMSS después de dejar de trabajar. Esto te ayuda a aumentar tu salario promedio de cotización y obtener más semanas, lo que resulta en una pensión más alta. Es especialmente útil para optimizar tu pensión antes del retiro."
  },
  {
    id: "tiempo-proceso",
    question: "¿Cuánto tiempo toma el proceso de optimización de pensión?",
    answer: "El proceso típicamente toma entre 3 a 6 meses, dependiendo de tu situación particular. Incluye la revisión de tu historial laboral, identificación de semanas no reconocidas, trámites ante el IMSS, y la implementación de estrategias como Modalidad 40 si es necesario."
  },
  {
    id: "recuperar-semanas",
    question: "¿Puedo recuperar semanas cotizadas no reconocidas por el IMSS?",
    answer: "Sí, es muy común que el IMSS no tenga registradas todas las semanas que trabajaste. Nuestro equipo se especializa en identificar y recuperar estas semanas perdidas a través de la documentación adecuada y los trámites correspondientes ante el Instituto."
  },
  {
    id: "documentos-requeridos",
    question: "¿Qué documentos necesito para iniciar mi asesoría?",
    answer: "Necesitarás tu NSS (Número de Seguridad Social), estados de cuenta del IMSS de los últimos años, comprobantes de trabajo, y cualquier documentación laboral que tengas. Nuestro equipo te guiará sobre qué documentos específicos necesitas según tu caso particular."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1F294C] mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-2xl text-gray-600">
            Resolvemos las dudas más comunes sobre pensiones y nuestros servicios
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-left text-xl text-[#1F294C] hover:text-[#04A6CC] transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xl text-gray-700 pt-4 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}