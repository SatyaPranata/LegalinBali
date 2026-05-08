import { useEffect, useRef } from 'react'

/**
 * Triggers a CSS class "visible" when the element enters the viewport.
 * The element should start with class "section-animate" (opacity-0 + translateY).
 *
 * @param {number} threshold - 0..1, how much of element must be visible (default 0.12)
 * @returns React ref to attach to the DOM element
 */
export default function useFadeIn(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
