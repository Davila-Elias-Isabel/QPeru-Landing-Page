import { useReveal } from '../hooks/useReveal'

export default function Activities() {
  const revealRef = useReveal()

  const activities = [
    {
      id: 1,
      title: 'Talleres',
      description: 'Sesiones prácticas con herramientas abiertas como Qiskit. Sin requisitos previos:\n          solo curiosidad y una laptop.',
      note: 'Todo empieza en superposición.',
      svg: {
        viewBox: '0 0 220 44',
        path: 'M 0 22 H 220',
        gate: { x: '88', y: '4', width: '36', height: '36', text: 'H', textX: '106', textY: '29' }
      }
    },
    {
      id: 2,
      title: 'Charlas',
      description: 'Divulgación con invitados del ecosistema local y de la red QWorld, para entender\n          qué es real — y qué no — en la cuántica de hoy.',
      note: 'Colapsamos la teoría en ideas claras.',
      svg: {
        viewBox: '0 0 220 44',
        path: 'M 0 22 H 220',
        meter: { x1: '86', y: '4', width: '42', height: '36', meterD: 'M 95 32 A 12 12 0 0 1 119 32', needleX1: '107', needleY1: '32', needleX2: '116', needleY2: '18' }
      }
    },
    {
      id: 3,
      title: 'Comunidad activa',
      description: 'Grupos de estudio, proyectos y eventos globales de QWorld. Un espacio para\n          conocer gente, colaborar y crecer juntos.',
      note: 'Entrelazados con el mundo.',
      svg: {
        viewBox: '0 0 220 44',
        path1: 'M 0 12 H 220',
        path2: 'M 0 34 H 220'
      }
    }
  ]

  return (
    <section className="section section-humo" id="actividades">
      <div className="container">
        <p className="eyebrow">|actividades⟩</p>
        <h2>Nuestro circuito</h2>
        <div className="cards reveal-group" ref={revealRef}>
          {activities.map((activity) => (
            <article className="card" key={activity.id}>
              {activity.id === 1 && (
                <svg className="card-circuit" viewBox={activity.svg.viewBox} aria-hidden="true">
                  <path className="cq-wire" d={activity.svg.path} />
                  <g className="cq-gate">
                    <rect x={activity.svg.gate.x} y={activity.svg.gate.y} width={activity.svg.gate.width} height={activity.svg.gate.height} rx="4"/>
                    <text x={activity.svg.gate.textX} y={activity.svg.gate.textY}>{activity.svg.gate.text}</text>
                  </g>
                </svg>
              )}
              {activity.id === 2 && (
                <svg className="card-circuit" viewBox={activity.svg.viewBox} aria-hidden="true">
                  <path className="cq-wire" d={activity.svg.path} />
                  <g className="cq-gate">
                    <rect x={activity.svg.meter.x1} y={activity.svg.meter.y} width={activity.svg.meter.width} height={activity.svg.meter.height} rx="4"/>
                    <path className="cq-meter" d={activity.svg.meter.meterD}/>
                    <line className="cq-needle" x1={activity.svg.meter.needleX1} y1={activity.svg.meter.needleY1} x2={activity.svg.meter.needleX2} y2={activity.svg.meter.needleY2}/>
                  </g>
                </svg>
              )}
              {activity.id === 3 && (
                <svg className="card-circuit" viewBox={activity.svg.viewBox} aria-hidden="true">
                  <path className="cq-wire" d={activity.svg.path1} />
                  <path className="cq-wire" d={activity.svg.path2} />
                  <circle cx="110" cy="12" r="5" className="cq-dot"/>
                  <line className="cq-vwire" x1="110" y1="12" x2="110" y2="34"/>
                  <circle cx="110" cy="34" r="8" className="cq-oplus"/>
                  <line className="cq-vwire" x1="102" y1="34" x2="118" y2="34"/>
                </svg>
              )}
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <p className="card-nota">{activity.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
