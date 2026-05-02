import Link from 'next/link'
import SEOHead from '../../components/SEOHead'
import ArticleCard from '../../components/ArticleCard'
import NewsletterSection from '../../components/NewsletterSection'
import { articles, categories } from '../../data/blog'
import { SITE_URL, breadcrumbSchema } from '../../seo/meta'

export default function CategoryPage({ category, categoryArticles }) {
  if (!category) return <div className="py-20 text-center font-body">Category not found.</div>

  return (
    <>
      <SEOHead
        title={`${category.name} – Expert Articles & Tips 2026 | Healthy Vibes Hub`}
        description={`Browse ${category.count}+ expert articles on ${category.name.toLowerCase()} — written and reviewed by certified health professionals. Updated for 2026.`}
        canonical={`${SITE_URL}/category/${category.slug}`}
        structuredData={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: category.name, path: `/category/${category.slug}` },
        ])]}
      />

      <div className="bg-hero-gradient py-12 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm font-body text-gray-500">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/blog" className="hover:text-primary-600">Blog</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-900 font-medium">{category.name}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-4">
            <div className="text-5xl">{category.icon}</div>
            <div>
              <h1 className="font-display font-bold text-gray-900 text-4xl md:text-5xl">{category.name}</h1>
              <p className="text-gray-600 font-body mt-1">{category.count} expert articles · Medically reviewed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categoryArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 font-body">No articles in this category yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {/* Other categories */}
        <div className="mt-14">
          <h2 className="font-display font-bold text-gray-900 text-2xl mb-5">Explore Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.filter(c => c.slug !== category.slug).map(cat => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-body text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-all">
                <span>{cat.icon}</span>{cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <NewsletterSection />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: categories.map(c => ({ params: { slug: c.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = categories.find(c => c.slug === params.slug) || null
  const categoryArticles = category ? articles.filter(a => a.categorySlug === category.slug) : []
  return { props: { category, categoryArticles } }
}
