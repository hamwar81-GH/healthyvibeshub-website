import Link from 'next/link'
import Image from 'next/image'
import SEOHead from '../../components/SEOHead'
import ArticleCard from '../../components/ArticleCard'
import { authors, articles } from '../../data/blog'
import { SITE_URL, breadcrumbSchema } from '../../seo/meta'

export default function AuthorPage({ author, authorArticles }) {
  if (!author) return <div className="py-20 text-center font-body">Author not found.</div>

  return (
    <>
      <SEOHead
        title={`${author.name} – ${author.role} | Healthy Vibes Hub`}
        description={`${author.name} is a ${author.role} at Healthy Vibes Hub. ${author.credentials}. Read ${author.articles}+ evidence-based health articles.`}
        canonical={`${SITE_URL}/authors/${author.slug}`}
        ogImage={author.image}
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Team', path: '/authors' },
            { name: author.name, path: `/authors/${author.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: author.name,
            jobTitle: author.role,
            description: author.bio,
            image: author.image,
            url: `${SITE_URL}/authors/${author.slug}`,
            sameAs: Object.values(author.social).filter(Boolean),
          },
        ]}
      />

      <div className="bg-hero-gradient py-12 border-b border-green-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm font-body text-gray-500">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/authors" className="hover:text-primary-600">Our Team</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-900 font-medium">{author.name}</li>
            </ol>
          </nav>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-card flex-shrink-0">
              <Image src={author.image} alt={author.name} fill className="object-cover" sizes="112px" priority />
            </div>
            <div>
              <span className="badge-green mb-2 inline-block">{author.role}</span>
              <h1 className="font-display font-bold text-gray-900 text-4xl mb-1">{author.name}</h1>
              <p className="text-gray-500 font-body text-sm mb-3">{author.credentials}</p>
              <div className="flex flex-wrap gap-2">
                {author.specialties.map(s => <span key={s} className="badge bg-gray-100 text-gray-600 text-xs">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="font-display font-bold text-gray-900 text-xl mb-3">About {author.name}</h2>
            <p className="text-gray-600 font-body leading-relaxed mb-8">{author.bio}</p>
            <h2 className="font-display font-bold text-gray-900 text-xl mb-5">Articles by {author.name}</h2>
            <div className="space-y-4">
              {authorArticles.map(a => <ArticleCard key={a.id} article={a} variant="horizontal" />)}
            </div>
          </div>
          <aside>
            <div className="card p-5 sticky top-24">
              <h3 className="font-display font-bold text-gray-900 text-base mb-4">Quick Stats</h3>
              <ul className="space-y-3 text-sm font-body text-gray-600">
                <li className="flex items-center justify-between"><span>Articles Written</span><strong className="text-primary-600">{author.articles}+</strong></li>
                <li className="flex items-center justify-between"><span>Specialties</span><strong>{author.specialties.length}</strong></li>
                <li className="flex items-center justify-between"><span>Reviewed Status</span><span className="text-green-600 font-semibold">✅ Verified</span></li>
              </ul>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs text-gray-400 font-body">Connect with {author.name.split(' ')[0]}:</p>
                <div className="flex gap-2 mt-2">
                  {author.social.twitter && (
                    <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-1.5 px-3">Twitter</a>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return { paths: authors.map(a => ({ params: { slug: a.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const author = authors.find(a => a.slug === params.slug) || null
  const authorArticles = author ? articles.filter(a => a.authorSlug === author.slug) : []
  return { props: { author, authorArticles } }
}
