import { navigation } from '@/data/site'
import { profile } from '@/data/profile'
import { Container } from '@/components/layout/Container'

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <div className="footer__brand">
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
            <span>International Higher Education</span>
          </div>

          <nav aria-label="Footer">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__links">
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p className="footer__disclaimer">
            Personal professional website. Views expressed are personal and do not
            represent the University of Portsmouth.
          </p>
        </div>
      </Container>
    </footer>
  )
}
