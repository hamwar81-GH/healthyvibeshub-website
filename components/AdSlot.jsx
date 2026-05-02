import { useEffect } from 'react'

/**
 * AdSlot component — shows a placeholder in dev, renders AdSense in production.
 *
 * Usage:
 *   <AdSlot slot="1234567890" format="horizontal" />
 *   <AdSlot slot="0987654321" format="rectangle" />
 *
 * Formats:
 *   horizontal  → 728×90  (leaderboard)
 *   rectangle   → 300×250 (medium rectangle)
 *   vertical    → 160×600 (wide skyscraper)
 *   auto        → responsive
 */

const FORMAT_CLASSES = {
  horizontal: 'min-h-[90px] w-full',
  rectangle:  'min-h-[250px] w-[300px]',
  vertical:   'min-h-[600px] w-[160px]',
  auto:       'min-h-[90px] w-full',
}

const FORMAT_LABELS = {
  horizontal: 'Ad Space — 728×90',
  rectangle:  'Ad Space — 300×250',
  vertical:   'Ad Space — 160×600',
  auto:       'Ad Space — Responsive',
}

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID
const IS_PROD = process.env.NODE_ENV === 'production'

export default function AdSlot({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}) {
  useEffect(() => {
    if (IS_PROD && ADSENSE_ID && slot) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (e) {}
    }
  }, [slot])

  if (IS_PROD && ADSENSE_ID && slot) {
    return (
      <div className={`overflow-hidden text-center ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={ADSENSE_ID}
          data-ad-slot={slot}
          data-ad-format={responsive ? 'auto' : format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    )
  }

  // Development placeholder
  return (
    <div
      className={`ad-slot ${FORMAT_CLASSES[format] || FORMAT_CLASSES.auto} ${className}`}
      aria-label="Advertisement space"
      role="complementary"
    >
      <span className="text-xs text-gray-300">{FORMAT_LABELS[format] || 'Ad Space'}</span>
    </div>
  )
}
