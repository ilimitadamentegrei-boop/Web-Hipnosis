import React, { useState } from 'react';
import { AppState, HypnosisFormData, SessionResult } from './types';
import { Hero } from './components/Hero';
import { HypnosisForm } from './components/HypnosisForm';
import { SessionPlayer } from './components/SessionPlayer';
import { gemini } from './services/geminiService';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.HOME);
  const [sessionData, setSessionData] = useState<SessionResult | null>(null);
  const [loadingStep, setLoadingStep] = useState<string>('');

  const scrollToSection = (id: string) => {
    if (state !== AppState.HOME) {
      setState(AppState.HOME);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (data: HypnosisFormData) => {
    setState(AppState.GENERATING);
    try {
      setLoadingStep('Analizando tus patrones subconscientes...');
      const script = await gemini.generateHypnosisScript(data);

      setLoadingStep('Sintonizando la voz...');
      const audio = await gemini.generateSpeech(script, data.voiceType);

      setSessionData({ script, audioData: audio });
      setState(AppState.SESSION);
    } catch (error) {
      console.error('Session generation failed:', error);
      alert('Hubo un error al generar tu sesión. Intenta de nuevo.');
      setState(AppState.FORM);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div
          onClick={() => setState(AppState.HOME)}
          className="text-xl font-bold tracking-tighter cursor-pointer"
        >
          ILIMITADAMENTE <span className="text-blue-500">GREI</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <button onClick={() => scrollToSection('science')} className="hover:text-white transition-colors">
            La Ciencia
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
            Sobre Grei
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">
            Testimonios
          </button>
        </div>

        <button
          onClick={() => setState(AppState.FORM)}
          className="px-5 py-2 bg-blue-600 rounded-full text-sm font-bold hover:bg-blue-500 transition-all"
        >
          Sesión Personalizada
        </button>
      </nav>

      {/* Dynamic Content */}
      <main>
        {state === AppState.HOME && (
          <>
            <Hero onStart={() => setState(AppState.FORM)} onScrollTo={scrollToSection} />

            {/* Science */}
            <section id="science" className="py-24 px-6 bg-slate-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">La Ciencia de la Reprogramación</h2>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">Neuroplasticidad</h3>
                    <p className="text-slate-400 mt-4">
                      Accedemos a estados Theta donde la mente es altamente receptiva al cambio.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">Lenguaje de Impacto</h3>
                    <p className="text-slate-400 mt-4">
                      Comandos lingüísticos diseñados para el subconsciente, sin afirmaciones vacías.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-24 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Resultados Reales</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: 'Carlos R.', text: 'Preciso y directo.', role: 'Emprendedor' },
                    { name: 'Elena M.', text: 'Hipnosis real, sin relleno.', role: 'Atleta' },
                    { name: 'Javier L.', text: 'Me centra en minutos.', role: 'Ejecutivo' },
                  ].map((t, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 italic">
                      <p className="text-slate-300 mb-6">"{t.text}"</p>
                      <div className="font-bo
