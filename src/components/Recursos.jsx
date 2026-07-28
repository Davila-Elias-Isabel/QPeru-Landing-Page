import { useReveal } from '../hooks/useReveal'

export default function Recursos() {
  const revealRef = useReveal()

  const recursos = [
    {
      id: 1,
      icon: '📚',
      title: 'Documentación',
      description: 'Guías y referencias completas sobre computación cuántica y Qiskit.'
    },
    {
      id: 2,
      icon: '🎥',
      title: 'Video Tutoriales',
      description: 'Serie de vídeos educativos en español sobre fundamentos cuánticos.'
    },
    {
      id: 3,
      icon: '💻',
      title: 'Repositorio GitHub',
      description: 'Código, ejercicios y proyectos disponibles para descargar y aprender.'
    },
    {
      id: 4,
      icon: '🔗',
      title: 'Enlaces Útiles',
      description: 'Herramientas online, simuladores y plataformas para experimentar.'
    }
  ]

  return (
    <section className="section" id="recursos">
      <div className="container">
        <p className="eyebrow">|recursos⟩</p>
        <h2>Recursos gratuitos</h2>
        <p className="section-intro">Acceso a materiales, tutoriales y herramientas para aprender computación cuántica.</p>
        <div className="recursos-grid reveal-group" ref={revealRef}>
          {recursos.map((recurso) => (
            <a href="#" className="recurso-card" key={recurso.id}>
              <div className="recurso-icon">{recurso.icon}</div>
              <h3>{recurso.title}</h3>
              <p>{recurso.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
