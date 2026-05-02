import { useState } from 'react'
import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { SITE_URL } from '../seo/meta'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 900))
    setStatus('success')
  }

  return (
    <>
      <SEOHead
        title="Free Weekly Health Newsletter – Healthy Vibes Hub 2026"
        description="Subscribe to the Healthy Vibes Hub newsletter. Get expert health tips, natural remedies, and wellness guides delivered every Monday. Join 50,000+ readers."
        canonical={`${SITE_URL}/newsletter`}
      />

      <div className="min-h-screen bg-gradient-to-br from-primary-600 via-emerald-500 to-teal-600 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          {status === 'success' ? (
            <div className="bg-white rounded-3xl p-10 text-center shadow-2xl">
              <span className="text-6xl mb-4 block">🎉</span>
              <h2 className="font-display font-bold text-gray-900 text-3xl mb-2">You're In!</h2>
              <p className="text-gray-500 font-body mb-6">Welcome to the Healthy Vibes Hub community! Check your inbox for a welcome email with your first wellness guide.</p>
              <Link href="/" className="btn-primary justify-center">Explore Articles →</Link>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🌿</div>
                <h1 className="font-display font-bold text-gray-900 text-3xl mb-2">Weekly Healthy Vibes</h1>
                <p className="text-gray-500 font-body">Science-backed health tips delivered every Monday morning. Free forever.</p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8 text-center">
                {[
                  { n: '50K+', l: 'Subscribers' },
                  { n: '4.9★', l: 'Rating' },
                  { n: '0', l: 'Spam, Ever' },
                ].map(s => (
                  <div key={s.l} className="bg-primary-50 rounded-xl py-3">
                    <p className="font-display font-bold text-primary-600 text-xl">{s.n}</p>
                    <p className="text-xs text-gray-500 font-body">{s.l}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Newsletter subscription form">
                <div>
                  <label htmlFor="nl-name" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">First Name</label>
                  <input id="nl-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your first name" required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300" />
                </div>
                <div>
                  <label htmlFor="nl-email" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">Email Address</label>
                  <input id="nl-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300" />
                </div>
                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center text-base py-3.5">
                  {status === 'loading' ? 'Subscribing…' : '✨ Subscribe Free — No Spam'}
                </button>
                <p className="text-xs text-gray-400 text-center font-body">
                  By subscribing, you agree to our <Link href="/privacy-policy" className="underline hover:text-primary-600">Privacy Policy</Link>. Unsubscribe anytime.
                </p>
              </form>

              <div className="mt-6 space-y-2 text-sm font-body text-gray-600">
                <p className="font-semibold text-gray-900 text-base font-display">What you'll get every Monday:</p>
                {['🩺 1 expert health tip backed by research', '🌿 1 natural remedy or wellness practice', '📖 3 hand-picked articles from our editors', '📊 Seasonal health awareness & prevention tips'].map(item => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
