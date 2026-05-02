import { useState } from 'react'
import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { SITE_URL, breadcrumbSchema } from '../seo/meta'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1000))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <SEOHead
        title="Contact Healthy Vibes Hub – Get in Touch with Our Health Experts 2026"
        description="Contact the Healthy Vibes Hub team with questions, content suggestions, partnership inquiries, or writing submissions. We respond within 24–48 hours."
        canonical={`${SITE_URL}/contact`}
        structuredData={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }])]}
      />

      <div className="bg-hero-gradient py-12 border-b border-green-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-4 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-body text-gray-500">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-900 font-medium">Contact Us</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-gray-900 text-4xl md:text-5xl mb-3">Contact Healthy Vibes Hub</h1>
          <p className="text-gray-600 font-body text-lg max-w-xl mx-auto">Questions, suggestions, partnerships, or writing inquiries — we'd love to hear from you. We respond within 24–48 business hours.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-gray-900 text-xl mb-4">Get in Touch</h2>
              <ul className="space-y-4">
                {[
                  { icon: '📧', label: 'Email', value: 'hello@healthyvibeshub.com', href: 'mailto:hello@healthyvibeshub.com' },
                  { icon: '📞', label: 'Phone', value: '+1 (212) 555-1234', href: 'tel:+12125551234' },
                  { icon: '📍', label: 'Address', value: '350 5th Ave, New York, NY 10118, USA', href: null },
                ].map(item => (
                  <li key={item.label} className="flex gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide font-body">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-gray-700 hover:text-primary-600 transition-colors font-body">{item.value}</a>
                      ) : (
                        <p className="text-sm text-gray-700 font-body">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-50 rounded-2xl p-5">
              <h3 className="font-display font-semibold text-gray-900 text-base mb-3">Common Inquiries</h3>
              <ul className="space-y-2 text-sm font-body text-gray-600">
                <li>📝 Write for Us / Guest Posts</li>
                <li>📢 Advertising & Sponsorships</li>
                <li>🤝 Partnership Opportunities</li>
                <li>🔧 Technical Issues</li>
                <li>✉️ Editorial Feedback</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-display font-semibold text-gray-900 text-base mb-1">Response Time</h3>
              <p className="text-sm text-gray-500 font-body">We aim to respond to all messages within 24–48 business hours Monday to Friday.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {status === 'success' ? (
              <div className="card p-10 text-center">
                <span className="text-5xl mb-4 block">🎉</span>
                <h2 className="font-display font-bold text-gray-900 text-2xl mb-2">Message Received!</h2>
                <p className="text-gray-500 font-body mb-6">Thank you for reaching out to Healthy Vibes Hub. Our team will review your message and respond within 24–48 business hours.</p>
                <button onClick={() => setStatus(null)} className="btn-outline">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 space-y-5" aria-label="Contact form" noValidate>
                <h2 className="font-display font-bold text-gray-900 text-xl">Send Us a Message</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">Full Name *</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">Email Address *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">Subject *</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white">
                    <option value="">Select a topic…</option>
                    <option>General Question</option>
                    <option>Write for Us / Guest Post</option>
                    <option>Advertising & Sponsorship</option>
                    <option>Partnership Opportunity</option>
                    <option>Editorial Feedback</option>
                    <option>Technical Issue</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">Message *</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="Write your message here…"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none" />
                </div>
                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center text-base py-3">
                  {status === 'loading' ? 'Sending…' : '📤 Send Message'}
                </button>
                <p className="text-xs text-gray-400 text-center font-body">By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-primary-600">Privacy Policy</Link>.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
