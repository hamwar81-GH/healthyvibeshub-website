import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { SITE_URL, breadcrumbSchema } from '../seo/meta'

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy – How Healthy Vibes Hub Protects Your Data 2026"
        description="Read Healthy Vibes Hub's Privacy Policy to understand how we collect, use, and protect your personal information when you visit our health and wellness website."
        canonical={`${SITE_URL}/privacy-policy`}
        structuredData={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }])]}
      />

      <div className="bg-hero-gradient py-10 border-b border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-gray-900 text-4xl mb-2">Privacy Policy</h1>
          <p className="text-gray-500 font-body">Last updated: May 1, 2026 · Effective: May 1, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 mb-10 font-body text-sm text-gray-700">
          <strong className="text-primary-700">Summary:</strong> Healthy Vibes Hub (healthyvibeshub.com) collects minimal data necessary to operate our website and newsletter. We do not sell your personal information. We use Google Analytics and may display Google AdSense advertisements. You can opt out at any time.
        </div>

        <div className="prose-custom space-y-8">
          <section>
            <h2>1. Who We Are</h2>
            <p>Healthy Vibes Hub ("we," "our," "us") operates the website at healthyvibeshub.com. Our contact details: <a href="mailto:hello@healthyvibeshub.com" className="text-primary-600 hover:underline">hello@healthyvibeshub.com</a>, 350 5th Ave, New York, NY 10118, USA.</p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p><strong>Information you provide:</strong> When you subscribe to our newsletter or contact us, we collect your name and email address. When you use our contact form, we collect your message content.</p>
            <p><strong>Automatically collected data:</strong> Our servers and analytics tools collect IP addresses, browser type, device information, pages visited, and time spent on pages. This data is used to improve site performance and user experience.</p>
            <p><strong>Cookies:</strong> We use cookies for analytics (Google Analytics), advertising (Google AdSense), and site functionality. See our <Link href="/cookies-policy" className="text-primary-600 hover:underline">Cookies Policy</Link> for details.</p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To send you our newsletter (only with your explicit consent)</li>
              <li>To respond to your contact form submissions</li>
              <li>To analyze site traffic and improve our content (via Google Analytics)</li>
              <li>To display relevant advertisements (via Google AdSense)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Google Analytics & Advertising</h2>
            <p>We use Google Analytics 4 to understand how visitors use our site. Google Analytics collects data anonymously. We have enabled IP anonymization. You can opt out via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Analytics opt-out browser add-on</a>.</p>
            <p>We display advertisements through Google AdSense. Google may use cookies to serve ads based on your prior visits to our site or other sites. You can opt out of personalized advertising at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Ad Settings</a>.</p>
          </section>

          <section>
            <h2>5. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information. We share data only with:</p>
            <ul>
              <li>Google (Analytics and AdSense) — subject to Google's Privacy Policy</li>
              <li>Our email service provider (for newsletter delivery)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>Newsletter subscriber data is retained until you unsubscribe. Contact form submissions are retained for up to 24 months. Analytics data is retained for 14 months.</p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to: access the personal data we hold about you, request correction or deletion, object to processing, and withdraw consent at any time. To exercise these rights, email <a href="mailto:hello@healthyvibeshub.com" className="text-primary-600 hover:underline">hello@healthyvibeshub.com</a>.</p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children. If we become aware that a child has provided personal information, we will delete it promptly.</p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Significant changes will be communicated via a notice on our website. Continued use of our site after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>For privacy-related questions, contact: <a href="mailto:hello@healthyvibeshub.com" className="text-primary-600 hover:underline">hello@healthyvibeshub.com</a></p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-sm font-body">
          <Link href="/terms-of-use" className="text-primary-600 hover:underline">Terms of Use</Link>
          <span className="text-gray-300">·</span>
          <Link href="/cookies-policy" className="text-primary-600 hover:underline">Cookies Policy</Link>
          <span className="text-gray-300">·</span>
          <Link href="/contact" className="text-primary-600 hover:underline">Contact Us</Link>
        </div>
      </div>
    </>
  )
}
