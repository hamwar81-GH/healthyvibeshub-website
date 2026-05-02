import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { SITE_URL, breadcrumbSchema } from '../seo/meta'

export default function DisclaimerPage() {
  return (
    <>
      <SEOHead
        title="Medical & Legal Disclaimer | Healthy Vibes Hub 2026"
        description="Read Healthy Vibes Hub's medical disclaimer. Our content is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional."
        canonical={`${SITE_URL}/disclaimer`}
        structuredData={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Disclaimer', path: '/disclaimer' }])]}
      />
      <div className="bg-hero-gradient py-10 border-b border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-gray-900 text-4xl mb-2">Disclaimer</h1>
          <p className="text-gray-500 font-body">Last updated: May 1, 2026</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose-custom space-y-8">
          <section>
            <h2>Medical Disclaimer</h2>
            <p>The content published on Healthy Vibes Hub (healthyvibeshub.com) is intended for informational and educational purposes only. It is <strong>not</strong> a substitute for professional medical advice, diagnosis, or treatment from a licensed healthcare professional.</p>
            <p>Always seek the advice of your physician or another qualified health provider with any questions you may have regarding a medical condition, treatment, or medication. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>
          </section>
          <section>
            <h2>Not a Doctor-Patient Relationship</h2>
            <p>Visiting or using this website does not create a doctor-patient relationship between you and Healthy Vibes Hub or any of its authors. Our writers and medical reviewers provide general health education — not personalized medical consultations.</p>
          </section>
          <section>
            <h2>No Warranties</h2>
            <p>While we make every effort to ensure the accuracy of information published on this site, Healthy Vibes Hub makes no warranties or guarantees regarding the completeness, accuracy, reliability, or suitability of the information for any purpose. Health information changes rapidly, and what was accurate at time of publication may no longer reflect current best practices.</p>
          </section>
          <section>
            <h2>Affiliate & Advertising Disclosure</h2>
            <p>Healthy Vibes Hub may display third-party advertisements through Google AdSense and may participate in affiliate programs. If we recommend a product or service through an affiliate link, we will clearly disclose this. Affiliate relationships do not influence our editorial content or recommendations.</p>
          </section>
          <section>
            <h2>External Links</h2>
            <p>This website may contain links to external websites. These links are provided for convenience only. Healthy Vibes Hub is not responsible for the content, accuracy, or availability of external sites.</p>
          </section>
          <section>
            <h2>Contact Us</h2>
            <p>If you have concerns about any content on this site, please contact us at <a href="mailto:hello@healthyvibeshub.com" className="text-primary-600 hover:underline">hello@healthyvibeshub.com</a>.</p>
          </section>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm font-body">
          <Link href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link>
          <span className="text-gray-300">·</span>
          <Link href="/terms-of-use" className="text-primary-600 hover:underline">Terms of Use</Link>
          <span className="text-gray-300">·</span>
          <Link href="/editorial-guidelines" className="text-primary-600 hover:underline">Editorial Guidelines</Link>
        </div>
      </div>
    </>
  )
}
