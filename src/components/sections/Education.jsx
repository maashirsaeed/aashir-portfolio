import { certifications, education } from '@/data/education'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Education() {
  const featured = certifications.filter((item) => item.featured)
  const rest = certifications.filter((item) => !item.featured)

  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            heading="Academic background and professional learning."
          />
        </Reveal>

        <Reveal className="education-list">
          {education.map((item) => (
            <article className="education-row" key={item.id}>
              <div>
                <h3>{item.credential}</h3>
                <p>{item.institution}</p>
              </div>
              <time>{item.dates}</time>
            </article>
          ))}
        </Reveal>

        <Reveal>
          <h3 className="section-label certifications-label">Certifications</h3>
        </Reveal>

        <div className="education-list">
          {featured.map((item) => (
            <Reveal className="cert-row cert-row--featured" key={item.id} as="article">
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.issuer}
                  {item.association ? ` · ${item.association}` : ''}
                </p>
              </div>
              <time>Issued {item.issued}</time>
            </Reveal>
          ))}

          {rest.map((item) => (
            <Reveal className="cert-row" key={item.id} as="article">
              <div>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </div>
              <time>Issued {item.issued}</time>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
