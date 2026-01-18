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
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
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
      alert('Hubo un error al generar tu sesión. Por favor intenta de nuevo.');
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
          <button
            onClick={() => scrollToSection('science')}
            className="hover:text-white transition-colors"
          >
            La Ciencia
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-white transition-colors"
          >
            Sobre Grei
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="hover:text-white transition-colors"
          >
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

            {/* Science Section */}
            <section id="science" className="py-24 px-6 bg-slate-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">La Ciencia de la Reprogramación</h2>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-blue-400">Neuroplasticidad</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Tu cerebro no es estático. Es maleable. A través de la hipnosis clínica,
                      accedemos a estados de ondas Theta donde la mente es receptiva a nuevas
                      instrucciones de alto nivel.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-blue-400">Lenguaje de Impacto</h3>
                    <p className="text-slate-400 leading-relaxed">
                      No usamos afirmaciones genéricas. Utilizamos comandos lingüísticos precisos
                      que eluden la mente crítica para instalar creencias de éxito directamente en
                      tu subconsciente.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-24 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Resultados Reales</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'Carlos R.',
                      text: 'En solo 5 minutos logré desbloquear un miedo a hablar en público que tuve por años. La precisión es increíble.',
                      role: 'Emprendedor',
                    },
                    {
                      name: 'Elena M.',
                      text: 'Nunca había experimentado una hipnosis tan directa y sin rellenos. Grei va directo al punto.',
                      role: 'Atleta',
                    },
                    {
                      name: 'Javier L.',
                      text: 'Las sesiones cortas me permiten reprogramar mi día antes de empezar a trabajar. Imprescindible.',
                      role: 'Ejecutivo',
                    },
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 italic"
                    >
                      <p className="text-slate-300 mb-6">"{t.text}"</p>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-xs text-blue-500 uppercase tracking-widest">
                        {t.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* About / Footer Info */}
            <footer id="about" className="py-24 px-6 border-t border-slate-900 bg-slate-950">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                    alt="Grei"
                    className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-square"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-6 italic">Grei</h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Facilitadora de procesos de transformación humana, especializada en Hipnosis
                    Clínica y Breathwork. Mi misión es demostrarte que los límites de tu vida no
                    están en el mundo exterior, sino en la programación de tu subconsciente.
                  </p>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Formada en los principios de la neurobiología del cambio del Dr. Joe Dispenza
                    y la epigenética de Bruce Lipton, he perfeccionado un método diseñado para
                    mujeres que saben que hay "algo más" y buscan recablear mi mente para sanar
                    sus relaciones y reclamar su libertad. Mi acompañamiento es como mi método:
                    Rápido, Directo e Inevitable.
                  </p>
                  <div className="flex gap-4">
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                      <div className="text-2xl font-bold text-blue-500">10k+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">
                        Mentes Reprogramadas
                      </div>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                      <div className="text-2xl font-bold text-blue-500">15+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">
                        Años de Experiencia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
                &copy; 2024 Ilimitadamente Grei. Todos los derechos reservados.
              </div>
            </footer>
          </>
        )}

        {state === AppState.FORM && (
          <HypnosisForm onSubmit={handleFormSubmit} onBack={() => setState(AppState.HOME)} />
        )}

        {state === AppState.GENERATING && (
          <div className="min-h-screen flex flex-col items-center justify-center px-6">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-8"></div>
            <h2 className="text-2xl font-bold mb-2">Creando tu espacio de calma</h2>
            <p className="text-slate-400 animate-pulse">{loadingStep}</p>
          </div>
        )}

        {state === AppState.SESSION && sessionData && (
          <SessionPlayer
            script={sessionData.script}
            audioBase64={sessionData.audioData}
            onFinish={() => setState(AppState.HOME)}
          />
        )}
      </main>
    </div>
  );
};

export default App;
