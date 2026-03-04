import johnPowellImg from '../assets/john-powell.webp'
export default function Compositor() {
    return (
        <section className="section">
            <h2 className="section-title">El Compositor</h2>
            <div className="divider" />
            <div className="compositor-layout">

                {/* Columna izquierda – imagen */}
                <div className="compositor-img-wrap">
                    <img
                        className="compositor-img"
                        src={johnPowellImg}
                        alt="John Powell"
                    /></div>

                {/* Columna derecha – texto */}
                <div>
                    <h3 className="compositor-nombre">John Powell</h3>
                    <p className="compositor-rol">🎬 Compositor de Cine · Londres, 1963</p>

                    <div className="compositor-datos">
                        <div className="dato"><strong>3</strong><span>Películas HTTYD</span></div>
                        <div className="dato"><strong>1</strong><span>Oscar Nominación</span></div>
                        <div className="dato"><strong>60+</strong><span>Bandas Sonoras</span></div>
                    </div>

                    <div className="compositor-bio">
                        <p>
                            John Powell es un compositor británico de música para cine, nacido en Londres en 1963.
                            Estudió en el Trinity College of Music y posteriormente en el Royal College of Music,
                            donde desarrolló su estilo orquestal único que combina el dramatismo clásico con
                            texturas modernas y elementos electrónicos.
                        </p>
                        <p>
                            Powell comenzó su carrera trabajando junto a Hans Zimmer en Remote Control Productions.
                            Su primera gran oportunidad llegó con <em>Face/Off</em> (1997), y desde entonces no ha
                            parado de crear algunas de las bandas sonoras más emotivas de Hollywood.
                        </p>
                        <p>
                            Su obra cumbre es la trilogía de <em>Cómo Entrenar a Tu Dragón</em>. La primera
                            entrega (2010) le valió su nominación al Oscar. Powell utiliza la orquesta sinfónica
                            como base, añadiendo instrumentos celtas, percusión africana y voces corales.
                        </p>
                        <p>
                            Entre sus otros trabajos destacan <em>Kung Fu Panda</em>, <em>Solo: A Star Wars Story</em>,
                            <em>Happy Feet</em> y <em>Bolt</em>.
                        </p>
                    </div>

                    <h4 style={{ fontFamily: 'var(--font-titulo)', color: 'var(--azul-claro)', marginBottom: '1rem', fontSize: '1rem', letterSpacing: '0.05em' }}>
                        Reconocimientos Destacados
                    </h4>
                    <ul className="awards-list">
                        <li>🏆 Nominación al Oscar · Mejor Banda Sonora · <em>HTTYD</em> (2011)</li>
                        <li>🎖 BAFTA Award · Mejor Música · <em>HTTYD</em> (2011)</li>
                        <li>🌟 Saturn Award · Mejor Música · <em>HTTYD 2</em> (2015)</li>
                        <li>🎵 Annie Award · Mejor Música · <em>HTTYD</em> (2011)</li>
                        <li>🎼 BMI Film Music Award · Múltiples ocasiones</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}