import useFadeIn from '../hooks/useFadeIn'

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * Pass extra className for layout/spacing utilities.
 */
export default function Section({ children, className = '', delay = 0 }) {
  const ref = useFadeIn()

  return (
    <div
      ref={ref}
      className={`section-animate ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
