import { useReveal } from '../hooks/useReveal'

export default function Mission() {
  const revealRef = useReveal()

  return (
    <section className="section" id="mision">
      <div className="container split">
        <div>
          <p className="eyebrow">|misión⟩</p>
          <h2>Divulgar y<br/>democratizar.</h2>
        </div>
        <div ref={revealRef}>
          <p className="lede">Nuestra misión es divulgar y democratizar la computación cuántica en el Perú
        a través de talleres, charlas y una comunidad activa, como parte de QCousins / QWorld.</p>
          <p>Creemos que la cuántica no es un tema reservado a unos pocos laboratorios: es una
        tecnología que el país necesita entender, discutir y construir. Por eso todas nuestras
        actividades ponen el énfasis en la participación activa — aquí nadie viene solo a mirar.</p>
          <ul className="facts reveal-group">
            <li><span className="fact-k">Abierta</span><span>Actividades accesibles para todo el ecosistema</span></li>
            <li><span className="fact-k">Global</span><span>Conectada a la red QWorld</span></li>
            <li><span className="fact-k">Trilingüe</span><span>Español · English · Quechua en camino</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
