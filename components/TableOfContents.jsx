/**
 * TableOfContents component
 * @param {Array} headings - [{id: string, text: string, level: number}]
 */
export default function TableOfContents({ headings = [] }) {
  if (!headings.length) return null

  return (
    <nav
      aria-label="Table of contents"
      className="bg-primary-50 border border-primary-100 rounded-2xl p-5 mb-8"
    >
      <h3 className="font-display font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
        </svg>
        Table of Contents
      </h3>
      <ol className="space-y-1.5">
        {headings.map((h, i) => (
          <li
            key={i}
            style={{ paddingLeft: h.level === 3 ? '16px' : '0' }}
          >
            <a
              href={`#${h.id}`}
              className={`text-sm font-body text-gray-600 hover:text-primary-600 transition-colors ${
                h.level === 3 ? 'text-xs text-gray-500' : ''
              }`}
            >
              {h.level === 2 ? `${i + 1}. ` : '→ '}
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
