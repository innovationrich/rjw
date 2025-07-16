export const metadata = {
  title: "Terms of Service - Side Hustle Success",
  description: "Terms of service for Side Hustle Success blog.",
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last updated: December 15, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using Side Hustle Success ("the Website"), you accept and agree to be bound by the terms
            and provision of this agreement.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Side Hustle Success for personal,
            non-commercial transitory viewing only.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on Side Hustle Success are provided on an 'as is' basis. Side Hustle Success makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties including without
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>Advertising</h2>
          <p>
            This website displays advertisements served by Google AdSense and other advertising partners. We may receive
            compensation when you click on or purchase products through these advertisements.
          </p>

          <h2>User Content</h2>
          <p>
            Users may submit comments, questions, and other content. By submitting content, you grant us a
            non-exclusive, royalty-free license to use, modify, and display such content.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall Side Hustle Success or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
            inability to use the materials on Side Hustle Success, even if Side Hustle Success or an authorized
            representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:legal@sidehustlesuccess.com" className="text-orange-600 hover:text-orange-700">
              legal@sidehustlesuccess.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
