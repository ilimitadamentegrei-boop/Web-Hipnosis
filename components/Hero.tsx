<div className="flex gap-4">
  <button
    onClick={onStartSession}
    className="px-8 py-3 bg-blue-600 rounded-full font-bold"
  >
    Comenzar sesión
  </button>

  <button
    onClick={() => onScrollTo("science")}
    className="px-8 py-3 border border-slate-700 rounded-full"
  >
    Ver la ciencia
  </button>
</div>
