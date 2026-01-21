import React from "react";

type Props = {
  onScrollTo: (id: string) => void;
};

export const Hero: React.FC<Props> = ({ onScrollTo }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 italic">
        Reprograma tu mente.
      </h1>

      <p className="max-w-2xl text-slate-400 mb-10">
        Sesiones de hipnosis clínica diseñadas para acceder a tu subconsciente y
        liberar patrones que ya no te pertenecen.
      </p>

      {/* ✅ Aquí SOLO dejamos “Ver la ciencia” (quitamos “Comenzar sesión” del Hero) */}
      <div className="flex gap-4">
        <button
          onClick={() => onScrollTo("science")}
          className="px-8 py-3 border border-slate-700 rounded-full hover:border-slate-400 transition-all"
        >
          Ver la ciencia
        </button>
      </div>
    </section>
  );
};
