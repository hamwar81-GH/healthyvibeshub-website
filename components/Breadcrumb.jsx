import Link from 'next/link'

/**
 * Breadcrumb component
 * @param {Array} crumbs - [{name: string, href: string}]
 * @param {string} className
 */
export default function Breadcrumb({ crumbs = [], className = '' }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-sm font-body text-gray-500 flex-wrap ${className}`}
    >
      <ol className="flex items-center gap-1.5 flex-wrap">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1
          return (
            <li key={i} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="text-gray-800 font-medium truncate max-w-[200px]" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-primary-600 transition-colors truncate max-w-[120px]"
                >
                  {crumb.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-gray-300 select-none">›</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
