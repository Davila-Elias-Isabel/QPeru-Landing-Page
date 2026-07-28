import { useReveal } from '../hooks/useReveal'

export default function Cursos() {
  const revealRef = useReveal()

  const cursos = [
    {
      id: 1,
      title: 'Introducción a la Computación Cuántica',
      description: 'Formación integral para estudiantes de secundaria y universitarios. Desarrolla competencias en física, matemáticas y programación cuántica.',
      stats: [
        { value: '16+', label: 'SEMANAS' },
        { value: '64', label: 'HORAS CLASE' },
        { value: '4', label: 'MÓDULOS' }
      ],
      buttonClass: 'btn-rojo'
    },
    {
      id: 2,
      title: 'Qiskit: Programación Cuántica',
      description: 'Aprende a programar circuitos cuánticos con Qiskit. Ideal para quienes ya conocen los fundamentos y quieren profundizar en la práctica.',
      stats: [
        { value: '8', label: 'SEMANAS' },
        { value: '32', label: 'HORAS CLASE' },
        { value: '3', label: 'PROYECTOS' }
      ],
      buttonClass: 'btn-linea'
    },
    {
      id: 3,
      title: 'Fundamentos de Física Cuántica',
      description: 'Domina los principios teóricos de la mecánica cuántica. Requisito esencial para comprender las aplicaciones en computación cuántica.',
      stats: [
        { value: '12', label: 'SEMANAS' },
        { value: '48', label: 'HORAS CLASE' },
        { value: '5', label: 'UNIDADES' }
      ],
      buttonClass: 'btn-rojo'
    }
  ]

  return (
    <section className="section" id="cursos">
      <div className="container">
        <p className="eyebrow">|cursos⟩</p>
        <h2>Formación en computación cuántica</h2>
        <div className="cursos-grid reveal-group" ref={revealRef}>
          {cursos.map((curso) => (
            <article className="curso-card" key={curso.id}>
              <div className="curso-header">
                <h3>{curso.title}</h3>
              </div>
              <p className="curso-desc">{curso.description}</p>
              <div className="curso-stats">
                {curso.stats.map((stat, idx) => (
                  <div className="stat" key={idx}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <a href="#unete" className={`btn ${curso.buttonClass} btn-course`}>Inscribirse</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
