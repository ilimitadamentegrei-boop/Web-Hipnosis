import type { HypnosisFormData } from "../types";

type GeneratedSession = {
  script: string;
  audioBase64: string;
};

function safeText(v: unknown) {
  return (typeof v === "string" ? v : "").trim();
}

export async function generateSession(data: HypnosisFormData): Promise<GeneratedSession> {
  try {
    const name = safeText((data as any)?.name) || "mi amor";
    const goal = safeText((data as any)?.primaryGoal) || "volver a tu centro";
    const obstacle = safeText((data as any)?.biggestObstacle) || "un pensamiento repetitivo";
    const duration = safeText((data as any)?.sessionDuration) || "3";
    const voice = safeText((data as any)?.voiceType) || "Kore";

    const tone =
      voice === "Puck"
        ? "directa, firme y energética"
        : "suave, maternal y contenida";

    const script =
      `Hola ${name}. ` +
      `Esta sesión es corta (${duration} minutos), pero precisa. ` +
      `Hoy vamos a trabajar: ${goal}. ` +
      `Y vamos a desactivar esto: ${obstacle}. ` +
      `\n\nRespira conmigo.\n` +
      `Inhala lento por la nariz… y exhala suave por la boca.\n` +
      `Otra vez: inhalo calma… exhalo tensión.\n` +
      `Otra vez: inhalo presencia… exhalo ruido mental.\n` +
      `Otra vez: inhalo poder… exhalo duda.\n` +
      `\n\nAhora escucha esto con una voz ${tone}:\n` +
      `Tu mente ya no manda sola.\n` +
      `Tu cuerpo aprende a soltar.\n` +
      `Tu sistema nervioso recuerda la calma.\n` +
      `\n\nCada exhalación libera.\n` +
      `Cada inhalación te fortalece.\n` +
      `Y desde este momento, eliges una sola cosa:\n` +
      `hacer espacio dentro de ti… para que tu enfoque vuelva.\n`;

    return {
      script,
      audioBase64: "", // (voz real se conecta después)
    };
  } catch (err) {
    // Fallback ABSOLUTO para que jamás salga el popup
    return {
      script:
        "Respira conmigo... Inhala lento, exhala suave. Estás a salvo aquí. " +
        "Tu cuerpo aprende a soltar tensión, y tu mente aprende a volver a la calma. " +
        "Cada exhalación libera. Cada inhalación te fortalece.",
      audioBase64: "",
    };
  }
}

export const gemini = {
  generateSession,
};
