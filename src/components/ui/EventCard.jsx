import { asset } from '@/data/site'

export function EventCard({ event, featured = false, loading = 'lazy' }) {
  const imageSrc = event.hasPhoto ? asset(event.image.replace(/^\//, '')) : null

  return (
    <article className={`event-card ${featured ? 'event-card--featured' : ''}`.trim()}>
      <div className="event-card__media">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${event.title} in ${event.location}`}
            width={featured ? 900 : 720}
            height={featured ? 1125 : 450}
            loading={loading}
            decoding="async"
          />
        ) : (
          <div className="event-placeholder" aria-hidden="true">
            <span>{event.location}</span>
            <strong>{event.title}</strong>
          </div>
        )}
      </div>
      <div className="event-card__body">
        <h3>
          {event.title} — {event.location}
        </h3>
        <p>{event.caption}</p>
      </div>
    </article>
  )
}
