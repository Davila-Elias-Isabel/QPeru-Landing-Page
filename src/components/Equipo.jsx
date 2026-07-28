import { useReveal } from '../hooks/useReveal'

export default function Equipo() {
  const revealRef = useReveal()

  const equipo = [
    {
      id: 1,
      avatar: '👩‍💻',
      name: 'María Julia Pareja',
      role: 'Fundadora',
      bio: 'Apasionada por democratizar la computación cuántica y crear oportunidades en educación tecnológica.'
    },
    {
      id: 2,
      avatar: '👨‍🔬',
      name: 'Renzo Cienfuegos',
      role: 'Fundador',
      bio: 'Experto en computación cuántica comprometido con impulsar innovación en el Perú.'
    },
    {
      id: 3,
      avatar: '👨‍💼',
      name: 'Posición Abierta',
      role: 'Únete al Equipo',
      bio: '¿Te interesa colaborar? Contáctanos para ser parte de QPerú y la revolución cuántica.'
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
