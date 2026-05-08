import { useState, useEffect } from 'react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY   = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress  = docHeight > 0 ? (scrollY / docHeight) * 100 : 0

      setVisible(scrollY > 300)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // SVG circle progress
  const radius      = 22
  const circumference = 2 * Math.PI * radius
  const strokeDash  = circumference - (scrollProgress / 100) * circumference

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll ke atas"
      className={`fixed bottom-24 right-6 z-50 group
                  transition-all duration-500 ease-out
                  ${visible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-[#07251f] text-white text-xs font-medium
                      px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg
                      opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0
                      transition-all duration-200 pointer-events-none">
        Kembali ke atas
        <div className="absolute top-full right-4 border-4 border-transparent border-t-[#07251f]" />
      </div>

      {/* Button with circular progress */}
      <div className="relative w-14 h-14">
        {/* SVG progress ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 56 56"
        >
          {/* Track */}
          <circle
            cx="28" cy="28" r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2.5"
          />
          {/* Progress */}
          <circle
            cx="28" cy="28" r={radius}
            fill="none"
            stroke="#c9a84c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDash}
            className="transition-all duration-300"
          />
        </svg>

        {/* Inner circle button */}
        <div className="absolute inset-1.5 bg-[#07251f] hover:bg-[#0e3d33]
                        rounded-full flex items-center justify-center
                        shadow-lg shadow-[#07251f]/40
                        hover:scale-110 active:scale-95
                        transition-all duration-200 border border-white/10">
          {/* Arrow up icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>
      </div>
    </button>
  )
}
