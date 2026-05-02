import { useState } from 'react'
import Link from 'next/link'
import SEOHead from '../../components/SEOHead'
import ArticleCard from '../../components/ArticleCard'
import NewsletterSection from '../../components/NewsletterSection'
import { articles, categories } from '../../data/blog'
import { SITE_URL, breadcrumbSchema } from '../../seo/meta'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQ, setSearchQ] = useState('')

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'all' || a.categorySlug === activeCategory
    const matchSearch = searchQ === '' || a.title.toLowerCase().includes(searchQ.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQ.toLowerCase())
    return matchCat && matchSearch
  })

  const structuredData = [
    breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]),
  ]

  return (
    <>
      <SEOHead
        title="Health & Wellness Blog – Expert Articles & Tips 2026 | Healthy Vibes Hub"
        description="Browse 250+ expert-written articles on health tips, natural remedies, nutrition, fitness, mental health, and wellness guides. Updated regularly in 2026."
        canonical={`${SITE_URL}/blog`}
        structuredData={structuredData}
      />

      {/* Page Header */}
      <div className="bg-hero-gradient py-12 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm font-body text-gray-500">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-900 font-medium">Blog</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-gray-900 text-4xl md:text-5xl mb-3">Health & Wellness Blog</h1>
          <p className="text-gray-600 font-body text-lg max-w-2xl">
            Expert-written articles on health tips, natural remedies, nutrition, and wellness — reviewed by certified health professionals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={searchQ}
              onChange={e => setSearchQ(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2.5 rounded-full border border-gray-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Search blog articles"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`badge text-sm py-1.5 px-4 transition-all ${activeCategory === 'all' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-primary-50'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`badge text-sm py-1.5 px-4 transition-all ${activeCategory === cat.slug ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-primary-50'}`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Ad slot */}
        <div className="ad-slot mb-8" aria-label="Advertisement">Ad Space — 728×90</div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="font-display font-bold text-gray-900 text-xl mb-2">No articles found</p>
            <p className="text-gray-500 font-body">Try a different search term or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {/* Pagination placeholder */}
        {filtered.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {[1, 2, 3, '…', 12].map((p, i) => (
              <button
                key={i}
                className={`w-10 h-10 rounded-full text-sm font-body font-medium transition-all ${p === 1 ? 'bg-primary-500 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300 hover:text-primary-600'}`}
                aria-label={`Page ${p}`}
                aria-current={p === 1 ? 'page' : undefined}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>

      <NewsletterSection />
    </>
  )
}
