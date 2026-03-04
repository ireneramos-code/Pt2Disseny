import MiniPlayer from '../components/MiniPlayer.jsx'
import Carousel from '../components/Carousel.jsx'

export default function Home({ setPage, playing, onToggle, currentTema }) {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-badge">🎵 Banda Sonora Oficial</div>
                    <h1>Cómo Entrenar<br />a Tu Dragón</h1>
                    <p>
                        Sumérgete en los mundos de Berk, el Mar Oculto y más allá.<br />
                        La música épica de <strong>John Powell</strong> que definió una trilogía.
                    </p>
                    <button
                        className="btn-cta"
                        onClick={() => { setPage('soundtrack'); window.scrollTo(0, 0) }}
                    >
                        🎶 Explorar Banda Sonora
                    </button>
                    <MiniPlayer tema={currentTema} playing={playing} onToggle={onToggle} />
                </div>
            </section>

            {/* Carrusel debajo del hero */}
            <div className="carousel-wrapper">
                <Carousel />
            </div>
        </>
    )
}