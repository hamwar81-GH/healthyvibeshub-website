import { articles, categories } from '../../data/blog'
import { authors } from '../../data/blog'

const SITE_URL = 'https://healthyvibeshub.com'

function generateSitemap() {
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/blog', priority: '0.9', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/authors', priority: '0.8', changefreq: 'monthly' },
    { url: '/newsletter', priority: '0.7', changefreq: 'monthly' },
    { url: '/editorial-guidelines', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms-of-use', priority: '0.5', changefreq: 'yearly' },
    { url: '/cookies-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
    { url: '/sitemap', priority: '0.4', changefreq: 'monthly' },
  ]

  const categoryPages = categories.map(cat => ({
    url: `/category/${cat.slug}`,
    priority: '0.8',
    changefreq: 'weekly',
  }))

  const articlePages = articles.map(article => ({
    url: `/blog/${article.slug}`,
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: article.date,
    image: article.image,
    imageTitle: article.title,
  }))

  const authorPages = authors.map(author => ({
    url: `/authors/${author.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }))

  const allPages = [...staticPages, ...categoryPages, ...articlePages, ...authorPages]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : `<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>`}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.image ? `<image:image>
      <image:loc>${page.image}</image:loc>
      <image:title>${page.imageTitle?.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</image:title>
    </image:image>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`
}

export default function Sitemap(req, res) {
  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(generateSitemap())
  res.end()
}
