import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { SITE_URL, breadcrumbSchema } from '../seo/meta'

export default function CookiesPolicyPage() {
  return (
    <>
      <SEOHead
        title="Cookies Policy – How Healthy Vibes Hub Uses Cookies 2026"
        description="Learn how Healthy Vibes Hub uses cookies to improve your experience, analyze traffic, and serve relevant advertisements. Opt out options included."
        canonical={`${SITE_URL}/cookies-policy`}
        structuredData={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Cookies Policy', path: '/cookies-policy' }])]}
      />

      <div className="bg-hero-gradient py-10 border-b border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-gray-900 text-4xl mb-2">Cookies Policy</h1>
          <p className="text-gray-500 font-body">Last updated: May 1, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose-custom space-y-8">
          <section>
            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, improve efficiency, and provide information to website owners.</p>
          </section>
          <section>
            <h2>How We Use Cookies</h2>
            <p>Healthy Vibes Hub uses the following types of cookies:</p>
            <h3>Essential Cookies</h3>
            <p>These are necessary for the website to function properly. They include session cookies that remember your preferences during your visit. Without these, certain features won't work.</p>
            <h3>Analytics Cookies (Google Analytics)</h3>
            <p>We use Google Analytics 4 to understand how visitors use our site. These cookies collect anonymous data including pages viewed, time on site, and traffic sources. IP anonymization is enabled.</p>
            <h3>Advertising Cookies (Google AdSense)</h3>
            <p>We work with Google AdSense to display advertisements. Google uses cookies to serve ads based on your browsing history. You can opt out of personalized ads at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Ad Settings</a>.</p>
          </section>
          <section>
            <h2>Cookie Table</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm font-body">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-700">Cookie</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Provider</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Purpose</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ['_ga', 'Google Analytics', 'User identification', '2 years'],
                    ['_ga_*', 'Google Analytics', 'Session state', '2 years'],
                    ['_gid', 'Google Analytics', 'User identification', '24 hours'],
                    ['IDE', 'Google Ads', 'Ad personalization', '1 year'],
                    ['__gads', 'Google AdSense', 'Ad serving', '1 year'],
                  ].map(([name, provider, purpose, duration]) => (
                    <tr key={name} className="hover:bg-gray-50">
                      <td className="p-3 font-mono text-xs text-gray-600">{name}</td>
                      <td className="p-3 text-gray-600">{provider}</td>
                      <td className="p-3 text-gray-600">{purpose}</td>
                      <td className="p-3 text-gray-500">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2>How to Control Cookies</h2>
            <p>You can control and/or delete cookies as you wish. You can delete all cookies already on your computer and set most browsers to prevent them from being placed. However, if you do this, some services may not function properly.</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Apple Safari</a></li>
            </ul>
          </section>
          <section>
            <h2>Contact Us</h2>
            <p>Questions about our use of cookies? Contact <a href="mailto:hello@healthyvibeshub.com" className="text-primary-600 hover:underline">hello@healthyvibeshub.com</a>.</p>
          </section>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm font-body">
          <Link href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link>
          <span className="text-gray-300">·</span>
          <Link href="/terms-of-use" className="text-primary-600 hover:underline">Terms of Use</Link>
        </div>
      </div>
    </>
  )
}
