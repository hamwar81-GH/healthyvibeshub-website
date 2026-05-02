import Link from 'next/link'
import Image from 'next/image'

export default function ArticleCard({ article, variant = 'default' }) {
  if (variant === 'horizontal') {
    return (
      <article className="card article-card flex gap-4 p-4">
        <div className="relative w-28 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover article-image"
            sizes="112px"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center gap-1.5 min-w-0">
          <span className="badge-green text-xs">{article.category}</span>
          <Link href={`/blog/${article.slug}`}>
            <h3 className="font-display font-semibold text-gray-900 text-sm leading-snug line-clamp-2 hover:text-primary-600 transition-colors">
              {article.title}
            </h3>
          </Link>
          <p className="text-xs text-gray-400 font-body">{article.readTime} · {article.author}</p>
        </div>
      </article>
    )
  }

  if (variant === 'featured') {
    return (
      <article className="card article-card group relative overflow-hidden h-96">
        <div className="relative w-full h-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover article-image"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="badge-green mb-2 inline-block">{article.category}</span>
          <Link href={`/blog/${article.slug}`}>
            <h2 className="font-display font-bold text-white text-xl md:text-2xl leading-tight mb-2 hover:text-primary-300 transition-colors line-clamp-2">
              {article.title}
            </h2>
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-300 font-body">
            <span>By {article.author}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
          </div>
        </div>
      </article>
    )
  }

  // Default card
  return (
    <article className="card article-card group flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover article-image"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="badge-green">{article.category}</span>
        </div>
        {article.trending && (
          <div className="absolute top-3 right-3">
            <span className="badge bg-orange-100 text-orange-700">🔥 Trending</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/blog/${article.slug}`}>
          <h3 className="font-display font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3 font-body mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs font-bold">
              {article.author.charAt(0)}
            </div>
            <span className="text-xs text-gray-500 font-body">{article.author}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-body">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.readTime}
          </div>
        </div>
      </div>
    </article>
  )
}
