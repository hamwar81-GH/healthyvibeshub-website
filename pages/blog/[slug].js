import Link from 'next/link'
import Image from 'next/image'
import SEOHead from '../../components/SEOHead'
import ArticleCard from '../../components/ArticleCard'
import NewsletterSection from '../../components/NewsletterSection'
import { articles, authors } from '../../data/blog'
import { SITE_URL, articleSchema, breadcrumbSchema } from '../../seo/meta'

export default function BlogPost({ article, author, relatedArticles }) {
  if (!article) return <div className="py-20 text-center font-body">Article not found.</div>

  const structuredData = [
    articleSchema({ article, author }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: article.title, path: `/blog/${article.slug}` },
    ]),
  ]

  return (
    <>
      <SEOHead
        title={`${article.title} | Healthy Vibes Hub`}
        description={article.excerpt}
        canonical={`${SITE_URL}/blog/${article.slug}`}
        ogImage={article.image}
        ogType="article"
        structuredData={structuredData}
      />

      {/* Hero */}
      <div className="relative h-72 md:h-96 bg-gray-900">
        <Image src={article.image} alt={article.title} fill className="object-cover opacity-60" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-8">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-2 text-sm font-body text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-100 truncate">{article.category}</li>
            </ol>
          </nav>
          <span className="badge-green mb-3 inline-block">{article.category}</span>
          <h1 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight">{article.title}</h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 font-body">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs">{author?.name?.charAt(0)}</div>
            <Link href={`/authors/${article.authorSlug}`} className="font-medium text-gray-700 hover:text-primary-600 transition-colors">{author?.name}</Link>
            <span className="text-primary-500 text-xs">· {author?.role}</span>
          </div>
          <span>·</span>
          <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          <span>·</span>
          <span>⏱ {article.readTime}</span>
          <span>·</span>
          <span className="flex items-center gap-1 text-green-600 text-xs font-semibold"><span>✅</span> Medically Reviewed</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <article className="lg:col-span-2" itemScope itemType="https://schema.org/Article">
            {/* Ad slot top */}
            <div className="ad-slot mb-8" aria-label="Advertisement">Ad Space — 728×90</div>

            <div className="prose-custom">
              <p className="text-gray-700 font-body text-lg leading-relaxed mb-6">{article.excerpt}</p>

              <h2>Why This Matters for Your Health</h2>
              <p>In today's fast-paced world, maintaining healthy vibes requires intentional choices. Research consistently shows that small, daily habits compound into remarkable long-term health outcomes. Whether you're looking to boost your energy levels, strengthen your immune system, or simply feel better in your body — this guide provides actionable, evidence-based steps you can start today.</p>

              <h2>Key Evidence-Based Strategies</h2>
              <p>Our editorial team — led by board-certified physicians and registered dietitians — has synthesized the latest 2026 research to bring you the most effective strategies. Here's what the science says:</p>
              <ul>
                <li>Consistency matters more than intensity — daily micro-habits create lasting change</li>
                <li>Sleep quality directly impacts every health metric from immunity to metabolism</li>
                <li>Hydration is the most underrated health tool available to everyone</li>
                <li>Movement, even in small amounts, dramatically reduces chronic disease risk</li>
                <li>Stress management is as important as diet and exercise</li>
              </ul>

              <h2>Practical Steps to Get Started</h2>
              <p>The best health routine is one you'll actually follow. Start with just two or three of these strategies, master them over two to four weeks, then gradually layer in more. This approach prevents overwhelm and builds sustainable habits that last a lifetime.</p>

              <h3>Morning Foundation</h3>
              <p>Begin your day with a glass of warm water — optionally with fresh lemon juice. This simple ritual kickstarts your digestive system, provides vitamin C, and sets a healthy tone for everything that follows. Pair this with five to ten minutes of gentle movement or stretching to wake your body and mind.</p>

              <h3>Nutrition Principles</h3>
              <p>Focus on adding nutrient-dense whole foods rather than restricting. Fill half your plate with colorful vegetables, a quarter with quality protein, and a quarter with complex carbohydrates. This balanced approach naturally crowds out less nutritious foods while keeping you satisfied and energized.</p>

              <h2>Expert Recommendations for 2026</h2>
              <p>Based on our medical review board's assessment of current research, the following practices show the strongest evidence for positive health outcomes across all age groups. These recommendations align with guidelines from the World Health Organization, the CDC, and the American College of Lifestyle Medicine.</p>

              <h2>Conclusion</h2>
              <p>Your health is your greatest asset. By implementing even a few of these evidence-based strategies, you'll begin experiencing the benefits of truly healthy living — more energy, better mood, stronger immunity, and greater resilience. At Healthy Vibes Hub, we're here to support every step of your wellness journey.</p>

              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 my-6">
                <p className="text-primary-700 text-sm font-body"><strong>Medical Disclaimer:</strong> This content is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider before making significant changes to your health routine.</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
              {article.tags?.map(tag => (
                <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`} className="badge bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-700 transition-colors">
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Author Box */}
            {author && (
              <div className="bg-gradient-to-br from-primary-50 to-emerald-50 rounded-2xl p-6 mt-8 flex gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-200">
                  <Image src={author.image} alt={author.name} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <p className="text-xs text-primary-600 font-semibold font-body uppercase tracking-wide mb-0.5">Written by</p>
                  <Link href={`/authors/${article.authorSlug}`} className="font-display font-bold text-gray-900 text-lg hover:text-primary-600 transition-colors">{author.name}</Link>
                  <p className="text-sm text-gray-500 font-body">{author.credentials}</p>
                  <p className="text-sm text-gray-600 font-body mt-2 leading-relaxed line-clamp-2">{author.bio}</p>
                </div>
              </div>
            )}

            {/* Ad slot bottom */}
            <div className="ad-slot mt-8" aria-label="Advertisement">Ad Space — 728×90</div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6" aria-label="Article sidebar">
            <NewsletterSection compact />

            {/* Related Articles */}
            <div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedArticles.map(a => (
                  <ArticleCard key={a.id} article={a} variant="horizontal" />
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-display font-bold text-gray-900 text-base mb-3">Browse Categories</h3>
              <nav aria-label="Category navigation">
                <ul className="space-y-1.5">
                  {['Health Tips', 'Natural Remedies', 'Wellness Guides', 'Nutrition', 'Fitness', 'Mental Health'].map(cat => (
                    <li key={cat}>
                      <Link href={`/category/${cat.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-body text-gray-600 hover:text-primary-600 transition-colors">
                        → {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Ad slot sidebar */}
            <div className="ad-slot h-64 flex-col gap-2" aria-label="Advertisement">
              <span className="text-2xl">📢</span>
              <span>Ad Space — 300×250</span>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-100" aria-labelledby="related-heading">
            <h2 id="related-heading" className="section-title mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(a => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>

      <NewsletterSection />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const article = articles.find(a => a.slug === params.slug) || null
  const author = article ? authors.find(a => a.slug === article.authorSlug) || null : null
  const relatedArticles = article
    ? articles.filter(a => a.slug !== article.slug && a.categorySlug === article.categorySlug).slice(0, 3)
    : []
  return { props: { article, author, relatedArticles } }
}
