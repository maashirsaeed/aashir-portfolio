import { experience } from '@/data/experience'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Experience() {
  return (
    <section className="section" aria-labelledby="experience-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="experience-heading"
            eyebrow="Career"
            heading="Experience across recruitment, admissions and university representation."
          />
        </Reveal>

        <ol className="timeline">
          {experience.map((item) => (
            <Reveal
              as="li"
              key={item.id}
              className={`timeline-item ${item.quiet ? 'timeline-item--quiet' : ''}`.trim()}
            >
              <div className="timeline-item__dot" aria-hidden="true" />
              <div className="timeline-org">
                <h3>{item.organisation}</h3>
                <span>{item.location}</span>
                <span>{item.employment}</span>
                {item.tenure ? <span>{item.tenure}</span> : null}
              </div>
              <div>
                {item.roles.map((role) => (
                  <article className="role" key={`${item.id}-${role.title}`}>
                    <h4>
                      {role.title}
                      {item.current ? <span className="badge">Current</span> : null}
                    </h4>
                    <p className="role__meta">{role.dates}</p>
                    <p>{role.description}</p>
                    {role.responsibilities ? (
                      <ul>
                        {role.responsibilities.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
