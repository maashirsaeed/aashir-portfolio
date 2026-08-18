import { testimonials } from '@/data/testimonials'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Testimonials() {
  if (!testimonials.length) return null

  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Testimonials"
            heading="What colleagues and partners have said."
          />
        </Reveal>

        <div className="testimonials">
          {testimonials.map((item) => (
            <blockquote className="quote-card" key={item.id}>
              <p>{item.quote}</p>
              <footer>
                <strong>{item.name}</strong>
                {item.role ? `, ${item.role}` : ''}
                {item.organisation ? ` · ${item.organisation}` : ''}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}
