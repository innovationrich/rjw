export const metadata = {
  title: "Privacy Policy - Side Hustle Success",
  description: "Privacy policy for Side Hustle Success blog including AdSense and cookie policies.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Last updated: December 15, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you subscribe to our newsletter, contact us,
            or interact with our content.
          </p>

          <h2>Google AdSense</h2>
          <p>
            This website uses Google AdSense, a web advertising service provided by Google Inc. ("Google"). Google
            AdSense uses cookies to serve ads based on your prior visits to this website or other websites.
          </p>

          <p>
            Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to
            this site and/or other sites on the Internet. You may opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" className="text-orange-600 hover:text-orange-700">
              Google Ads Settings
            </a>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
            traffic. You can choose to accept or decline cookies through your browser settings.
          </p>

          <h2>Third-Party Services</h2>
          <p>We may use third-party services that collect, monitor and analyze data, including:</p>
          <ul>
            <li>Google Analytics for website analytics</li>
            <li>Google AdSense for advertising</li>
            <li>Email service providers for newsletters</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@sidehustlesuccess.com" className="text-orange-600 hover:text-orange-700">
              privacy@sidehustlesuccess.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
