import React, { useState } from 'react';
import { Header } from './src/components/header';
import { HeroSection } from './src/components/hero-section';
import { FeaturesSection } from './src/components/features-section';
import { CalculatorForm } from './src/components/calculator-form';
import { ResultsPanel } from './src/components/results-panel';
import { InfoSections } from './src/components/info-sections';
import { TestimonialsSection } from './src/components/testimonials-section';
import { FAQSection } from './src/components/faq-section';
import { CTASection } from './src/components/cta-section';
import { Footer } from './src/components/footer';
import { AlertTriangle, BookOpen, Target, CheckCircle } from 'lucide-react';


export default function App() {
  const [calculationResults, setCalculationResults] = useState<{ normal: number; optimized: number } | null>(null);

  const handleCalculation = (results: { normal: number; optimized: number }) => {
    setCalculationResults(results);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />

      {/* Education Section */}
<section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-[#04A6CC] rounded-full mb-6 shadow-lg">
        <BookOpen className="h-10 w-10 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-[#1F294C] mb-4">
        Ley 73 vs Ley 97: <span className="text-[#04A6CC]">Tu Futuro</span> Depende de Conocer la Diferencia
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Ley 73 */}
      <div className="bg-white shadow-md rounded-xl p-8 border-t-8 border-t-[#04A6CC] hover:scale-105 transition-transform">
        <h3 className="text-2xl font-bold text-[#1F294C] mb-6 flex items-center gap-2">
          🌟 Ley 73 - La Oportunidad Dorada
        </h3>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
            Pensión vitalicia garantizada por el Estado
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
            Solo 500 semanas cotizadas requeridas
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
            Aguinaldo anual incluido
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
            Basada en promedio de últimos 5 años
          </li>
        </ul>
        <br />
        <p className="text-lg text-blue-600 mt-6 italic">
          Aplica si comenzaste a cotizar <br /> antes del 1 julio 1997
        </p>
      </div>

      {/* Ley 97 */}
      <div className="bg-white shadow-md rounded-xl p-8 border-t-8 border-t-[#234567] hover:scale-105 transition-transform">
        <h3 className="text-2xl font-bold text-[#1F294C] mb-6 flex items-center gap-2">
          📊 Ley 97 - Tu Esfuerzo, Tu Recompensa
        </h3>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
            Pensión basada en tu AFORE
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
            850 semanas en 2025 (aumenta cada año)
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
            Renta vitalicia o retiro programado
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
            Depende de rendimientos de inversión
          </li>
        </ul>
        <br />
        <p className="text-lg text-blue-600 mt-6 italic">
          Aplica si comenzaste a cotizar <br /> después del 1 julio 1997
        </p>
      </div>
    </div>
  </div>
</section>

      
      {/* Calculator Section */}
      <section className="py-20 bg-gray-50" id='calculator'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F294C] mb-4">
              Descubre Tu Potencial de Pensión
            </h2>
            <p className="text-xl text-gray-600">
              Con solo 4 datos, conoce cuánto podrías estar recibiendo de pensión
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Calculator Form - Left */}
            <div>
              <CalculatorForm onCalculate={handleCalculation} />
            </div>
            
            {/* Results Panel - Right */}
            <div>
              <ResultsPanel results={calculationResults} />
            </div>
          </div>
        </div>
      </section>
      
      <InfoSections />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}