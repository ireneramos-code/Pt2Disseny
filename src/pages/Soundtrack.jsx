import TemaCard from '../components/TemaCard.jsx'
import { TEMAS } from '../data/temas.js'

export default function Soundtrack({ playing, currentTema, onPlay }) {
    return (
        <section className="section">
            <h2 className="section-title">Banda Sonora</h2>
            <div className="divider" />
            <p className="section-subtitle">
                16 temas icónicos distribuidos en las tres películas de la trilogía.
            </p>
            <div className="soundtrack-grid">
                {TEMAS.map(t => (
                    <TemaCard
                        key={t.id}
                        tema={t}
                        playing={playing && currentTema?.id === t.id}
                        onPlay={onPlay}
                    />
                ))}
            </div>
        </section>
    )
}
