import Link from 'next/link'
import Image from 'next/image'
import SEOHead from '../components/SEOHead'
import NewsletterSection from '../components/NewsletterSection'
import { authors } from '../data/blog'
import { SITE_URL, breadcrumbSchema, organizationSchema } from '../seo/meta'

export default function AboutPage() {
  const structuredData = [
    organizationSchema(),
    breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]),
  ]

  return (
    <>
      <SEOHead
        title="About Healthy Vibes Hub – Our Story, Mission & Expert Team 2026"
        description="Learn about Healthy Vibes Hub — our mission to make evidence-based health guidance accessible to all. Meet our team of certified health professionals and medical reviewers."
        canonical={`${SITE_URL}/about`}
        structuredData={structuredData}
      />

      {/* Hero */}
      <div className="bg-hero-gradient py-16 border-b border-green-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-body text-gray-500">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-900 font-medium">About Us</li>
            </ol>
          </nav>
          <span className="badge-green mb-3 inline-block">Our Story</span>
          <h1 className="font-display font-bold text-gray-900 text-4xl md:text-5xl mb-4">
            Empowering Healthier Lives Through<br className="hidden md:block" /> Trusted Wellness Knowledge
          </h1>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Healthy Vibes Hub was founded with one clear mission: to make science-backed health guidance accessible, practical, and enjoyable for everyone — from toddlers to seniors.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Our Story */}
        <section aria-labelledby="our-story">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-green mb-3 inline-block">Our Story</span>
              <h2 id="our-story" className="font-display font-bold text-gray-900 text-3xl mb-4">Why We Started Healthy Vibes Hub</h2>
              <div className="prose-custom">
                <p>In 2022, Dr. Sarah Mitchell was frustrated. As a practicing integrative medicine physician, she saw patients arriving with health misinformation they'd picked up from unreliable websites. Good health guidance existed — but it was buried under jargon, paywalls, or simply wasn't written for real people.</p>
                <p>She teamed up with nutritionist Emma Hartwell and public health researcher Dr. James Chen to create something different: a platform where every article is written by a qualified health professional, reviewed for accuracy, and — crucially — actually enjoyable to read.</p>
                <p>Today, Healthy Vibes Hub serves over 50,000 monthly readers across every age group, from parents looking for immunity tips for their kids to seniors seeking safe, gentle fitness guidance.</p>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Healthy Vibes Hub team working on wellness content"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section aria-labelledby="mission">
          <div className="text-center mb-10">
            <span className="badge-green mb-2 inline-block">Our Mission</span>
            <h2 id="mission" className="section-title">What Drives Everything We Do</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Accuracy First', desc: 'Every health claim is backed by peer-reviewed research or the guidance of our credentialed medical reviewers. We never publish speculation as fact.' },
              { icon: '🌍', title: 'Accessible to All', desc: 'From children to seniors, urban professionals to rural families — health knowledge should be available to everyone, everywhere, for free.' },
              { icon: '🔄', title: 'Continuously Updated', desc: 'Health science evolves rapidly. We revisit and update our content regularly to ensure you always have the most current, accurate guidance.' },
            ].map(v => (
              <div key={v.title} className="card p-6 text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Are */}
        <section aria-labelledby="who-we-are">
          <div className="text-center mb-10">
            <span className="badge-green mb-2 inline-block">Our Team</span>
            <h2 id="who-we-are" className="section-title">The Experts Behind the Content</h2>
            <p className="section-subtitle">Every article is written or reviewed by a qualified health professional. No anonymous writers. No AI-generated health advice.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {authors.map(author => (
              <div key={author.slug} className="card p-6 text-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary-200">
                  <Image src={author.image} alt={author.name} fill className="object-cover" sizes="80px" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg">{author.name}</h3>
                <p className="text-primary-600 text-sm font-semibold font-body mb-1">{author.role}</p>
                <p className="text-xs text-gray-400 font-body mb-3">{author.credentials}</p>
                <p className="text-sm text-gray-500 font-body leading-relaxed line-clamp-3">{author.bio}</p>
                <Link href={`/authors/${author.slug}`} className="text-primary-600 text-sm font-semibold hover:underline mt-3 inline-block font-body">
                  View Profile →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/authors" className="btn-primary">Meet the Full Team →</Link>
          </div>
        </section>

        {/* Trust Statement */}
        <section className="bg-gradient-to-br from-primary-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center" aria-labelledby="trust-statement">
          <h2 id="trust-statement" className="font-display font-bold text-gray-900 text-3xl mb-4">Our Trust Commitment to You</h2>
          <p className="text-gray-600 font-body text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            At Healthy Vibes Hub, we hold ourselves to the highest editorial standards. We follow EEAT principles (Experience, Expertise, Authoritativeness, Trustworthiness) in every piece of content we publish. Our editorial guidelines are publicly available, our authors are verified, and our medical reviewers are credentialed professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: '✅', label: 'All content medically reviewed' },
              { icon: '📖', label: 'Sources cited from peer-reviewed research' },
              { icon: '🔒', label: 'No paid editorial content without disclosure' },
              { icon: '🌿', label: 'Free from conflicts of interest' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-body text-gray-700">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Details */}
        <section aria-labelledby="contact-us-section">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <span className="badge-green mb-3 inline-block">Get in Touch</span>
              <h2 id="contact-us-section" className="font-display font-bold text-gray-900 text-3xl mb-4">Contact Healthy Vibes Hub</h2>
              <p className="text-gray-600 font-body mb-5">We'd love to hear from you — whether you have a question, a content suggestion, or are interested in writing for us.</p>
              <ul className="space-y-3 text-gray-600 font-body text-sm">
                <li className="flex items-center gap-2">📧 <a href="mailto:hello@healthyvibeshub.com" className="hover:text-primary-600 transition-colors">hello@healthyvibeshub.com</a></li>
                <li className="flex items-center gap-2">📞 <a href="tel:+12125551234" className="hover:text-primary-600 transition-colors">+1 (212) 555-1234</a></li>
                <li className="flex items-start gap-2">📍 <span>350 5th Ave, New York, NY 10118, USA</span></li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-gray-900 text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
                  { label: 'Write for Us', href: '/contact' },
                  { label: 'Privacy Policy', href: '/privacy-policy' },
                  { label: 'Advertise with Us', href: '/contact' },
                  { label: 'Terms of Use', href: '/terms-of-use' },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm font-body text-primary-600 hover:underline">→ {l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <NewsletterSection />
    </>
  )
}
