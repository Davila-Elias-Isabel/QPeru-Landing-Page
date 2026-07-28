import logo from '../assets/logo2.png'

export default function Navbar() {
  return (
    <header className="nav" id="inicio">
      <div className="nav-inner">
        <a className="nav-logo" href="#inicio" aria-label="QPerú — inicio">
          <img src={logo} alt="QPerú" />
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#mision">Misión</a>
          <a href="#actividades">Actividades</a>
          <a href="#red">Red global</a>
          <a href="#comunidad">Comunidad</a>
        </nav>
        <a className="btn btn-rojo nav-cta" href="#unete">Únete</a>
      </div>
    </header>
  )
}
