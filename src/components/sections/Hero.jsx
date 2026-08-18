import { profile } from '@/data/profile'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Portrait } from '@/components/ui/Portrait'
import { ArrowIcon, LinkedInIcon, PinIcon } from '@/components/ui/Icons'

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__glow" aria-hidden="true" />
      <Container className="hero__grid">
        <div>
          <p className="hero__eyebrow">{profile.eyebrow}</p>
          <h1 id="hero-heading">{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <Button href="#experience">
              View Experience
              <ArrowIcon />
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
            <Button
              href={profile.contact.linkedin}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              Connect on LinkedIn
            </Button>
          </div>

          <div className="hero__meta">
            <p className="hero__location">
              <PinIcon />
              <span>{profile.location}</span>
            </p>
            <div className="hero__focus" aria-label="Focus areas">
              {profile.focus.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Portrait />
      </Container>
    </section>
  )
}
