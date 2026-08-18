import { profile } from '@/data/profile'

export function Portrait() {
  const { portrait, title, organisation, location } = profile

  return (
    <figure className="portrait">
      <div className="portrait__offset" aria-hidden="true" />
      <div className="portrait__frame">
        <img
          src={portrait.src}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          fetchPriority="high"
        />
        <figcaption className="portrait__caption">
          <strong>{title}</strong>
          <span>
            {organisation} · {location}
          </span>
        </figcaption>
      </div>
    </figure>
  )
}
