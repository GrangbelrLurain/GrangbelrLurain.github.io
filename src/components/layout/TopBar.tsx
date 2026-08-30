import { useEffect, useState } from 'react'
import { navItems } from '../../data/profile'
import { useUiPrefs } from '../../contexts/UiPrefsContext'

export function TopBar() {
  const { lang, theme, setLang, toggleTheme, t } = useUiPrefs()
  const [active, setActive] = useState('#intro')

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      const scrollPos = window.scrollY + 100
      sections.forEach((sec) => {
        const top = sec.offsetTop
        const height = sec.offsetHeight
        const id = sec.getAttribute('id')
        if (id && scrollPos >= top && scrollPos < top + height) {
          setActive(`#${id}`)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="#intro" className="topbar-brand">
          Kyuyeon Kim
        </a>

        <nav className="topbar-nav" aria-label="Section">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? 'active' : undefined}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="topbar-controls">
          <button type="button" className="text-btn" onClick={toggleTheme}>
            {theme === 'dark' ? 'Dark' : 'Light'}
          </button>
          <button type="button" className="text-btn" onClick={() => window.print()}>
            PDF
          </button>
          <span className="topbar-lang" role="group" aria-label="Language">
            <a
              href="/ko/"
              hrefLang="ko"
              className={`text-btn${lang === 'kr' ? ' active' : ''}`}
              aria-current={lang === 'kr' ? 'true' : undefined}
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
                e.preventDefault()
                setLang('kr')
              }}
            >
              KR
            </a>
            <a
              href="/en/"
              hrefLang="en"
              className={`text-btn${lang === 'en' ? ' active' : ''}`}
              aria-current={lang === 'en' ? 'true' : undefined}
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
                e.preventDefault()
                setLang('en')
              }}
            >
              EN
            </a>
          </span>
        </div>
      </div>
    </header>
  )
}
