import Link from 'next/link'

const footerLinks = {
  'Health Topics': [
    { label: 'Health Tips', href: '/category/health-tips' },
    { label: 'Daily Routines', href: '/category/daily-routines' },
    { label: 'Natural Remedies', href: '/category/natural-remedies' },
    { label: 'Wellness Guides', href: '/category/wellness-guides' },
    { label: 'Nutrition', href: '/category/nutrition' },
    { label: 'Mental Health', href: '/category/mental-health' },
  ],
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/authors' },
    { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'HTML Sitemap', href: '/sitemap' },
  ],
  'Legal': [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
    { label: 'Cookies Policy', href: '/cookies-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
}

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/@healthyvibeshub', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )},
  { label: 'Instagram', href: 'https://www.instagram.com/healthyvibeshub', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )},
  { label: 'Pinterest', href: 'https://www.pinterest.com/healthyvibeshub', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  )},
  { label: 'TikTok', href: 'https://www.tiktok.com/@healthyvibeshub', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.24 8.24 0 004.83 1.56V6.82a4.85 4.85 0 01-1.06-.13z"/>
    </svg>
  )},
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group mb-4 w-fit">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🌿</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-xl leading-none block">Healthy Vibes</span>
                <span className="font-body text-primary-400 text-xs font-semibold tracking-widest uppercase leading-none">Hub</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 font-body max-w-xs">
              Your trusted source for evidence-based health tips, natural remedies, and wellness guidance — for every age and stage of life.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-5">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-200"
                  aria-label={`Follow us on ${s.label}`}
                >
                  {s.icon}
                </a>
              ))}
              {/* RSS */}
              <Link
                href="/rss.xml"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-200"
                aria-label="RSS Feed"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.18 15.64a2.18 2.18 0 012.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 012.18-2.18M4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44m0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z"/>
                </svg>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-1.5 text-sm text-gray-500">
              <p>📧 <a href="mailto:hello@healthyvibeshub.com" className="hover:text-primary-400 transition-colors">hello@healthyvibeshub.com</a></p>
              <p>📞 <a href="tel:+12125551234" className="hover:text-primary-400 transition-colors">+1 (212) 555-1234</a></p>
              <p>📍 350 5th Ave, New York, NY 10118, USA</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-display font-semibold text-white text-base mb-4">{group}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Strip */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div>
            <p className="font-display font-semibold text-white text-lg">Get weekly wellness insights 🌿</p>
            <p className="text-sm text-gray-400 font-body">Join 50,000+ subscribers. No spam, ever.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2.5 rounded-full bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-1 md:w-56 font-body"
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="btn-primary text-sm py-2.5 whitespace-nowrap">Subscribe Free</button>
          </form>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p className="font-body">© {new Date().getFullYear()} Healthy Vibes Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs">Made with ❤️ for a healthier world</span>
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=healthyvibeshub" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">DMCA Protected</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors font-body">Privacy</Link>
            <span>·</span>
            <Link href="/terms-of-use" className="hover:text-gray-300 transition-colors font-body">Terms</Link>
            <span>·</span>
            <Link href="/cookies-policy" className="hover:text-gray-300 transition-colors font-body">Cookies</Link>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <p className="mt-6 text-center text-xs text-gray-600 font-body max-w-3xl mx-auto">
          <strong className="text-gray-500">Medical Disclaimer:</strong> Content on Healthy Vibes Hub is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.
        </p>
      </div>
    </footer>
  )
}
