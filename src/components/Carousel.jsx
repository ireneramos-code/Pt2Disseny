import { useState, useEffect } from 'react'

const SLIDES = [
    {
        emoji: '🐉',
        titulo: 'Cómo Entrenar a Tu Dragón',
        subtitulo: 'Banda Sonora Original 2010',
        color: '#1A2E4A',
    },
    {
        emoji: '🌊',
        titulo: 'El Mundo Oculto',
        subtitulo: 'Banda Sonora Original 2019',
        color: '#0a1f35',
    },
    {
        emoji: '⚔️',
        titulo: 'El Mundo de los Dragones',
        subtitulo: 'Banda Sonora Original 2014',
        color: '#0D1B2A',
    },
]

export default function Carousel() {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)

    // Avance automático cada 4 segundos
    useEffect(() => {
        const timer = setInterval(() => goTo((current + 1) % SLIDES.length), 4000)
        return () => clearInterval(timer)
    }, [current])

    const goTo = (index) => {
        if (animating) return
        setAnimating(true)
        setTimeout(() => {
            setCurrent(index)
            setAnimating(false)
        }, 300)
    }

    const slide = SLIDES[current]

    return (
        <div className="carousel">
            <div
                className={`carousel-slide ${animating ? 'carousel-fade-out' : 'carousel-fade-in'}`}
                style={{ background: `radial-gradient(ellipse at center, ${slide.color} 0%, #0D1B2A 100%)` }}
            >
                <div className="carousel-emoji">{slide.emoji}</div>
                <h3 className="carousel-titulo">{slide.titulo}</h3>
                <p className="carousel-subtitulo">{slide.subtitulo}</p>
            </div>

            {/* Puntos de navegación */}
            <div className="carousel-dots">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        className={`carousel-dot ${i === current ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Flechas */}
            <button className="carousel-arrow carousel-prev" onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}>‹</button>
            <button className="carousel-arrow carousel-next" onClick={() => goTo((current + 1) % SLIDES.length)}>›</button>
        </div>
    )
}