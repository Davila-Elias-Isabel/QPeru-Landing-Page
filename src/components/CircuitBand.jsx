export default function CircuitBand() {
  return (
    <div className="circuit-band">
      <div className="container">
        <svg className="hero-circuit" viewBox="0 0 1000 90" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <text x="0" y="52" className="cq-ket">|0⟩</text>
          <path className="cq-wire" d="M 52 45 H 940" />
          <g className="cq-gate cq-g1">
            <rect x="180" y="23" width="44" height="44" rx="4"/>
            <text x="202" y="53">H</text>
          </g>
          <g className="cq-gate cq-g2">
            <circle cx="420" cy="45" r="7" className="cq-dot"/>
          </g>
          <g className="cq-gate cq-g3">
            <rect x="600" y="23" width="52" height="44" rx="4"/>
            <path className="cq-meter" d="M 611 58 A 15 15 0 0 1 641 58"/>
            <line className="cq-needle" x1="626" y1="58" x2="637" y2="41"/>
          </g>
          <path className="cq-chevron" d="M 946 27 L 964 45 L 946 63" />
        </svg>
      </div>
    </div>
  )
}
