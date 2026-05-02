import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { categories } from '../data/blog'

export default function Custom404() {
  return (
    <>
      <SEOHead title="Page Not Found – 404 | Healthy Vibes Hub" description="The page you're looking for doesn't exist. Browse our health articles, wellness guides, and natural remedies." noIndex={true} />

      <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="text-8xl mb-6 animate-float inline-block">🌿</div>
          <h1 className="font-display font-bold text-gray-900 text-5xl mb-3">404</h1>
          <p className="font-display font-semibold text-gray-700 text-2xl mb-3">Page Not Found</p>
          <p className="text-gray-500 font-body mb-8">The page you're looking for has moved, been updated, or doesn't exist. Let's get you back on the path to great health!</p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <Link href="/" className="btn-primary">Go to Homepage</Link>
            <Link href="/blog" className="btn-outline">Browse Articles</Link>
          </div>
          <div>
            <p className="text-sm font-body text-gray-500 mb-3">Or explore a health category:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(0, 5).map(cat => (
                <Link key={cat.slug} href={`/category/${cat.slug}`}
                  className="badge bg-white border border-gray-200 text-gray-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-all text-sm">
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
