import Link from 'next/link'
import Image from 'next/image'
import SEOHead from '../../components/SEOHead'
import { authors, articles } from '../../data/blog'
import { SITE_URL, breadcrumbSchema } from '../../seo/meta'

export default function AuthorsPage() {
  return (
    <>
      <SEOHead
        title="Our Health Experts & Authors – Certified Medical Writers 2026 | Healthy Vibes Hub"
        description="Meet the certified health professionals and medical writers behind Healthy Vibes Hub — physicians, registered dietitians, and public health researchers with decades of expertise."
        canonical={`${SITE_URL}/authors`}
        structuredData={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Our Team', path: '/authors' }])]}
      />

      <div className="bg-hero-gradient py-12 border-b border-green-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-4 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-body text-gray-500">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-900 font-medium">Our Team</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-gray-900 text-4xl md:text-5xl mb-3">Meet Our Expert Team</h1>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            Every word published on Healthy Vibes Hub is written or reviewed by a credentialed health professional. No anonymous bylines, no AI-generated health advice — just real experts you can trust.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* EEAT Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 text-center">
          {[
            { stat: '3', label: 'Certified Experts' },
            { stat: '40+', label: 'Years Combined Experience' },
            { stat: '250+', label: 'Articles Published' },
            { stat: '100%', label: 'Medically Reviewed' },
          ].map(item => (
            <div key={item.label} className="bg-primary-50 rounded-2xl py-5 px-3">
              <p className="font-display font-bold text-primary-600 text-3xl">{item.stat}</p>
              <p className="text-gray-600 text-sm font-body mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Authors */}
        <div className="space-y-10">
          {authors.map(author => {
            const authorArticles = articles.filter(a => a.authorSlug === author.slug)
            return (
              <div key={author.slug} className="card p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-primary-100">
                    <Image src={author.image} alt={`${author.name} — ${author.role} at Healthy Vibes Hub`} fill className="object-cover" sizes="96px" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h2 className="font-display font-bold text-gray-900 text-2xl">{author.name}</h2>
                        <p className="text-primary-600 font-semibold text-sm font-body">{author.role}</p>
                        <p className="text-gray-400 text-xs font-body mt-0.5">{author.credentials}</p>
                      </div>
                      <Link href={`/authors/${author.slug}`} className="btn-outline text-sm py-1.5 px-4">View Profile</Link>
                    </div>
                    <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">{author.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {author.specialties.map(s => (
                        <span key={s} className="badge-green text-xs">{s}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-body">
                      <span>📝 {author.articles} articles</span>
                      {author.social.twitter && (
                        <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Twitter →</a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Recent articles by author */}
                {authorArticles.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-50">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide font-body mb-3">Recent Articles</p>
                    <ul className="space-y-1.5">
                      {authorArticles.slice(0, 3).map(a => (
                        <li key={a.slug}>
                          <Link href={`/blog/${a.slug}`} className="text-sm text-gray-700 hover:text-primary-600 transition-colors font-body">
                            → {a.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Editorial Standards */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-emerald-50 rounded-3xl p-8 text-center">
          <h2 className="font-display font-bold text-gray-900 text-2xl mb-3">Our Editorial Standards</h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto mb-5">All content on Healthy Vibes Hub undergoes a rigorous review process before publication. Read our full editorial guidelines to understand how we ensure accuracy, transparency, and integrity.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/editorial-guidelines" className="btn-primary">Read Editorial Guidelines</Link>
            <Link href="/contact" className="btn-outline">Write for Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
