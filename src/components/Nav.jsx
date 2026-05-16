import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['About', 'about'],
    ['Skills', 'skills'],
    ['Projects', 'projects'],
    ['Contact', 'contact'],
  ]

  const goTo = (id) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <a href="#top" onClick={goTo('top')} className="brand">
        Bokyung Kim<span className="dot">.</span>{' '}Portfolio
      </a>
      <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="메뉴">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul>
        {links.map(([label, id]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={goTo(id)}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
