import { expertise } from '@/data/expertise'
import { skillGroups } from '@/data/skills'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Expertise() {
  return (
    <section id="expertise" className="section" aria-labelledby="expertise-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="expertise-heading"
            eyebrow="Expertise"
            heading="Areas of professional practice in international education."
          />
        </Reveal>

        <div className="card-grid">
          {expertise.map((item, index) => (
            <Reveal
              key={item.id}
              as="article"
              className="expertise-card"
              delay={index * 40}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="skills-panel">
          {skillGroups.map((group) => (
            <div className="skills-group" key={group.id}>
              <h3>{group.label}</h3>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
