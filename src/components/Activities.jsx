import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import imagenActividad1 from '../assets/charla-1/01.webp'
import imagenActividad2 from '../assets/charla-1/02.webp'
import imagenActividad3 from '../assets/charla-1/03.webp'
import imagenCSWeek from '../assets/cs-week/01.webp'

//const links = {
//  1: 'https://www.csweek2026.com/agenda',
//  2: 'https://www.csweek2026.com/agenda'
//}

const links = {
  1: 'https://luma.com/azxbqx8m',
  2: 'https://luma.com/tbi68knv'
}

const imagenesPasadas = {
  1: imagenActividad1,
  2: imagenActividad2,
  3: imagenActividad3
}

export default function Activities() {
  const pasadasRef = useReveal()
  const futurasRef = useReveal()
  const { t } = useLanguage()
  const a = t.activities

  return (
    <section className="section section-humo" id="actividades">
      <div className="container">
        <p className="eyebrow">{a.eyebrow}</p>
        <h2>{a.title}</h2>

        <h3 className="activities-subtitulo">{a.subtituloPasadas}</h3>

        <div className="cards reveal-group" ref={pasadasRef}>
          {a.pasadas.map((item) => (
            <article className="card card-actividad-pasada" key={item.id}>
              <div className="activity-gallery">
                <img src={imagenActividad1} alt={item.title} />
                <img src={imagenActividad2} alt={item.title} />
                <img src={imagenActividad3} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

<h3 className="activities-subtitulo activities-subtitulo-futuras">
  Actividades Futuras
</h3>

<div className="cards reveal-group" ref={futurasRef}>
  <article className="card" key="1">
    <img
      src={imagenCSWeek}
      alt="CSWeek Perú 2026"
      className="activity-image"
    />

    <h3>Cuántica + Ciberseguridad</h3>
    <p>
      Con Leonardo Cienfuegos. Una mirada a la amenaza cuántica para la
      criptografía actual y a cómo la industria se prepara mediante
      agilidad criptográfica, migración post-cuántica y casos reales.
    </p>
    <p><strong>12:00 - 13:30</strong></p>

    <a
      className="link-ext"
      href="https://luma.com/azxbqx8m"
      target="_blank"
      rel="noopener noreferrer"
    >
      Registrarme →
    </a>
  </article>

  <article className="card" key="2">
    <img
      src={imagenCSWeek}
      alt="CSWeek Perú 2026"
      className="activity-image"
    />

    <h3>Optimización Cuántica en la Práctica</h3>
    <p>
      Con María Julia Pareja. IA + HPC + algoritmos cuánticos como QAOA,
      VQE y Annealing aplicados a logística, finanzas, farmacéutica y
      ciencia de materiales, con demos en vivo y retos reales.
    </p>
    <p><strong>16:30 - 18:00</strong></p>

    <a
      className="link-ext"
      href="https://luma.com/tbi68knv"
      target="_blank"
      rel="noopener noreferrer"
    >
      Registrarme →
    </a>
  </article>

  <article className="card" key="3">
    <h3>Qiskit Fall Fest 2026</h3>
    <p>
      Próximamente, en colaboración con IEEE Computer Society PUCP y la
      Sociedad de Físicos de la PUCP.
    </p>
  </article>
</div>
    </div>
    </section>
  )
}