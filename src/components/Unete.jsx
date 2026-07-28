import waQr from '../assets/wa-qr.png'

export default function Unete() {
  return (
    <section className="section-unete" id="unete">
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <figure className="qr-card">
          <img src={waQr} alt="Código QR para unirse al grupo QPerú - Init en WhatsApp" width="260" height="260" />
          <figcaption>
            <span className="qr-titulo">QPerú&nbsp;·&nbsp;Init</span>
            <span className="qr-sub">Grupo de WhatsApp</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
