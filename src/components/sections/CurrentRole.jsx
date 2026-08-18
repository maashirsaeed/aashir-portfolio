import { currentRole } from '@/data/experience'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function CurrentRole() {
  return (
    <section id="experience" className="section current-role" aria-labelledby="current-role-heading">
      <Container>
        <div className="current-role__layout">
          <Reveal>
            <SectionHeading
              id="current-role-heading"
              eyebrow={currentRole.eyebrow}
              heading={currentRole.heading}
            />
            <p className="current-role__org">{currentRole.title}</p>
            <div className="current-role__facts">
              <span>{currentRole.dates}</span>
              <span>{currentRole.location}</span>
              <span>{currentRole.employment}</span>
            </div>
            <p>{currentRole.description}</p>
          </Reveal>

          <Reveal delay={90}>
            <h3 className="sr-only">Responsibilities</h3>
            <ul className="current-role__list">
              {currentRole.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
