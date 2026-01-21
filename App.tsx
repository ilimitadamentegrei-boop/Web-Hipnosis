import React, { useState } from "react";
import { AppState, HypnosisFormData, SessionResult } from "./tipos";
import { Héroe } from "./componentes/Héroe";
import { HypnosisForm } from "./componentes/HypnosisForm";
import { SessionPlayer } from "./componentes/SessionPlayer";
import { gemini } from "./servicios/geminiService";

const Aplicación: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.HOME);
  const [sessionData, setSessionData] = useState<SessionResult | null>(null);
  const [loadingStep, setLoadingStep] = useState("");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (data: HypnosisFormData) => {
    setState(AppState.GENERATING);

    try {
      setLoadingStep("Creando tu sesión...");

      const result = await gemini.generateSession(data);

      setSessionData({
        script: result.script,
        audioData: result.audioBase64 ?? "",
      });

      setState(AppState.SESSION);
    } catch (err) {
      console.error(err);
      alert("Hubo un error al generar tu sesión. Intenta nuevamente.");
      setState(AppState.FORM);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div
          onClick={() => setState(AppState.HOME)}
          className="text-xl font-bold tracking-tighter cursor-pointer"
        >
          ILIMITADAMENTE <span className="text-blue-500">GREI</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-slate-400">
          <button onClick={() => scrollToSection("science")}>La Ciencia</button>
          <button onClick={() => scrollToSection("about")}>Sobre Grei</button>
          <button onClick={() => scrollToSection("testimonials")}>Testimonios</button>
        </div>

        <button
          onClick={() => setState(AppState.FORM)}
          className="px-5 py-2 bg-blue-600 rounded-full text-sm font-bold"
        >
          Sesión Personalizada
        </button>
      </nav>

      <main>
        {state === AppState.HOME && (
          <Héroe onScrollTo={scrollToSection} />
        )}

        {state === AppState.FORM && (
          <HypnosisForm
            onSubmit={handleFormSubmit}
            onBack={() => setState(AppState.HOME)}
          />
        )}

        {state === AppState.GENERATING && (
          <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">
              Creando tu espacio de calma
            </h2>
            <p className="text-slate-400">{loadingStep}</p>
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

export default Aplicación;
