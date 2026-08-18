import { events, eventsIntro } from '@/data/events'
import { Container } from '@/components/layout/Container'
import { EventCard } from '@/components/ui/EventCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Engagement() {
  return (
    <section id="engagement" className="section" aria-labelledby="engagement-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="engagement-heading"
            eyebrow={eventsIntro.eyebrow}
            heading={eventsIntro.heading}
            copy={eventsIntro.subheading}
            wide
          />
        </Reveal>

        <div className="event-gallery">
          {events.map((event, index) => (
            <Reveal key={event.id} delay={index * 50}>
              <EventCard
                event={event}
                featured={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
