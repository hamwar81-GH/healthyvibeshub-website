import { useRouter } from 'next/router'
import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/blog'
import { SITE_URL } from '../seo/meta'

export default function SearchPage() {
  const router = useRouter()
  const q = (router.query.q || '').toString().toLowerCase()

  const results = q ? articles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.tags?.some(t => t.toLowerCase().includes(q))
  ) : []

  return (
    <>
      <SEOHead
        title={q ? `Search results for "${q}" | Healthy Vibes Hub` : 'Search | Healthy Vibes Hub'}
        description={`Search Healthy Vibes Hub for health tips, natural remedies, wellness guides, and more. ${results.length} results for "${q}".`}
        canonical={`${SITE_URL}/search`}
        noIndex={true}
      />

      <div className="bg-hero-gradient py-10 border-b border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-bold text-gray-900 text-3xl mb-4">
            {q ? `Search Results for "${q}"` : 'Search Articles'}
          </h1>
          <form onSubmit={e => {
            e.preventDefault()
            const val = e.target.elements.q.value.trim()
            if (val) router.push(`/search?q=${encodeURIComponent(val)}`)
          }} className="flex gap-2">
            <input
              type="search"
              name="q"
              defaultValue={router.query.q}
              placeholder="Search health tips, remedies, guides…"
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300 shadow-sm"
              aria-label="Search query"
            />
            <button type="submit" className="btn-primary">Search</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!q ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-gray-500 font-body text-lg">Enter a search term above to find health articles.</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🤔</span>
            <h2 className="font-display font-bold text-gray-900 text-2xl mb-2">No results found</h2>
            <p className="text-gray-500 font-body mb-6">We couldn't find articles matching "{q}". Try a different search term.</p>
            <Link href="/blog" className="btn-primary">Browse All Articles</Link>
          </div>
        ) : (
          <>
            <p className="text-gray-500 font-body mb-6">{results.length} result{results.length !== 1 ? 's' : ''} for "<strong className="text-gray-900">{q}</strong>"</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
