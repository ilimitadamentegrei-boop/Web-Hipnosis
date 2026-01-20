import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Use POST' })
  }

  try {
    const body = req.body ?? {}

    const script =
      `Hola ${body?.name || 'persona'}.\n\n` +
      `Esta es una sesión de prueba desde el backend en Vercel.\n` +
      `Si estás leyendo esto, ya tenemos conexión Frontend → /api/generate-session ✅\n\n` +
      `Objetivo: ${body?.goal || '—'}\n` +
      `Pensamiento limitante: ${body?.limitingThought || '—'}\n` +
      `Duración: ${body?.duration || '—'}\n` +
      `Voz: ${body?.voiceStyle || '—'}\n`

    return res.status(200).json({
      script,
      audioBase64: ''
    })
  } catch (err: any) {
    return res.status(500).json({
      error: 'Server error',
      detail: err?.message || String(err)
    })
  }
}
