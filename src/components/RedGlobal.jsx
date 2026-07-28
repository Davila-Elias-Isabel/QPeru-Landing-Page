export default function RedGlobal() {
  return (
    <section className="section" id="red">
      <div className="container split">
        <div>
          <p className="eyebrow">|red-global⟩</p>
          <h2>La división peruana de QCousins</h2>
        </div>
        <div>
          <p className="lede">QPerú es la división peruana de QCousins, la red global de comunidades
        locales bajo QWorld.</p>
          <p>Formar parte de esta red significa acceso a talleres internacionales, mentores y una
        comunidad que cruza fronteras — con los pies bien puestos en el Perú. Lo que aprendemos
        afuera lo traemos acá; lo que construimos acá lo compartimos con el mundo.</p>
          <svg className="net-diagram" viewBox="0 0 640 90" aria-label="QWorld conecta con QCousins y QCousins con QPerú">
            <path className="cq-wire" d="M 60 34 H 580"/>
            <circle cx="60" cy="34" r="8" className="net-node"/>
            <circle cx="320" cy="34" r="8" className="net-node"/>
            <path className="cq-chevron net-chev" d="M 572 20 L 586 34 L 572 48"/>
            <text x="60" y="74" className="net-label">QWorld</text>
            <text x="320" y="74" className="net-label">QCousins</text>
            <text x="580" y="74" className="net-label net-label-rojo">QPerú</text>
          </svg>
          <p><a className="link-ext" href="https://qworld.net" target="_blank" rel="noopener">Conoce QWorld →</a></p>
        </div>
      </div>
    </section>
  )
}
