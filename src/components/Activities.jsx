import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const links = {
  1: 'https://www.csweek2026.com/agenda',
  2: 'https://www.csweek2026.com/agenda'
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
            <article className="card" key={item.id}>
              <div className="img-placeholder" role="img" aria-label={a.imgPendiente}>
                {a.imgPendiente}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <h3 className="activities-subtitulo activities-subtitulo-futuras">{a.subtituloFuturas}</h3>
        <div className="cards reveal-group" ref={futurasRef}>
          {a.futuras.map((item) => (
            <article className="card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {links[item.id] && (
                <a className="link-ext" href={links[item.id]} target="_blank" rel="noopener noreferrer">{item.linkLabel} →</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
