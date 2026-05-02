import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('hvh_cookies_accepted')
      if (!accepted) setVisible(true)
    } catch {
      // localStorage unavailable (SSR or privacy mode)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem('hvh_cookies_accepted', '1')
    } catch {}
    setVisible(false)
  }

  const decline = () => {
    try {
      localStorage.setItem('hvh_cookies_accepted', '0')
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-t border-gray-800 px-4 py-4 md:py-5"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">🍪</span>
          <p className="text-gray-300 text-sm font-body leading-relaxed">
            We use cookies to improve your experience, analyze site traffic, and serve relevant advertisements.{' '}
            <Link href="/cookies-policy" className="text-primary-400 hover:underline">
              Learn more
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-gray-400 hover:text-white transition-colors font-body px-4 py-2 rounded-full hover:bg-gray-800"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="btn-primary text-sm py-2 px-5"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
