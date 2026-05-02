import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navLinks = [
  { label: 'Health Tips', href: '/category/health-tips' },
  { label: 'Natural Remedies', href: '/category/natural-remedies' },
  { label: 'Wellness', href: '/category/wellness-guides' },
  { label: 'Nutrition', href: '/category/nutrition' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
      setQuery('')
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Healthy Vibes Hub - Home">
              <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-glow transition-shadow duration-300">
                <span className="text-white text-lg">🌿</span>
              </div>
              <div>
                <span className="font-display font-bold text-gray-900 text-lg leading-none block">Healthy Vibes</span>
                <span className="font-body text-primary-600 text-xs font-semibold tracking-widest uppercase leading-none">Hub</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded-lg text-sm hover:bg-primary-50 ${
                    router.asPath === link.href ? 'text-primary-600 bg-primary-50' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-600 hover:text-primary-600"
                aria-label="Search articles"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <Link href="/newsletter" className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
                <span>Newsletter</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                aria-label="Toggle mobile menu"
                aria-expanded={menuOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`border-t border-gray-100 bg-white overflow-hidden transition-all duration-300 ${searchOpen ? 'max-h-20' : 'max-h-0'}`}>
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto px-4 py-3 flex gap-2">
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search health tips, remedies, wellness guides..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
              aria-label="Search"
              autoFocus={searchOpen}
            />
            <button type="submit" className="btn-primary text-sm py-2 px-5">Search</button>
          </form>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 px-4 rounded-lg text-gray-700 font-medium font-body hover:bg-primary-50 hover:text-primary-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <Link href="/newsletter" className="btn-primary w-full justify-center text-sm" onClick={() => setMenuOpen(false)}>
                📧 Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  )
}
