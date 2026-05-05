import { useEffect, useState } from 'react'

export default function Loader() {
  const [hiding, setHiding] = useState(false)
  const [gone, setGone]     = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true),  2000)
    const t2 = setTimeout(() => setGone(true),    2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center
                  bg-white transition-all duration-700
                  ${hiding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Animated leaf SVG */}
      <div className="animate-pulse2 mb-5">
        <img src="/img/legalinbali.png" alt="" className='h-60'/>
      </div>
    </div>
  )
}
