import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Permitir CORS básico (por si pruebas desde otro dominio)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Use POST' })
  }

  try {
    const body = req.body ?? {}

    // Respuesta falsa (stub) para probar conexión
    const script =
      `Hola ${body?.name || 'persona'}.\n\n` +
      `Esta es una sesión de prueba desde el backend en Vercel.\n` +
      `Si estás leyendo esto, ya tenemos conexión Frontend → /api/generate-session ✅\n\n` +
      `Objetivo: ${body?.goal || '—'}\n` +
      `Pensamiento limitante: ${body?.limitingThought || '—'}\n` +
      `Duración: ${body?.duration || '—'}\n` +
      `Voz: ${body?.voiceStyle || '—'}\n`

    // Audio falso en Base64 (silencio breve) solo para probar el flujo
    const audioBase64 = ''

    return res.status(200).json({ script, audioBase64 })
  } catch (err: any) {
    return res.status(500).json({ error: 'Server error', detail: err?.message || String(err) })
  }
}
