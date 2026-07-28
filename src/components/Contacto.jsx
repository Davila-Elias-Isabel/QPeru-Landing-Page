import { useReveal } from '../hooks/useReveal'

export default function Contacto() {
  const revealRef = useReveal()

  const contactos = [
    {
      id: 1,
      title: 'Email',
      contact: 'hola@qperu.org',
      link: 'mailto:hola@qperu.org',
      description: 'Para preguntas, propuestas o colaboraciones.'
    },
    {
      id: 2,
      title: 'WhatsApp',
      contact: '+51 936 687 271',
      link: 'https://wa.me/51936687271',
      description: 'Únete a nuestro grupo de comunidad.'
    },
    {
      id: 3,
      title: 'Redes Sociales',
      contact: '@QPeru',
      link: '#',
      description: 'Síguenos para actualizaciones y noticias.'
    }
  ]

  return (
    <section className="section section-humo" id="contacto">
      <div className="container">
        <p className="eyebrow">|contacto⟩</p>
        <h2>Mantengamos contacto</h2>
        <div className="contacto-grid" ref={revealRef}>
          {contactos.map((contacto) => (
            <div className="contacto-card" key={contacto.id}>
              <h3>{contacto.title}</h3>
              <p><a href={contacto.link} target={contacto.id === 2 ? '_blank' : undefined} rel={contacto.id === 2 ? 'noopener' : undefined}>{contacto.contact}</a></p>
              <p className="contacto-desc">{contacto.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
