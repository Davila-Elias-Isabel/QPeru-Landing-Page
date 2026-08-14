import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const hrefs = {
  1: '#',
  2: '#',
  3: 'https://github.com/QPeru',
  4: '#',
  5: 'https://whatsapp.com/channel/0029Vb6VTX41nozBhJ4j8h1G',
  6: 'https://qworld.net/qeducation/',
  7: 'https://quantum.cloud.ibm.com/learning/en'
}

export default function Recursos() {
  const revealRef = useReveal()
  const { t } = useLanguage()
  const r = t.recursos

  return (
    <section className="section" id="recursos">
      <div className="container">
        <p className="eyebrow">{r.eyebrow}</p>
        <h2>{r.title}</h2>
        <p className="section-intro">{r.intro}</p>
        <div className="recursos-grid reveal-group" ref={revealRef}>
          {r.items.map((recurso) => {
            const href = hrefs[recurso.id]
            const external = href.startsWith('http')
            return (
              <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="recurso-card" key={recurso.id}>
                <div className="recurso-icon">{recurso.icon}</div>
                <h3>{recurso.title}</h3>
                <p>{recurso.description}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
