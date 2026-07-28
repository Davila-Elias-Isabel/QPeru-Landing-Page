import { useReveal } from '../hooks/useReveal'

export default function Equipo() {
  const revealRef = useReveal()

  const equipo = [
    {
      id: 1,
      avatar: '👩‍💻',
      name: 'Isabel Dávila Elías',
      role: 'Fundadora & Coordinadora',
      bio: 'Ingeniera de sistemas apasionada por la computación cuántica y la educación tecnológica.'
    },
    {
      id: 2,
      avatar: '👨‍🔬',
      name: 'Posición Abierta',
      role: 'Instructor de Talleres',
      bio: '¿Quieres unirte a nuestro equipo? Contáctanos para ser parte de QPerú.'
    },
    {
      id: 3,
      avatar: '👨‍💼',
      name: 'Posición Abierta',
      role: 'Coordinador de Comunidad',
      bio: 'Ayuda a crecer nuestra comunidad y gestiona eventos y actividades.'
    }
  ]

  return (
    <section className="section section-humo" id="equipo">
      <div className="container">
        <p className="eyebrow">|equipo⟩</p>
        <h2>Nuestro equipo</h2>
        <p className="section-intro">Profesionales y entusiastas dedicados a democratizar la computación cuántica en el Perú.</p>
        <div className="team-grid reveal-group" ref={revealRef}>
          {equipo.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-avatar">{member.avatar}</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
