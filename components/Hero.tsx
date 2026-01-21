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
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center pt-28">
          <h1 className="text-5xl md:text-7xl font-bold italic mb-6">
            Reprograma tu mente.
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Sesiones de hipnosis clínica diseñadas para acceder a tu subconsciente
            y liberar patrones que ya no te pertenecen.
          </p>

          <button
            onClick={() => onScrollTo("science")}
            className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5"
          >
            Ver la ciencia
          </button>
        </div>
      </section>

      {/* CTA FINAL — DESPUÉS DE TODO */}
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
