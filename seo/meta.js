export const SITE_NAME = 'Healthy Vibes Hub'
export const SITE_URL = 'https://healthyvibeshub.com'
export const SITE_DESCRIPTION = 'Your trusted source for health tips, daily routines, natural remedies, and wellness guides — for all ages. Evidence-based content from certified health experts.'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`
export const TWITTER_HANDLE = '@healthyvibeshub'

export function generateMeta({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
  article = null,
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const resolvedCanonical = canonical || SITE_URL
  const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE

  return {
    title: fullTitle,
    description,
    canonical: resolvedCanonical,
    openGraph: {
      title: fullTitle,
      description,
      url: resolvedCanonical,
      siteName: SITE_NAME,
      images: [{ url: resolvedOgImage, width: 1200, height: 630, alt: fullTitle }],
      type: ogType,
      locale: 'en_US',
      ...(article && {
        article: {
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime,
          authors: article.authors,
          tags: article.tags,
        },
      }),
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: fullTitle,
      description,
      images: [resolvedOgImage],
    },
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: resolvedCanonical,
    },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: SITE_DESCRIPTION,
    email: 'hello@healthyvibeshub.com',
    sameAs: [
      'https://www.youtube.com/@healthyvibeshub',
      'https://www.instagram.com/healthyvibeshub',
      'https://www.pinterest.com/healthyvibeshub',
      'https://www.tiktok.com/@healthyvibeshub',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'hello@healthyvibeshub.com',
      availableLanguage: 'English',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function articleSchema({ article, author }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: author?.name || 'Healthy Vibes Hub Editorial Team',
      jobTitle: author?.role,
      url: `${SITE_URL}/authors/${article.authorSlug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`,
    },
    keywords: article.tags?.join(', '),
  }
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  }
}
