import { impact } from '@/data/impact'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Impact() {
  return (
    <section id="impact" className="section" aria-labelledby="impact-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="impact-heading"
            eyebrow="Impact"
            heading="Where experience creates value"
          />
        </Reveal>

        <div className="card-grid">
          {impact.map((item, index) => (
            <Reveal
              key={item.id}
              as="article"
              className="impact-card"
              delay={index * 40}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
