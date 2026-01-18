import React from "react";
import type { HypnosisFormData } from "../types";

type Props = {
  onSubmit: (data: HypnosisFormData) => void;
  isLoading?: boolean;
};

export function HypnosisForm({ onSubmit, isLoading }: Props) {
  const [name, setName] = React.useState("");
  const [goal, setGoal] = React.useState("");
  const [tone, setTone] = React.useState<"maternal" | "neutral" | "direct">("maternal");
  const [duration, setDuration] = React.useState<"7-10" | "10-15" | "15-20">("7-10");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Ajusta los campos al shape de tu HypnosisFormData si tu types.ts pide más/menos.
    // Esto mantiene el formulario funcionando y te deja compilar ya.
    const payload = {
      name,
      goal,
      tone,
      duration,
    } as unknown as HypnosisFormData;

    onSubmit(payload);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ display: "grid", gap: 12 }}>
        <label>
          <div style={{ fontSize: 14, marginBottom: 6 }}>Nombre</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Grei"
            required
            style={{ width: "100%", padding: 12, borderRadius: 10 }}
          />
        </label>

        <label>
          <div style={{ fontSize: 14, marginBottom: 6 }}>Objetivo de la sesión</div>
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Ej: Calmar ansiedad, dormir mejor, soltar miedo..."
            required
            rows={4}
            style={{ width: "100%", padding: 12, borderRadius: 10 }}
          />
        </label>

        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
          <label>
            <div style={{ fontSize: 14, marginBottom: 6 }}>Tono</div>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as any)}
              style={{ width: "100%", padding: 12, borderRadius: 10 }}
            >
              <option value="maternal">Maternal</option>
              <option value="neutral">Neutral</option>
              <option value="direct">Directo</option>
            </select>
          </label>

          <label>
            <div style={{ fontSize: 14, marginBottom: 6 }}>Duración</div>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value as any)}
              style={{ width: "100%", padding: 12, borderRadius: 10 }}
            >
              <option value="7-10">7–10 min</option>
              <option value="10-15">10–15 min</option>
              <option value="15-20">15–20 min</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: 14,
            borderRadius: 12,
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Generando..." : "Generar Hipnosis"}
        </button>
      </div>
    </form>
  );
}
