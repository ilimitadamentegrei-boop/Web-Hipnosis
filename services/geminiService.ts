// services/geminiService.ts
import { HypnosisFormData } from "../types";

export type SessionResult = {
  script: string;
  audioData?: string; // si luego generas audio base64, lo pones aqui
};

async function generateSession(_data: HypnosisFormData): Promise<SessionResult> {
  // Stub para que el deploy compile SIN errores.
  // Luego conectamos Gemini/Audio con calma.
  return {
    script:
      "Respira conmigo... Inhala lento, exhala suave. Estás a salvo aquí. " +
      "Tu cuerpo aprende a soltar tensión, y tu mente aprende a volver a la calma. " +
      "Cada exhalación libera. Cada inhalación te fortalece.",
    audioData: "",
  };
}

export const gemini = {
  generateSession,
};
