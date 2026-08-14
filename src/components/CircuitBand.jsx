// Circuito de teletransporte cuántica, calcado del diagrama de referencia
// (Quantum Zeitgeist) y reconstruido en la paleta negro/rojo de QPerú.
const Y_PSI = 56
const Y_Q1 = 108
const Y_Q2 = 160
const Y_M0 = 212
const Y_M1 = 264
const X0 = 110
const X1 = 1160

export default function CircuitBand() {
  return (
    <div className="circuit-band">
      <div className="container">
        <svg className="hero-circuit" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {/* Bandas de rol: Alice (ψ, q1) y Bob (q2) */}
          <rect className="cq-band cq-band-alice" x="146" y={Y_PSI - 34} width={X1 - 146 + 20} height={Y_Q1 - Y_PSI + 68}/>
          <rect className="cq-band cq-band-bob" x="146" y={Y_Q2 - 34} width={X1 - 146 + 20} height="68"/>
          <text className="cq-role cq-role-alice" x="0" y={(Y_PSI + Y_Q1) / 2 + 5}>ALICE</text>
          <text className="cq-role cq-role-bob" x="0" y={Y_Q2 + 5}>BOB</text>

          {/* Divisores de etapa */}
          <rect className="cq-divider" x="366" y={Y_PSI - 34} width="14" height={Y_Q2 - Y_PSI + 68}/>
          <line className="cq-divider-dash" x1="373" y1={Y_PSI - 34} x2="373" y2={Y_Q2 + 34}/>
          <rect className="cq-divider" x="842" y={Y_PSI - 34} width="14" height={Y_Q2 - Y_PSI + 68}/>
          <line className="cq-divider-dash" x1="849" y1={Y_PSI - 34} x2="849" y2={Y_Q2 + 34}/>

          <text x="96" y={Y_PSI + 8} className="cq-ket">|ψ⟩</text>
          <text x="96" y={Y_Q1 + 8} className="cq-ket">q1</text>
          <text x="96" y={Y_Q2 + 8} className="cq-ket">q2</text>
          <text x="96" y={Y_M0 + 5} className="cq-label">m0</text>
          <text x="96" y={Y_M1 + 5} className="cq-label">m1</text>

          <path className="cq-wire" d={`M ${X0} ${Y_PSI} H ${X1}`} />
          <path className="cq-wire" d={`M ${X0} ${Y_Q1} H ${X1}`} />
          <path className="cq-wire" d={`M ${X0} ${Y_Q2} H ${X1}`} />
          <path className="cq-cwire" d={`M ${X0} ${Y_M0 - 2} H ${X1}`} />
          <path className="cq-cwire" d={`M ${X0} ${Y_M0 + 2} H ${X1}`} />
          <path className="cq-cwire" d={`M ${X0} ${Y_M1 - 2} H ${X1}`} />
          <path className="cq-cwire" d={`M ${X0} ${Y_M1 + 2} H ${X1}`} />

          {/* Alice prepara el par de Bell: H en q1, luego CNOT q1 -> q2 */}
          <g className="cq-gate cq-g1">
            <rect x="180" y={Y_Q1 - 22} width="44" height="44" rx="4"/>
            <text x="202" y={Y_Q1 + 8}>H</text>
          </g>

          <g className="cq-gate cq-g2">
            <line className="cq-vwire" x1="290" y1={Y_Q1} x2="290" y2={Y_Q2}/>
            <circle cx="290" cy={Y_Q1} r="7" className="cq-dot"/>
            <circle cx="290" cy={Y_Q2} r="12" className="cq-oplus"/>
            <line className="cq-oplus" x1="290" y1={Y_Q2 - 12} x2="290" y2={Y_Q2 + 12}/>
            <line className="cq-oplus" x1="278" y1={Y_Q2} x2="302" y2={Y_Q2}/>
          </g>

          {/* Alice entrelaza su qubit ψ con q1, luego mide en base de Bell */}
          <g className="cq-gate cq-g3">
            <line className="cq-vwire" x1="470" y1={Y_PSI} x2="470" y2={Y_Q1}/>
            <circle cx="470" cy={Y_PSI} r="7" className="cq-dot"/>
            <circle cx="470" cy={Y_Q1} r="12" className="cq-oplus"/>
            <line className="cq-oplus" x1="470" y1={Y_Q1 - 12} x2="470" y2={Y_Q1 + 12}/>
            <line className="cq-oplus" x1="458" y1={Y_Q1} x2="482" y2={Y_Q1}/>
          </g>

          <g className="cq-gate cq-g4">
            <rect x="560" y={Y_PSI - 22} width="44" height="44" rx="4"/>
            <text x="582" y={Y_PSI + 8}>H</text>
          </g>

          {/* Medición de ψ -> m0 */}
          <g className="cq-gate cq-meas cq-g5">
            <rect x="650" y={Y_PSI - 22} width="48" height="44" rx="4"/>
            <path className="cq-meter" d={`M 661 ${Y_PSI + 11} A 13 13 0 0 1 687 ${Y_PSI + 11}`}/>
            <line className="cq-needle" x1="674" y1={Y_PSI + 11} x2="684" y2={Y_PSI - 4}/>
            <line className="cq-arrow" x1="674" y1={Y_PSI + 24} x2="674" y2={Y_M0 - 10}/>
            <path className="cq-arrowhead" d={`M 667 ${Y_M0 - 16} L 674 ${Y_M0 - 4} L 681 ${Y_M0 - 16}`}/>
            <text className="cq-arrow-label" x="686" y={Y_M0 - 6}>0</text>
          </g>

          {/* Medición de q1 -> m1 */}
          <g className="cq-gate cq-meas cq-g5">
            <rect x="762" y={Y_Q1 - 22} width="48" height="44" rx="4"/>
            <path className="cq-meter" d={`M 773 ${Y_Q1 + 11} A 13 13 0 0 1 799 ${Y_Q1 + 11}`}/>
            <line className="cq-needle" x1="786" y1={Y_Q1 + 11} x2="796" y2={Y_Q1 - 4}/>
            <line className="cq-arrow" x1="786" y1={Y_Q1 + 24} x2="786" y2={Y_M1 - 10}/>
            <path className="cq-arrowhead" d={`M 779 ${Y_M1 - 16} L 786 ${Y_M1 - 4} L 793 ${Y_M1 - 16}`}/>
            <text className="cq-arrow-label" x="798" y={Y_M1 - 6}>0</text>
          </g>

          {/* Correcciones condicionadas por m1 (X) y m0 (Z) sobre q2, el qubit de Bob */}
          <g className="cq-ifbox cq-g5">
            <circle cx="900" cy={Y_M1} r="5" className="cq-cdot"/>
            <text className="cq-cdot-label" x="900" y={Y_M1 + 20}>0x1</text>
            <line className="cq-vwire" x1="900" y1={Y_M1} x2="900" y2={Y_Q2 + 26}/>
            <rect x="872" y={Y_Q2 - 28} width="96" height="56" rx="6"/>
            <text className="cq-ifbox-label" x="880" y={Y_Q2 - 34}>If</text>
            <rect className="cq-ifbox-gate" x="918" y={Y_Q2 - 19} width="38" height="38" rx="4"/>
            <text className="cq-ifbox-gate-text" x="937" y={Y_Q2 + 7}>X</text>
          </g>

          <g className="cq-ifbox cq-g6">
            <circle cx="1040" cy={Y_M0} r="5" className="cq-cdot"/>
            <text className="cq-cdot-label" x="1040" y={Y_M0 + 20}>0x1</text>
            <line className="cq-vwire" x1="1040" y1={Y_M0} x2="1040" y2={Y_Q2 + 26}/>
            <rect x="1012" y={Y_Q2 - 28} width="96" height="56" rx="6"/>
            <text className="cq-ifbox-label" x="1020" y={Y_Q2 - 34}>If</text>
            <rect className="cq-ifbox-gate cq-ifbox-gate-z" x="1058" y={Y_Q2 - 19} width="38" height="38" rx="4"/>
            <text className="cq-ifbox-gate-text" x="1077" y={Y_Q2 + 7}>Z</text>
          </g>
        </svg>
      </div>
    </div>
  )
}
