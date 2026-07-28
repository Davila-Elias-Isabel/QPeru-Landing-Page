import waQr from '../assets/wa-qr.png'

export default function Unete() {
  return (
    <section className="section-unete" id="unete">
      <div className="container unete-grid">
        <div>
          <p className="eyebrow eyebrow-blanco">|únete⟩</p>
          <h2>Súmate al circuito.</h2>
          <p className="unete-sub">Escanea el QR y entra al grupo <strong>QPerú&nbsp;·&nbsp;Init</strong> en WhatsApp.
        Ahí anunciamos talleres, charlas y todo lo que viene.</p>
          <p className="unete-sub unete-sub-alt">¿Quieres dar una charla, proponer un taller o llevar QPerú
        a tu universidad u organización?</p>
          <div className="cta-row">
            <a className="btn btn-blanco" href="mailto:hola@qperu.org">Escríbenos</a>
          </div>
        </div>
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
