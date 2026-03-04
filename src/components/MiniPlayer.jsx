import { useState, useEffect } from 'react'

export default function MiniPlayer({ tema, playing, onToggle }) {
    const [progress, setProgress] = useState(18)

    useEffect(() => {
        if (!playing) return
        const iv = setInterval(() => setProgress(p => (p >= 100 ? 0 : p + 0.5)), 200)
        return () => clearInterval(iv)
    }, [playing])

    return (
        <div className="mini-player">
            <div className="player-thumb">{tema.emoji}</div>
            <div className="player-info">
                <strong>{tema.nombre}</strong>
                <span>John Powell · {tema.pelicula}</span>
                <div className="player-bar">
                    <div className="player-bar-fill" style={{ width: `${progress}%` }} />
                </div>
            </div>
            <button className="btn-play" onClick={onToggle} aria-label="Play/Pause">
                {playing ? '⏸' : '▶'}
            </button>
        </div>
    )
}