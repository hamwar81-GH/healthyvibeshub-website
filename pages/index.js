import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SEOHead from '../components/SEOHead'
import ArticleCard from '../components/ArticleCard'
import NewsletterSection from '../components/NewsletterSection'
import { articles, categories, dailyTip, faqs } from '../data/blog'
import { organizationSchema, websiteSchema, faqSchema, SITE_URL } from '../seo/meta'

export default function HomePage() {
  const featuredArticles = articles.filter(a => a.featured)
  const trendingArticles = articles.filter(a => a.trending)
  const latestArticles = articles.slice(0, 6)

  const structuredData = [
    organizationSchema(),
    websiteSchema(),
    faqSchema(faqs),
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: 'Healthy Vibes Hub Navigation',
      hasPart: categories.map(c => ({
        '@type': 'SiteNavigationElement',
        name: c.name,
        url: `${SITE_URL}/category/${c.slug}`,
      })),
    },
  ]

  return (
    <>
      <SEOHead
        title="Healthy Vibes Hub – Health Tips, Wellness Guides & Natural Remedies 2026"
        description="Discover science-backed health tips, natural remedies, daily routines, and wellness guides for all ages. Trusted by 50,000+ readers. Updated for 2026."
        canonical={SITE_URL}
        structuredData={structuredData}
      />

      {/* ─── HERO ─── */}
      <section className="relative bg-hero-gradient overflow-hidden py-16 md:py-24" aria-label="Hero">
        {/* Decorative leaves */}
        <div className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="w-full h-full bg-primary-300 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-56 h-56 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="w-full h-full bg-emerald-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 font-body">
                <span className="animate-pulse-slow">🌿</span>
                Your Trusted Wellness Destination Since 2022
              </div>
              <h1 className="font-display font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-5">
                Live Healthier,{' '}
                <span className="text-primary-500 relative">
                  Feel Vibrant
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                    <path d="M2 6C50 2 100 2 198 6" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                {' '}Every Day
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 font-body max-w-lg">
                Science-backed health tips, natural remedies, and wellness guides — crafted by certified health experts for every age, from kids to seniors.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog" className="btn-primary text-base py-3.5 px-7">
                  Explore Articles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/category/natural-remedies" className="btn-outline text-base py-3.5 px-7">
                  Natural Remedies 🌿
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: '✅', label: 'Medically Reviewed' },
                  { icon: '👩‍⚕️', label: '3 Expert Authors' },
                  { icon: '📚', label: '250+ Articles' },
                  { icon: '🌍', label: '50K+ Monthly Readers' },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-1.5 text-sm text-gray-600 font-body">
                    <span>{b.icon}</span>
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Featured Card Stack */}
            <div className="hidden lg:block animate-fade-up animate-delay-200">
              <div className="relative">
                {/* Main card */}
                <div className="card overflow-hidden">
                  <div className="relative h-72">
                    <Image
                      src={featuredArticles[0].image}
                      alt={featuredArticles[0].title}
                      fill
                      className="object-cover"
                      priority
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="badge-green mb-2 inline-block">{featuredArticles[0].category}</span>
                      <Link href={`/blog/${featuredArticles[0].slug}`}>
                        <h2 className="font-display font-bold text-white text-xl leading-snug hover:text-primary-300 transition-colors">
                          {featuredArticles[0].title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-body">By {featuredArticles[0].author}</span>
                    <span className="text-sm text-gray-400 font-body">{featuredArticles[0].readTime}</span>
                  </div>
                </div>
                {/* Floating stat badge */}
                <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-card-hover px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">🔥</div>
                  <div>
                    <p className="font-display font-bold text-gray-900 text-base">Trending Now</p>
                    <p className="text-xs text-gray-500 font-body">5 new articles this week</p>
                  </div>
                </div>
                {/* Floating tip */}
                <div className="absolute -top-4 -right-4 bg-primary-500 text-white rounded-2xl shadow-glow px-4 py-3 max-w-[180px]">
                  <p className="text-xs font-semibold font-body">💡 Daily Tip</p>
                  <p className="text-xs mt-0.5 font-body opacity-90 leading-snug">Drink warm lemon water each morning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DAILY TIP BANNER ─── */}
      <section className="bg-primary-500 py-4" aria-label="Daily health tip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge bg-white text-primary-700 flex-shrink-0">💡 Today's Tip</span>
            <p className="text-white text-sm font-body flex-1">{dailyTip.tip}</p>
            <span className="text-primary-200 text-xs font-body flex-shrink-0">— {dailyTip.source}</span>
          </div>
        </div>
      </section>

      {/* ─── FEATURED ARTICLES ─── */}
      <section className="py-16 bg-white" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="badge-green mb-2 inline-block">Editor's Picks</span>
              <h2 id="featured-heading" className="section-title">Featured Articles</h2>
            </div>
            <Link href="/blog" className="text-primary-600 text-sm font-semibold hover:underline font-body hidden sm:block">
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, i) => (
              <div key={article.id} className={`animate-fade-up animate-delay-${(i + 1) * 100}`}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>

          {/* Ad slot */}
          <div className="ad-slot mt-10" aria-label="Advertisement space">
            <span>Ad Space — 728×90</span>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES GRID ─── */}
      <section className="py-16 bg-gray-50" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge-green mb-2 inline-block">Browse Topics</span>
            <h2 id="categories-heading" className="section-title">Explore Health Categories</h2>
            <p className="section-subtitle">Find expert guidance on the topics that matter most to your wellness journey.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`rounded-2xl p-5 flex flex-col items-center text-center gap-2 border border-transparent hover:border-primary-200 hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${cat.color.split(' ')[0]} animate-fade-up`}
                style={{ animationDelay: `${i * 60}ms` }}
                aria-label={`Browse ${cat.name} — ${cat.count} articles`}
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="font-display font-semibold text-gray-900 text-sm leading-snug">{cat.name}</span>
                <span className="text-xs text-gray-500 font-body">{cat.count} articles</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRENDING + LATEST SPLIT ─── */}
      <section className="py-16 bg-white" aria-labelledby="trending-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Trending */}
            <div className="lg:col-span-2">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="badge bg-orange-100 text-orange-700 mb-2 inline-block">🔥 Hot Right Now</span>
                  <h2 id="trending-heading" className="section-title text-2xl">Trending Posts</h2>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {trendingArticles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6" aria-label="Sidebar">
              {/* Quick Links */}
              <div className="bg-primary-50 rounded-2xl p-5">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-4">Quick Navigation</h3>
                <nav aria-label="Quick topic links">
                  <ul className="space-y-2">
                    {categories.slice(0, 6).map(cat => (
                      <li key={cat.slug}>
                        <Link href={`/category/${cat.slug}`} className="flex items-center justify-between text-sm font-body text-gray-700 hover:text-primary-600 transition-colors py-1">
                          <span>{cat.icon} {cat.name}</span>
                          <span className="text-xs text-gray-400">{cat.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Ad slot */}
              <div className="ad-slot h-64 flex-col gap-2" aria-label="Advertisement">
                <span className="text-2xl">📢</span>
                <span>Ad Space — 300×250</span>
              </div>

              {/* Newsletter mini */}
              <NewsletterSection compact />
            </aside>
          </div>
        </div>
      </section>

      {/* ─── LATEST ARTICLES FEED ─── */}
      <section className="py-16 bg-gray-50" aria-labelledby="latest-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="badge-green mb-2 inline-block">Fresh Content</span>
              <h2 id="latest-heading" className="section-title">Latest Articles</h2>
              <p className="section-subtitle">New wellness insights published multiple times per week.</p>
            </div>
            <Link href="/blog" className="text-primary-600 text-sm font-semibold hover:underline font-body hidden sm:block">
              See All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {latestArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Ad slot */}
          <div className="ad-slot" aria-label="Advertisement space">
            <span>Ad Space — 970×90</span>
          </div>

          <div className="text-center mt-8">
            <Link href="/blog" className="btn-outline">
              Load More Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <NewsletterSection />

      {/* ─── TRUST / EEAT SECTION ─── */}
      <section className="py-16 bg-white" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-2 inline-block">Why Trust Us</span>
            <h2 id="trust-heading" className="section-title">Built on Expertise, Experience & Care</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Every article on Healthy Vibes Hub is researched, written, and reviewed by certified health professionals — so you get information you can truly rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '🩺',
                title: 'Medically Reviewed',
                desc: 'All content is reviewed by board-certified physicians and registered dietitians before publication.',
              },
              {
                icon: '📖',
                title: 'Evidence-Based',
                desc: 'We cite peer-reviewed research and trusted health organizations like WHO, CDC, and NIH.',
              },
              {
                icon: '🔄',
                title: 'Regularly Updated',
                desc: 'Articles are revisited and updated to reflect the latest 2026 medical guidelines and research.',
              },
            ].map(item => (
              <div key={item.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Expert Team Preview */}
          <div className="bg-gradient-to-br from-primary-50 to-emerald-50 rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex -space-x-3">
                {['https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&q=80',
                  'https://images.unsplash.com/photo-1494790108755-2616b612b4e4?w=80&q=80',
                  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&q=80'].map((src, i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-2 border-white overflow-hidden relative flex-shrink-0">
                    <Image src={src} alt={`Expert author ${i + 1}`} fill className="object-cover" sizes="56px" />
                  </div>
                ))}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display font-bold text-gray-900 text-xl mb-1">Meet Our Expert Team</h3>
                <p className="text-gray-600 font-body text-sm">3 certified health professionals with 40+ combined years of experience in medicine, nutrition, and public health.</p>
              </div>
              <Link href="/authors" className="btn-primary flex-shrink-0">
                Meet the Team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge-green mb-2 inline-block">Got Questions?</span>
            <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card">
      <button
        className="w-full text-left p-5 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-gray-900 text-base leading-snug">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-gray-600 text-sm font-body leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  )
}
