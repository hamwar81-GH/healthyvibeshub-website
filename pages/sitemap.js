import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { articles, categories } from '../data/blog'
import { SITE_URL, breadcrumbSchema } from '../seo/meta'

export default function SitemapPage() {
  return (
    <>
      <SEOHead
        title="HTML Sitemap – All Pages & Articles | Healthy Vibes Hub"
        description="Browse the complete sitemap of Healthy Vibes Hub — all categories, articles, and pages in one place for easy navigation."
        canonical={`${SITE_URL}/sitemap`}
        structuredData={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Sitemap', path: '/sitemap' }])]}
      />

      <div className="bg-hero-gradient py-10 border-b border-green-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-gray-900 text-4xl mb-2">HTML Sitemap</h1>
          <p className="text-gray-600 font-body">All pages and articles on Healthy Vibes Hub — organized for easy navigation.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Main Pages */}
          <div>
            <h2 className="font-display font-bold text-gray-900 text-lg mb-3 pb-2 border-b border-gray-100">Main Pages</h2>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Team', href: '/authors' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Search', href: '/search' },
                { label: 'Newsletter', href: '/newsletter' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-primary-600 hover:underline">→ {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-display font-bold text-gray-900 text-lg mb-3 pb-2 border-b border-gray-100">Health Categories</h2>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-sm font-body text-primary-600 hover:underline">
                    → {cat.icon} {cat.name} ({cat.count})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="font-display font-bold text-gray-900 text-lg mb-3 pb-2 border-b border-gray-100">Legal & Policy</h2>
            <ul className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Use', href: '/terms-of-use' },
                { label: 'Cookies Policy', href: '/cookies-policy' },
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
                { label: 'XML Sitemap', href: '/sitemap.xml' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-primary-600 hover:underline">→ {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Authors */}
          <div>
            <h2 className="font-display font-bold text-gray-900 text-lg mb-3 pb-2 border-b border-gray-100">Our Authors</h2>
            <ul className="space-y-2">
              {['Dr. Sarah Mitchell', 'Emma Hartwell', 'Dr. James Chen'].map((name, i) => {
                const slugs = ['dr-sarah-mitchell', 'emma-hartwell', 'dr-james-chen']
                return (
                  <li key={name}>
                    <Link href={`/authors/${slugs[i]}`} className="text-sm font-body text-primary-600 hover:underline">→ {name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Articles */}
          <div className="md:col-span-2">
            <h2 className="font-display font-bold text-gray-900 text-lg mb-3 pb-2 border-b border-gray-100">Latest Articles</h2>
            <ul className="space-y-2 columns-1 sm:columns-2">
              {articles.map(article => (
                <li key={article.slug} className="break-inside-avoid">
                  <Link href={`/blog/${article.slug}`} className="text-sm font-body text-primary-600 hover:underline line-clamp-1">
                    → {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
