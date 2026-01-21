import React from "react";

export const Héroe = ({ onScrollTo }: { onScrollTo: (id: string) => void }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center pt-28">
        <h1 className="text-5xl md:text-7xl font-bold italic mb-6">
          Reprograma tu mente.
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Sesiones de hipnosis clínica diseñadas para acceder a tu subconsciente y
          liberar patrones que ya no te pertenecen.
        </p>

        <button
          onClick={() => onScrollTo("science")}
          className="px-8 py-4 rounded-full border    border-white/10 hover:bg-white/5"
        >
          Ver la ciencia
        </button>
      </div>
    </section>
  );
};
