import React, { useEffect, useRef } from "react";

type Props = {
  script: string;
  audioBase64: string;
  onFinish: () => void;
};

export const SessionPlayer: React.FC<Props> = ({ script, audioBase64, onFinish }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => onFinish();
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Tu sesión está lista
        </h1>

        <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-6 mb-8">
          <audio
            ref={audioRef}
            controls
            className="w-full"
            src={`data:audio/mpeg;base64,${audioBase64}`}
          />
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => audioRef.current?.play()}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold"
            >
              Reproducir
            </button>
            <button
              onClick={() => audioRef.current?.pause()}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold"
            >
              Pausar
            </button>
            <button
              onClick={onFinish}
              className="ml-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold"
            >
              Volver al inicio
            </button>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-3">Guion</h2>
        <div className="rounded-3xl bg-slate-900/30 border border-slate-800 p-6 whitespace-pre-wrap leading-relaxed text-slate-200">
          {script}
        </div>
      </div>
    </div>
  );
};
