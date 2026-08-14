import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/logo2.webp'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const tabs = [
    { to: '/', label: t.nav.tabs.inicio },
    { to: '/sobre-nosotros', label: t.nav.tabs.sobreNosotros },
    { to: '/eventos', label: t.nav.tabs.eventos }
  ]

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link className="nav-logo" to="/" aria-label="QPerú - inicio">
          <img src={logo} alt="QPerú" />
        </Link>

        <nav className="nav-links" aria-label="Navegación principal">
          {tabs.map((tab) => (
            <NavLink key={tab.to} to={tab.to} end={tab.to === '/'} className={({ isActive }) => (isActive ? 'nav-link-activo' : undefined)}>
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-tools">
          {/* Selector de idioma: cambia el contenido vía LanguageContext */}
          <div className="lang-switch" role="group" aria-label="Idioma / Language">
            <button type="button" className={lang === 'es' ? 'lang-btn lang-on' : 'lang-btn'} onClick={() => setLang('es')}>ES</button>
            <button type="button" className={lang === 'en' ? 'lang-btn lang-on' : 'lang-btn'} onClick={() => setLang('en')}>EN</button>
          </div>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={t.nav.themeToggle}>
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.6 5.6 4.2 4.2m15.6 15.6-1.4-1.4M5.6 18.4 4.2 19.8M18.4 5.6l1.4-1.4M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M20.7 14.8a8.5 8.5 0 0 1-11-11 8.5 8.5 0 1 0 11 11Z"/></svg>
            )}
          </button>
        </div>

        <Link className="btn btn-rojo nav-cta" to="/contactanos">{t.nav.unete}</Link>

        <button type="button" className="nav-burger" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            {menuOpen ? (
              <path fill="currentColor" d="M6.4 4.9 12 10.6l5.6-5.7 1.4 1.5-5.7 5.6 5.7 5.6-1.4 1.5-5.6-5.7-5.6 5.7-1.5-1.5 5.7-5.6-5.7-5.6z"/>
            ) : (
              <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="nav-mobile" aria-label="Navegación móvil">
          {tabs.map((tab) => (
            <NavLink key={tab.to} to={tab.to} end={tab.to === '/'} className={({ isActive }) => (isActive ? 'nav-link-activo' : undefined)}>
              {tab.label}
            </NavLink>
          ))}
          <Link className="btn btn-rojo" to="/contactanos">{t.nav.unete}</Link>
        </nav>
      )}
    </header>
  )
}
