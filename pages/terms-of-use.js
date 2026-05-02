import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { SITE_URL, breadcrumbSchema } from '../seo/meta'

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Use – Healthy Vibes Hub Website Terms & Conditions 2026"
        description="Read Healthy Vibes Hub's Terms of Use. Understand the rules governing your use of our health and wellness website, content, and services."
        canonical={`${SITE_URL}/terms-of-use`}
        structuredData={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms of Use', path: '/terms-of-use' }])]}
      />

      <div className="bg-hero-gradient py-10 border-b border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-gray-900 text-4xl mb-2">Terms of Use</h1>
          <p className="text-gray-500 font-body">Last updated: May 1, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose-custom space-y-8">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using healthyvibeshub.com ("Site"), you agree to be bound by these Terms of Use. If you do not agree, please discontinue use of the Site immediately.</p>
          </section>
          <section>
            <h2>2. Use of Content</h2>
            <p>All content published on Healthy Vibes Hub is for informational purposes only. You may share individual articles with proper attribution and a link to the original source. Reproduction of our content without express written permission is prohibited.</p>
          </section>
          <section>
            <h2>3. Medical Disclaimer</h2>
            <p>Content on this Site is NOT a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Site.</p>
          </section>
          <section>
            <h2>4. Intellectual Property</h2>
            <p>All content on this Site — including text, images, graphics, logos, and design — is owned by Healthy Vibes Hub or its content suppliers and is protected by copyright and intellectual property laws. Unauthorized use may result in legal action.</p>
          </section>
          <section>
            <h2>5. User Conduct</h2>
            <p>You agree not to use the Site to: post harmful, misleading, or unlawful content; attempt to gain unauthorized access to our systems; engage in scraping or automated data collection without permission; or interfere with the Site's operation.</p>
          </section>
          <section>
            <h2>6. Third-Party Links</h2>
            <p>Our Site may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.</p>
          </section>
          <section>
            <h2>7. Advertising</h2>
            <p>Healthy Vibes Hub displays third-party advertisements through Google AdSense and other networks. We are not responsible for the content of these advertisements. Advertisements do not constitute endorsement of any product or service.</p>
          </section>
          <section>
            <h2>8. Limitation of Liability</h2>
            <p>Healthy Vibes Hub shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the Site or reliance on any information provided herein.</p>
          </section>
          <section>
            <h2>9. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of New York, USA. Any disputes arising shall be resolved in the courts of New York County.</p>
          </section>
          <section>
            <h2>10. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes are effective immediately upon posting. Continued use of the Site constitutes acceptance of updated Terms.</p>
          </section>
          <section>
            <h2>11. Contact</h2>
            <p>Questions about these Terms? Email us at <a href="mailto:hello@healthyvibeshub.com" className="text-primary-600 hover:underline">hello@healthyvibeshub.com</a>.</p>
          </section>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm font-body">
          <Link href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link>
          <span className="text-gray-300">·</span>
          <Link href="/cookies-policy" className="text-primary-600 hover:underline">Cookies Policy</Link>
          <span className="text-gray-300">·</span>
          <Link href="/contact" className="text-primary-600 hover:underline">Contact Us</Link>
        </div>
      </div>
    </>
  )
}
