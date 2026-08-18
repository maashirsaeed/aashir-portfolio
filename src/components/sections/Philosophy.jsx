import { philosophy } from '@/data/philosophy'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Philosophy() {
  return (
    <section className="section" aria-labelledby="philosophy-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="philosophy-heading"
            eyebrow="Approach"
            heading="How I approach student recruitment"
          />
        </Reveal>

        <div className="philosophy-grid">
          {philosophy.map((item, index) => (
            <Reveal key={item.number} delay={index * 50} className="principle">
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
