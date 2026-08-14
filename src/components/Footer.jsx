import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">{t.footer.copy}</p>
      </div>
    </footer>
  )
}
