import { useReveal } from '../hooks/useReveal'
import logo from '../assets/logo1.png'

export default function Hero() {
  const revealRef = useReveal()

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">QWorld&nbsp;→&nbsp;QCousins&nbsp;→&nbsp;QPerú</p>
          <h1>Democratizamos la computación <span className="rojo">cuántica</span> en el Perú.</h1>
          <p className="hero-sub">Una comunidad abierta que acerca la cuántica a estudiantes,
profesionales y comunidades de todo el país — con talleres, eventos, recursos y
colaboración global.</p>
          <div className="cta-row">
            <a className="btn btn-rojo" href="#unete">Únete a la comunidad</a>
            <a className="btn btn-linea" href="#actividades">Conoce más</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={logo} alt="QPerú — comunidad de computación cuántica" width="1200" height="1219" />
        </div>
      </div>
    </section>
  )
}
