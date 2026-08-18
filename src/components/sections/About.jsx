import { profile } from '@/data/profile'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            heading={profile.about.heading}
            wide
          />
        </Reveal>

        <div className="about__layout">
          <Reveal className="about__bio">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="stats" delay={80}>
            {profile.stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
