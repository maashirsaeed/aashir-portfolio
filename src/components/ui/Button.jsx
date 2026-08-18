export function Button({
  href,
  children,
  variant = 'primary',
  onDark = false,
  className = '',
  type,
  ...props
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    onDark ? 'btn--on-dark' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type ?? 'button'} {...props}>
      {children}
    </button>
  )
}
