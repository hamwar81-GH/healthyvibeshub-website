# 🌿 Healthy Vibes Hub

> **Premium, SEO-Optimized, EEAT-Compliant Health & Wellness Website**  
> Built with Next.js 14 · Tailwind CSS · Deployed on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/healthyvibeshub)

---

## 🚀 Live Demo

**URL:** [https://healthyvibeshub.com](https://healthyvibeshub.com)

---

## 📋 Features

### 🎨 UI / Design
- Premium health-focused design with `#22c55e` primary palette
- Fully responsive — mobile-first
- Smooth hover animations & micro-interactions
- Card-based layout with soft shadows & rounded corners
- Inter / DM Sans + Playfair Display typography
- Sticky navbar with search, mobile menu
- Back-to-top button
- Ad-slot placeholders ready for Google AdSense

### 📄 Pages
| Page | Route |
|------|-------|
| Homepage | `/` |
| Blog Listing | `/blog` |
| Single Article | `/blog/[slug]` |
| Category | `/category/[slug]` |
| Search | `/search` |
| About Us | `/about` |
| Contact Us | `/contact` |
| Authors / Team | `/authors` |
| Author Profile | `/authors/[slug]` |
| Newsletter | `/newsletter` |
| Editorial Guidelines | `/editorial-guidelines` |
| Privacy Policy | `/privacy-policy` |
| Terms of Use | `/terms-of-use` |
| Cookies Policy | `/cookies-policy` |
| Disclaimer | `/disclaimer` |
| HTML Sitemap | `/sitemap` |
| XML Sitemap | `/sitemap.xml` |
| RSS Feed | `/rss.xml` |
| 404 | `/404` |

### 🔍 SEO System
- ✅ Unique title + meta description per page (50–60 / 150–155 chars)
- ✅ Canonical tags on every page
- ✅ Open Graph + Twitter Card meta tags
- ✅ JSON-LD Structured Data: Organization, WebSite, Article, FAQ, Breadcrumb, Person
- ✅ Dynamic XML Sitemap with image sitemaps
- ✅ RSS Feed
- ✅ robots.txt with sitemap reference
- ✅ Single H1 per page — no duplicate H1s
- ✅ ALT text on all images
- ✅ Internal linking — no orphan pages
- ✅ Breadcrumb navigation
- ✅ HTTPS-enforced via Vercel headers

### 🧠 EEAT Compliance
- ✅ About Us page with team story & trust statement
- ✅ Authors page with credentials (MD, RDN, PhD)
- ✅ Individual author profiles with schema markup
- ✅ Editorial Guidelines page
- ✅ Medical disclaimer on all articles
- ✅ Privacy Policy, Terms of Use, Cookies Policy
- ✅ Contact details in footer + Contact page
- ✅ Social media links (YouTube, Instagram, Pinterest, TikTok)
- ✅ DMCA badge reference in footer

### ⚡ Performance
- Next.js Image component with lazy loading + WebP
- Font display swap via Google Fonts
- Static generation (SSG) for all article/category pages
- Cache-Control headers for static assets
- Vercel edge deployment configuration
- CLS-optimized layouts (no layout shift)

---

## 🏗️ Project Structure

```
healthyvibeshub/
├── components/
│   ├── ArticleCard.jsx      # Article card (3 variants)
│   ├── Footer.jsx           # Site footer with social links
│   ├── Layout.jsx           # Page wrapper + back-to-top
│   ├── Navbar.jsx           # Sticky nav + search + mobile menu
│   ├── NewsletterSection.jsx # Full & compact newsletter CTA
│   └── SEOHead.jsx          # Meta tags + structured data
│
├── data/
│   └── blog.js              # Articles, categories, authors, FAQs
│
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js             # Homepage
│   ├── about.js
│   ├── contact.js
│   ├── disclaimer.js
│   ├── editorial-guidelines.js
│   ├── newsletter.js
│   ├── privacy-policy.js
│   ├── search.js
│   ├── sitemap.js           # HTML sitemap
│   ├── sitemap.xml.js       # Dynamic XML sitemap
│   ├── rss.xml.js           # RSS feed
│   ├── terms-of-use.js
│   ├── cookies-policy.js
│   ├── 404.js
│   ├── authors/
│   │   ├── index.js         # Team page
│   │   └── [slug].js        # Author profile
│   ├── blog/
│   │   ├── index.js         # Blog listing
│   │   └── [slug].js        # Single article
│   └── category/
│       └── [slug].js        # Category archive
│
├── public/
│   ├── robots.txt
│   ├── site.webmanifest
│   └── images/
│       ├── logo.svg
│       └── og-default.svg
│
├── seo/
│   └── meta.js              # SEO utilities & schema generators
│
├── styles/
│   └── globals.css          # Tailwind + custom design system
│
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vercel.json
```

---

## ⚙️ Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/healthyvibeshub.git
cd healthyvibeshub
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
# Edit .env.local with your Google Analytics ID, AdSense ID, etc.
```

### 3. Run Development Server

```bash
npm run dev
# Open http://localhost:3000
```

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🚀 Deploy to Vercel

### Option A — One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/healthyvibeshub)

### Option B — CLI Deploy

```bash
npm i -g vercel
vercel --prod
```

### Option C — GitHub Integration

1. Push to GitHub
2. Import repo in [vercel.com/new](https://vercel.com/new)
3. Set environment variables in Vercel dashboard
4. Deploy — auto-deploys on every `git push`

---

## 💰 AdSense Integration

Ad slots are pre-built throughout the site. To activate:

1. Get approved at [Google AdSense](https://adsense.google.com)
2. Add your publisher ID to `.env.local`:
   ```
   NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXXX
   ```
3. Replace `.ad-slot` divs with your AdSense `<ins>` tags

Ad slot locations:
- Homepage: after featured articles, after latest articles
- Blog listing: top of page
- Single article: above content, below content
- Sidebar: 300×250 rectangle
- Category page: available

---

## 📊 Google Search Console Setup

1. Verify ownership via HTML tag in `SEOHead.jsx`
2. Submit sitemap: `https://healthyvibeshub.com/sitemap.xml`
3. Request indexing of homepage

---

## ✏️ Adding New Articles

Edit `data/blog.js` and add to the `articles` array:

```js
{
  id: 9,
  slug: 'your-article-slug',
  title: 'Your Article Title with Keyword 2026',
  excerpt: 'Compelling 155-character excerpt...',
  category: 'Health Tips',
  categorySlug: 'health-tips',
  author: 'Dr. Sarah Mitchell',
  authorSlug: 'dr-sarah-mitchell',
  date: '2026-05-01',
  readTime: '7 min read',
  image: 'https://images.unsplash.com/photo-xxx?w=800&q=80',
  tags: ['keyword1', 'keyword2'],
  featured: false,
  trending: false,
}
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework + SSG/SSR |
| Tailwind CSS 3 | Utility-first styling |
| Google Fonts | Playfair Display + DM Sans |
| Vercel | Hosting + CDN + CI/CD |
| Next/Image | Optimized images (WebP/AVIF) |

---

## 📄 License

© 2026 Healthy Vibes Hub. All rights reserved.

Content and code may not be reproduced without permission.

---

## 📬 Contact

**Email:** hello@healthyvibeshub.com  
**Website:** [healthyvibeshub.com](https://healthyvibeshub.com)  
**Twitter:** [@healthyvibeshub](https://twitter.com/healthyvibeshub)
