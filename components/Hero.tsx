import React from "react";

export const Héroe = ({
  onScrollTo,
  onStartSession,
}: {
  onScrollTo: (id: string) => void;
  onStartSession: () => void;
}) => {
  return (
    <>
      {/* HERO (sin botón de comenzar aquí) */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center pt-28">
          <h1 className="text-5xl md:text-7xl font-bold italic mb-6">
            Reprograma tu mente.
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Sesiones de hipnosis clínica diseñadas para acceder a tu subconsciente y liberar
            patrones que ya no te pertenecen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => onScrollTo("science")}
              className="px-8 py-4 rounded-full border border-white/10 bg-transparent hover:bg-white/5 transition-all font-semibold"
            >
              Ver la ciencia
            </button>
          </div>
        </div>
      </section>

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
                name: "Carlos R.",
                text: "En solo 5 minutos logré desbloquear un miedo a hablar en público que tuve por años. La precisión es increíble.",
                role: "Emprendedor",
              },
              {
                name: "Elena M.",
                text: "Nunca había experimentado una hipnosis tan directa y sin rellenos. Grei va directo al punto.",
                role: "Atleta",
              },
              {
                name: "Javier L.",
                text: "Las sesiones cortas me permiten reprogramar mi día antes de empezar a trabajar. Imprescindible.",
                role: "Ejecutivo",
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
              mujeres que saben que hay "algo más" y buscan recablear su mente para sanar
              sus relaciones y reclamar su libertad. Mi acompañamiento es como mi método:
              Rápido, Directo e Inevitable.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          &copy; 2024 Ilimitadamente Grei. Todos los derechos reservados.
        </div>
      </footer>

      {/* ✅ CTA FINAL: AHORA SÍ después de “Sobre Grei” */}
      <section className="py-28 px-6 bg-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold italic mb-6">
            Cuando estés lista, tu sesión comienza aquí.
          </h2>

          <p className="text-slate-400 mb-10 text-lg">
            No necesitas creer en nada.
            <br />
            Solo permitirte unos minutos para volver a tu centro.
          </p>

          <button
            onClick={onStartSession}
            className="px-10 py-4 bg-blue-600 rounded-full text-lg font-bold hover:bg-blue-500 transition-all"
          >
            Comenzar sesión
          </button>
        </div>
      </section>
    </>
  );
};
