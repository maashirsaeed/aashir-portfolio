import { useEffect, useId, useState } from 'react'
import { navigation } from '@/data/site'
import { profile } from '@/data/profile'
import { useCompactHeader } from '@/hooks/useCompactHeader'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Container } from '@/components/layout/Container'

const sectionIds = navigation.map((item) => item.id)

export function Header() {
  const compact = useCompactHeader()
  const activeId = useScrollSpy(sectionIds)
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`header ${compact ? 'is-compact' : ''}`.trim()}>
        <Container className="header__inner">
          <a className="brand" href="#home" onClick={close}>
            <span className="brand__mark">{profile.monogram}</span>
            <span className="brand__text">
              <span className="brand__name">{profile.name}</span>
              <span className="brand__role">{profile.title}</span>
            </span>
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeId === item.id ? 'is-active' : undefined}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </Container>
      </header>

      <nav
        id={menuId}
        className={`nav-mobile ${open ? 'is-open' : ''}`.trim()}
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open}
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeId === item.id ? 'is-active' : undefined}
            aria-current={activeId === item.id ? 'true' : undefined}
            onClick={close}
          >
            {item.label}
          </a>
        ))}
        <p className="nav-mobile__meta">
          {profile.location}
          <br />
          {profile.organisation}
        </p>
      </nav>
    </>
  )
}
