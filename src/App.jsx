import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CircuitBand from './components/CircuitBand'
import Mission from './components/Mission'
import Activities from './components/Activities'
import Cursos from './components/Cursos'
import RedGlobal from './components/RedGlobal'
import Comunidad from './components/Comunidad'
import Agenda from './components/Agenda'
import Equipo from './components/Equipo'
import Recursos from './components/Recursos'
import Unete from './components/Unete'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CircuitBand />
        <Mission />
        <Activities />
        <Cursos />
        <RedGlobal />
        <Comunidad />
        <Agenda />
        <Equipo />
        <Recursos />
        <Unete />
      </main>
      <Footer />
    </>
  )
}
