import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Soundtrack from './pages/Soundtrack.jsx'
import Compositor from './pages/Compositor.jsx'
import { TEMAS } from './data/temas.js'

export default function App() {
  const [page, setPage] = useState('home')
  const [playing, setPlaying] = useState(false)
  const [currentTema, setCurrentTema] = useState(TEMAS[2]) // "Test Drive" por defecto

  const handlePlay = (tema) => {
    if (currentTema?.id === tema.id) {
      setPlaying(p => !p)
    } else {
      setCurrentTema(tema)
      setPlaying(true)
    }
  }

  const handleToggle = () => setPlaying(p => !p)

  return (
    <div>
      <Header page={page} setPage={setPage} />

      <main>
        {page === 'home' && (
          <Home
            setPage={setPage}
            playing={playing}
            onToggle={handleToggle}
            currentTema={currentTema}
          />
        )}
        {page === 'soundtrack' && (
          <Soundtrack
            playing={playing}
            currentTema={currentTema}
            onPlay={handlePlay}
          />
        )}
        {page === 'compositor' && <Compositor />}
      </main>

      <Footer />
    </div>
  )
}