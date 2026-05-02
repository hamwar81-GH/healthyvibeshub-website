import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { SITE_URL, breadcrumbSchema } from '../seo/meta'

const guidelines = [
  {
    title: 'Accuracy & Fact-Checking',
    icon: '✅',
    content: 'All health claims must be supported by peer-reviewed research, meta-analyses, or official guidelines from recognized health organizations (WHO, CDC, NIH, AHA). Sources must be published within the last 5 years unless citing foundational research. All statistics and data points require direct citation.',
  },
  {
    title: 'Expert Authorship & Review',
    icon: '👩‍⚕️',
    content: 'Every article is either written by or reviewed by a credentialed health professional — including board-certified physicians, registered dietitians, licensed therapists, or public health researchers. Anonymous health content is never published. All author credentials are verified by our editorial director.',
  },
  {
    title: 'No Medical Advice',
    icon: '⚕️',
    content: 'Healthy Vibes Hub provides health information and education — not medical advice. All content includes appropriate medical disclaimers. We never recommend specific medications, diagnose conditions, or suggest abandoning professional medical care. Readers are always encouraged to consult their healthcare provider.',
  },
  {
    title: 'Conflicts of Interest',
    icon: '🔒',
    content: 'Authors must disclose any financial relationships with brands, products, or organizations referenced in their content. Sponsored content is clearly labeled. We do not allow paid placement to influence editorial decisions. All product mentions reflect genuine editorial assessment.',
  },
  {
    title: 'Content Updates',
    icon: '🔄',
    content: 'Published articles are reviewed every 12 months and updated to reflect current research and medical guidelines. Major content revisions include a "Last Updated" date. Articles that can no longer be verified for accuracy are either updated or removed.',
  },
  {
    title: 'Inclusive, Accessible Language',
    icon: '🌍',
    content: 'Content is written at a reading level accessible to general audiences (Grade 8 or below) without sacrificing accuracy. We avoid jargon, explain technical terms, and write content that is inclusive across ages, backgrounds, and health literacy levels.',
  },
  {
    title: 'Image & Representation Standards',
    icon: '🖼️',
    content: 'Images selected for articles must represent diversity in age, ethnicity, body type, and ability. All images are sourced ethically from licensed libraries. Alt text is required for all images to ensure accessibility for screen readers.',
  },
  {
    title: 'Editorial Independence',
    icon: '📰',
    content: 'The Healthy Vibes Hub editorial team operates independently from our advertising and business development teams. Advertiser relationships have zero influence on content creation, article selection, or editorial opinion. Our content exists to serve readers, not advertisers.',
  },
]

export default function EditorialGuidelinesPage() {
  return (
    <>
      <SEOHead
        title="Editorial Guidelines – How We Create Trustworthy Health Content | Healthy Vibes Hub"
        description="Learn about Healthy Vibes Hub's rigorous editorial standards — how we research, write, review, and update health content to ensure accuracy, transparency, and trustworthiness."
        canonical={`${SITE_URL}/editorial-guidelines`}
        structuredData={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Editorial Guidelines', path: '/editorial-guidelines' }])]}
      />

      <div className="bg-hero-gradient py-12 border-b border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-4 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-body text-gray-500">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-900 font-medium">Editorial Guidelines</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-gray-900 text-4xl md:text-5xl mb-3">Our Editorial Guidelines</h1>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            Healthy Vibes Hub is committed to publishing health content that meets the highest standards of accuracy, expertise, and transparency. Here's exactly how we do it.
          </p>
          <p className="text-sm text-gray-400 font-body mt-3">Last updated: May 1, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* EEAT Statement */}
        <div className="bg-gradient-to-br from-primary-50 to-emerald-50 rounded-2xl p-7 mb-12">
          <h2 className="font-display font-bold text-gray-900 text-xl mb-3">Our Commitment to EEAT</h2>
          <p className="text-gray-600 font-body leading-relaxed">
            We align our content standards with Google's EEAT framework — <strong>Experience, Expertise, Authoritativeness, and Trustworthiness</strong>. Every article on our platform demonstrates real-world health expertise, is authored or reviewed by credentialed professionals, references authoritative sources, and maintains the transparency necessary to earn and keep reader trust.
          </p>
        </div>

        {/* Guidelines */}
        <div className="space-y-6">
          {guidelines.map((g, i) => (
            <div key={i} className="card p-6">
              <div className="flex gap-4">
                <span className="text-3xl flex-shrink-0 mt-0.5">{g.icon}</span>
                <div>
                  <h2 className="font-display font-bold text-gray-900 text-lg mb-2">{g.title}</h2>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">{g.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Process */}
        <div className="mt-12 card p-8">
          <h2 className="font-display font-bold text-gray-900 text-2xl mb-5">Our Content Review Process</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Pitch & Assignment', desc: 'Topic is proposed based on reader need, search demand, and health relevance. Only topics with genuine wellness value are approved.' },
              { step: '2', title: 'Research & Writing', desc: 'A qualified author researches the topic using peer-reviewed sources, then writes a draft following our style and medical accuracy standards.' },
              { step: '3', title: 'Medical Review', desc: 'A credentialed reviewer (different from the author) fact-checks all claims, verifies sources, and ensures medical accuracy before approval.' },
              { step: '4', title: 'Editorial Polish', desc: 'Our editor checks structure, clarity, readability, and SEO integrity. Sensitive health topics receive an additional sensitivity review.' },
              { step: '5', title: 'Publication & Monitoring', desc: 'Published articles are monitored for reader feedback and flagged for annual review. Out-of-date content is updated or retired.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold font-body flex-shrink-0">{item.step}</div>
                <div>
                  <p className="font-display font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500 font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 font-body mb-4">Have questions about our editorial process or want to write for us?</p>
          <Link href="/contact" className="btn-primary">Contact Our Editorial Team</Link>
        </div>
      </div>
    </>
  )
}
