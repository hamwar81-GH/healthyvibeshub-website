import { articles } from '../data/blog'

const SITE_URL = 'https://healthyvibeshub.com'
const SITE_NAME = 'Healthy Vibes Hub'
const SITE_DESC =
  'Science-backed health tips, natural remedies, daily routines, and wellness guides for all ages.'

function generateRSS() {
  const items = articles
    .slice(0, 20)
    .map(
      article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${SITE_URL}/blog/${article.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <author>hello@healthyvibeshub.com (${article.author})</author>
      <category><![CDATA[${article.category}]]></category>
      ${article.image ? `<enclosure url="${article.image}" type="image/jpeg" length="0"/>` : ''}
    </item>`
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
>
  <channel>
    <title><![CDATA[${SITE_NAME}]]></title>
    <link>${SITE_URL}</link>
    <description><![CDATA[${SITE_DESC}]]></description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/images/logo.png</url>
      <title>${SITE_NAME}</title>
      <link>${SITE_URL}</link>
    </image>
    ${items}
  </channel>
</rss>`
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/rss+xml; charset=UTF-8')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=7200'
  )
  res.write(generateRSS())
  res.end()
  return { props: {} }
}

export default function RSS() {
  return null
}
