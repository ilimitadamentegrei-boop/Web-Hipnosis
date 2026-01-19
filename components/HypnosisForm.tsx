import React, { useState } from 'react';
import { HypnosisFormData } from '../types';

interface HypnosisFormProps {
  onSubmit: (data: HypnosisFormData) => void;
  onBack: () => void;
}

export const HypnosisForm: React.FC<HypnosisFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState<HypnosisFormData>({
    name: '',
    primaryGoal: '',
    biggestObstacle: '',
    currentFeeling: '',
    sessionDuration: '3',
    voiceType: 'Kore'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen pt-28 pb-12 px-6 max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="mb-8 text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
      >
        ← Volver
      </button>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2">Tu Sesión Personalizada</h2>
        <p className="text-slate-400">
          Necesito entender tu mente para poder reprogramarla con precisión quirúrgica.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">¿Cómo te llamas?</label>
          <input
            required
            type="text"
            placeholder="Tu nombre"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">¿Cuál es tu objetivo principal hoy?</label>
          <select
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={formData.primaryGoal}
            onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
          >
            <option value="">Selecciona un objetivo</option>
            <option value="Superar la ansiedad y el estrés">Superar ansiedad/estrés</option>
            <option value="Dormir profundamente y descansar">Sueño reparador</option>
            <option value="Aumentar mi productividad y enfoque">Productividad máxima</option>
            <option value="Elevar mi autoconfianza y merecimiento">Confianza radical</option>
            <option value="Sanar una relación del pasado">Sanar relaciones</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">
            ¿Cuál es el pensamiento que más te limita ahora mismo?
          </label>
          <textarea
            required
            placeholder="Ej: 'No soy lo suficientemente bueno', 'Tengo miedo al fracaso'..."
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32"
            value={formData.biggestObstacle}
            onChange={(e) => setFormData({ ...formData, biggestObstacle: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Duración de la sesión</label>
            <div className="grid grid-cols-1 gap-2">
              {['3'].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setFormData({ ...formData, sessionDuration: d as any })}
                  className={`py-3 rounded-lg border ${
                    formData.sessionDuration === d
                      ? 'bg-blue-600 border-blue-500'
                      : 'bg-slate-900 border-slate-700'
                  } transition-all`}
                >
                  {d}m
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Estilo de Voz de Grei (Femenina)</label>
            <select
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.voiceType}
              onChange={(e) => setFormData({ ...formData, voiceType: e.target.value as any })}
            >
              <option value="Kore">Grei - Suave y Maternal</option>
              <option value="Puck">Grei - Directa y Energética</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 text-lg"
        >
          Crear mi Sesión de Hipnosis
        </button>
      </form>
    </div>
  );
};
