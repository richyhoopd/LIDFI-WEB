import React from 'react';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: "MARIA DEL ROSARIO CORONA MORALES",
    image: "https://images.unsplash.com/photo-1758600433168-96cda89ad157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg2NjA0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Gracias a LIDFI logré una pensión de $26,639.00. Tenía dos años sin cotizar, llegué con ellos y no solo me pensioné sino que también me financiaron la MOD 40 y tengo una pensión digna."
  },
  {
    id: 2,
    name: "RAMON HERNANDEZ OCHOA",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NTk5NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Gracias a que me acerqué con tiempo a LIDFI, me asesoraron y me llevaron de la mano para alcanzar una pensión de $30,036.00. Una buena pensión sí es posible."
  },
  {
    id: 3,
    name: "MARIA MAGDALENA MARTINEZ",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODU2Nzk0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Gracias a LIDFI me pude pensionar ya que tenía muchos años sin cotizar y con su ayuda pude pensionarme, recuperé mis derechos y ya disfruto de una pensión."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1F294C] mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600">
            Miles de personas ya han optimizado su pensión con nuestra asesoría
          </p>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={`Foto de ${testimonial.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 mb-4 italic">
                          "{testimonial.text}"
                        </p>
                        <p className="text-[#1F294C] font-medium">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
