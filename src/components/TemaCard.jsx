import { useRef, useEffect } from 'react'

export default function TemaCard({ tema, playing, onPlay }) {
    const cardRef = useRef(null)

    // Animación de entrada con IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('card-visible')
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.15 }
        )
        if (cardRef.current) observer.observe(cardRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div className="tema-card card-hidden" ref={cardRef}>
            <div className="tema-img">{tema.emoji}</div>
            <div className="tema-nombre">{tema.nombre}</div>
            <div className="tema-meta">
                <span className="tema-duracion">⏱ {tema.duracion}</span>
                <span className="tema-num">{tema.pelicula}</span>
            </div>
            <button
                className={`btn-reproducir ${playing ? 'playing' : ''}`}
                onClick={() => onPlay(tema)}
            >
                {playing ? '⏸ Reproduciendo' : '▶ Reproducir'}
            </button>
        </div>
    )
}