export function SectionHeading({
  id,
  eyebrow,
  heading,
  copy,
  wide = false,
}) {
  return (
    <header>
      {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
      <h2 id={id} className={`section-heading ${wide ? 'section-heading--wide' : ''}`.trim()}>
        {heading}
      </h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </header>
  )
}
