import { useReveal } from '../hooks/useReveal'

export default function Comunidad() {
  const revealRef = useReveal()

  const audiencias = [
    {
      id: 1,
      title: 'Estudiantes',
      description: 'Universitarios que quieren ir más allá del sílabo y explorar lo que viene.'
    },
    {
      id: 2,
      title: 'Profesionales',
      description: 'De tecnología, ciencia, seguridad y más, que necesitan entender el impacto real de la cuántica.'
    },
    {
      id: 3,
      title: 'Comunidades',
      description: 'Clubes, grupos técnicos y organizaciones que quieren llevar la cuántica a su gente.'
    }
  ]

  return (
    <section className="section section-humo" id="comunidad">
      <div className="container">
        <p className="eyebrow">|comunidad⟩</p>
        <h2>Hecha para el ecosistema peruano</h2>
        <div className="rows reveal-group" ref={revealRef}>
          {audiencias.map((audiencia) => (
            <div className="row" key={audiencia.id}>
              <h3>{audiencia.title}</h3>
              <p>{audiencia.description}</p>
            </div>
          ))}
        </div>

        <div className="idiomas">
          <p className="idiomas-titulo">La divulgación también es una decisión de idioma:</p>
          <div className="chips">
            <span className="chip chip-on">ES · Español</span>
            <span className="chip chip-on">EN · English</span>
            <span className="chip">QU · Quechua — en camino</span>
          </div>
        </div>
      </div>
    </section>
  )
}
