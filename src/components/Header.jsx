import { useState } from 'react'

export default function Header({ page, setPage }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const pages = [
        { id: 'home', label: 'Inicio' },
        { id: 'soundtrack', label: 'Banda Sonora' },
        { id: 'compositor', label: 'Compositor' },
    ]

    const navigate = (p) => {
        setPage(p)
        setMenuOpen(false)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <header className="header">
                <div className="header-logo" onClick={() => navigate('home')}>
                    🐉 <span>HTTYD</span> Music
                </div>

                {/* Menú desktop */}
                <nav>
                    <ul className="nav-links">
                        {pages.map(p => (
                            <li key={p.id}>
                                <button
                                    className={page === p.id ? 'active' : ''}
                                    onClick={() => navigate(p.id)}
                                >
                                    {p.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botón hamburguesa – visible en móvil y tablet portrait */}
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menú"
                >
                    <span /><span /><span />
                </button>
            </header>

            {/* Menú móvil desplegable */}
            {menuOpen && (
                <nav className="nav-mobile">
                    {pages.map(p => (
                        <button
                            key={p.id}
                            className={page === p.id ? 'active' : ''}
                            onClick={() => navigate(p.id)}
                        >
                            {p.label}
                        </button>
                    ))}
                </nav>
            )}
        </>
    )
}