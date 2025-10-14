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
import { AlertTriangle, BookOpen, Target, CheckCircle, Calculator, TrendingUp } from 'lucide-react';
import { CalculatorFormLey97 } from './src/components/calculator-form-ley97';
import { ResultsPanelLey97 } from './src/components/results-panel-ley97'


export default function App() {
  const [activeCalculatorTab, setActiveCalculatorTab] = useState<'ley73' | 'ley97'>('ley73');
const [calculationResultsLey97, setCalculationResultsLey97] = useState<{ 
  pensionEstimada: number; 
  saldoAfore: number; 
  modalidadRecomendada: string;
  añosDeRetiro: number;
} | null>(null);

// Agrega esta función handler:
const handleCalculationLey97 = (results: { 
  pensionEstimada: number; 
  saldoAfore: number; 
  modalidadRecomendada: string;
  añosDeRetiro: number;
}) => {
  setCalculationResultsLey97(results);
};
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

{/* Pensión Garantizada 2025 Section */}
<section className="bg-gradient-to-b from-blue-50 to-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1F294C] rounded-full mb-6 shadow-lg">
        <CheckCircle className="h-10 w-10 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-[#1F294C] mb-4">
        Sabes Cuánto Es Tu Pensión Garantizada en 2025?
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Si cotizas bajo la <strong>Ley 97 del IMSS</strong> y no alcanzas el ahorro suficiente en tu AFORE, 
        el gobierno te garantiza una pensión mínima. Pero… ¿es suficiente para vivir con tranquilidad?
      </p>
    </div>
<br />
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#1F294C] mb-2">Montos de la Pensión Garantizada 2025</h3>
        <p className="text-gray-600">
          Los montos dependen de tu edad, semanas cotizadas y salario base.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-4 bg-blue-50 rounded-xl">
          <p className="text-4xl font-bold text-[#1F294C] mb-2">$3,414</p>
          <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Pensión Mínima</p>
        </div>

        <div className="p-4 bg-blue-100 rounded-xl">
          <p className="text-4xl font-bold text-[#1F294C] mb-2">$6,000</p>
          <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Promedio Nacional</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-xl">
          <p className="text-4xl font-bold text-[#1F294C] mb-2">$10,732</p>
          <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Pensión Máxima</p>
        </div>
      </div>
<br/>
      <div className="mt-10 text-center">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La <strong>Pensión Mínima Garantizada</strong> bajo la Ley 97 asegura un ingreso 
          mensual entre <strong>$3,414 y $10,732</strong> pesos.  
          Sin embargo, la mayoría de los trabajadores recibe alrededor de <strong>$6,000</strong> al mes, 
          una cantidad insuficiente para cubrir gastos básicos de vivienda, salud y alimentación.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 inline-block max-w-6xl">
          <p className="text-yellow-800 font-semibold text-lg mb-2">
            ⚠️ Aún estás a tiempo de mejorar tu futuro financiero.
          </p>
          <p className="text-yellow-700">
            Optimiza tu AFORE, realiza aportaciones voluntarias o explora la <strong>Modalidad 40 </strong> 
            antes de llegar a la edad de retiro. Cada año cuenta.
          </p>
        </div>
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
    
    {/* Tabs Container */}
<div className="max-w-6xl mx-auto">
  {/* Tab Buttons */}
  <div className="flex justify-center mb-8">
    <div className="inline-flex rounded-lg shadow-sm bg-white p-1 border border-gray-200" role="group">
      {/* Ley 73 */}
      <button
        onClick={() => setActiveCalculatorTab('ley73')}
        className={`
          flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-l-lg transition-all duration-200
          ${
            activeCalculatorTab === 'ley73'
              ? 'bg-[#1F294C] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-transparent hover:border-gray-200'
          }
        `}
      >
        <Calculator className="w-5 h-5" />
        Calcular Ley 73
      </button>

      {/* Ley 97 */}
      <button
        onClick={() => setActiveCalculatorTab('ley97')}
        className={`
          flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-r-lg transition-all duration-200
          ${
            activeCalculatorTab === 'ley97'
              ? 'bg-[#1F294C] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-transparent hover:border-gray-200'
          }
        `}
      >
        <TrendingUp className="w-5 h-5" />
        Calcular Ley 97
      </button>
    </div>
  </div>
</div>
    <div className="max-w-4xl mx-auto">

      {/* Tab Content */}
      <div className="mt-8">
        {activeCalculatorTab === 'ley73' ? (
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Calculator Form Ley 73 - Left */}
            <div>
              <CalculatorForm onCalculate={handleCalculation} />
            </div>
            
            {/* Results Panel Ley 73 - Right */}
            <div>
              <ResultsPanel results={calculationResults} />
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Calculator Form Ley 97 - Left */}
            <div>
              <CalculatorFormLey97 onCalculate={handleCalculationLey97} />
            </div>
            
            {/* Results Panel Ley 97 - Right */}
            <div>
              <ResultsPanelLey97 results={calculationResultsLey97} />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>
      {/* Savings Section 1 - 40 to 65 years */}
      <section className="py-20 bg-gradient-to-br from-[#04A6CC] to-[#1F294C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-4xl font-bold text-[#fff]">
                ¿40 Años y Sin Plan de Retiro? 
                <span className="block text-yellow-300 mt-2">¡Aún Estás a Tiempo!</span>
              </h2>
              <br />
              <p className="text-2xl mb-8 text-blue-100 font-semibold">
                Con solo $2,000 MXN al mes hasta los 65 años, podrías acumular: $1,929,394 Para tu retiro digno y tranquilo
              </p>
              
              <ul className="space-y-4 mb-8 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <span>Solo $2,000 pesos mensuales - menos que una salida al restaurante</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <span>Rendimientos compuestos trabajando para ti por 25 años</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏖️</span>
                  <span>Retírate con tranquilidad financiera y disfruta tu vejez</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🛡️</span>
                  <span>Protege a tu familia y deja un legado</span>
                </li>
              </ul>

              <a 
                href="https://wa.me/5213326069751?text=Hola,%20quiero%20información%20sobre%20el%20plan%20de%20ahorro%20para%20el%20retiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#1F294C] px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all hover:scale-105 shadow-2xl"
              >
                💬 Quiero Comenzar a Ahorrar Ahora
              </a>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=600&fit=crop" 
                  alt="Pareja feliz planificando su retiro"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Section 2 - 30+ years, 10 year plan */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#04A6CC] to-[#1F294C] rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=600&fit=crop" 
                  alt="Joven profesionista planificando su futuro"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-[#1F294C] mb-6 leading-tight">
                Plan Privado de Pensión
              </h2>
              <p className="text-2xl mb-6 text-gray-700 font-semibold">
                Ahorra $2,000 al mes durante 10 años y a los 65 años podrías tener: <b>+$1,000,000</b> sin aportar un peso más después del año 10
              </p>
            

              <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-[#04A6CC]">
                <p className="text-gray-700 font-semibold text-lg">
                  📊 <strong>El Secreto:</strong> El interés compuesto hará crecer tu dinero automáticamente 
                  por más de 25 años adicionales. ¡Tu dinero trabaja mientras tú vives!
                </p>
              </div>

              <ul className="space-y-4 mb-8 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <span><strong>Solo 10 años de ahorro</strong> - Del año 30 al 40 de tu vida</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <span><strong>Efecto multiplicador</strong> - Tu dinero crece exponencialmente con el tiempo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <span><strong>Inversión total:</strong> $240,000 se convierten en +$1,000,000</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <span><strong>Libertad financiera</strong> - Retírate antes de los 65 si lo deseas</span>
                </li>
              </ul>

              <a 
                href="https://wa.me/5213326069751?text=Hola,%20tengo%2030%20años%20y%20quiero%20información%20sobre%20el%20plan%20de%20ahorro%20de%2010%20años"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#04A6CC] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#1F294C] transition-all hover:scale-105 shadow-xl"
              >
                💬 Comenzar Mi Plan de 10 Años
              </a>
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