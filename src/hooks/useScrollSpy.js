import { useEffect, useState } from 'react'

export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const onScroll = () => {
      const position = window.scrollY + offset
      let current = ids[0]

      for (const el of elements) {
        if (el.offsetTop <= position) current = el.id
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 8) {
        current = ids[ids.length - 1]
      }

      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return activeId
}
