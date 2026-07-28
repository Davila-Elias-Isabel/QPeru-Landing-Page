import waQr from '../assets/wa-qr.png'

export default function Unete() {
  return (
    <section className="section-unete" id="unete">
      <div className="container unete-center">
        <div className="unete-content">
          <h2>Únete aquí a la comunidad de QPerú en WhatsApp</h2>
          <p className="unete-text">Sigue de más cerca las actualizaciones</p>
          <figure className="qr-card">
            <img src={waQr} alt="Código QR para unirse al grupo QPerú - Init en WhatsApp" width="260" height="260" />
            <figcaption>
              <span className="qr-titulo">QPerú&nbsp;·&nbsp;Init</span>
              <span className="qr-sub">Grupo de WhatsApp</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
