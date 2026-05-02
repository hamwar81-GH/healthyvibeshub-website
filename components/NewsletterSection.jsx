import { useState } from 'react'

export default function NewsletterSection({ compact = false }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    await new Promise(r => setTimeout(r, 900))
    setStatus('success')
    setEmail('')
  }

  if (compact) {
    return (
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
        <h3 className="font-display font-bold text-gray-900 text-lg mb-1">📬 Weekly Wellness Digest</h3>
        <p className="text-sm text-gray-500 font-body mb-4">Get the best health tips delivered every Monday.</p>
        {status === 'success' ? (
          <div className="text-center py-2">
            <span className="text-2xl mb-1 block">🎉</span>
            <p className="text-primary-700 font-semibold text-sm font-body">You're in! Check your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Email address"
            />
            <button type="submit" disabled={status === 'loading'} className="btn-primary justify-center text-sm py-2.5">
              {status === 'loading' ? 'Subscribing…' : 'Subscribe Free →'}
            </button>
          </form>
        )}
      </div>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-emerald-500 relative overflow-hidden" aria-labelledby="newsletter-heading">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
        <span className="inline-block text-4xl mb-4 animate-float">🌿</span>
        <h2 id="newsletter-heading" className="font-display font-bold text-white text-3xl md:text-4xl mb-3">
          Get Weekly Healthy Vibes — Free
        </h2>
        <p className="text-primary-100 font-body text-lg mb-8">
          Join 50,000+ readers who get science-backed health tips, natural remedies, and wellness guides every Monday. No spam. Unsubscribe anytime.
        </p>

        {status === 'success' ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 inline-block">
            <span className="text-4xl mb-2 block">🎉</span>
            <p className="text-white font-display font-bold text-xl">Welcome to the tribe!</p>
            <p className="text-primary-100 font-body text-sm mt-1">Check your inbox for a welcome gift.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" aria-label="Newsletter signup form">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full text-gray-800 font-body focus:outline-none focus:ring-4 focus:ring-white/40 shadow-lg text-sm"
              aria-label="Email address for newsletter subscription"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-primary-600 font-semibold px-7 py-3.5 rounded-full shadow-lg hover:bg-primary-50 transition-all duration-300 hover:-translate-y-0.5 text-sm whitespace-nowrap font-body disabled:opacity-70"
            >
              {status === 'loading' ? 'Subscribing…' : '✨ Subscribe Free'}
            </button>
          </form>
        )}

        <p className="text-primary-200 text-xs font-body mt-4">
          🔒 We respect your privacy. Unsubscribe with one click anytime.
        </p>

        {/* Trust Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            { stat: '50K+', label: 'Subscribers' },
            { stat: '4.9★', label: 'Reader Rating' },
            { stat: '3 yrs', label: 'Publishing Quality' },
          ].map(item => (
            <div key={item.stat} className="text-center">
              <p className="font-display font-bold text-white text-2xl">{item.stat}</p>
              <p className="text-primary-200 text-xs font-body">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
