import type { HypnosisFormData } from "../types";

type GeneratedSession = {
  script: string;
  audioBase64: string;
};

export async function generateSession(
  data: HypnosisFormData
): Promise<GeneratedSession> {
  try {
    const res = await fetch("/api/hypnosis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`API error ${res.status}: ${text}`);
    }

    const json = await res.json();

    return {
      script: typeof json?.script === "string" ? json.script : "",
      audioBase64: typeof json?.audioBase64 === "string" ? json.audioBase64 : "",
    };
  } catch (error) {
    console.error("generateSession failed:", error);

    // Fallback absoluto (nunca rompe la UI)
    return {
      script:
        "Respira conmigo... Inhala lento, exhala suave. " +
        "Estás a salvo aquí. Tu cuerpo aprende a soltar tensión, " +
        "y tu mente aprende a volver a la calma. " +
        "Cada exhalación libera. Cada inhalación te fortalece.",
      audioBase64: "",
    };
  }
}

export const gemini = {
  generateSession,
};
