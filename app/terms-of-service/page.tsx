import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - SideHustlesFromHome.com",
  description:
    "Review the Terms of Service for SideHustlesFromHome.com to understand the rules and guidelines for using our website.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            Welcome to SideHustlesFromHome.com! These terms and conditions outline the rules and regulations for the use
            of SideHustlesFromHome.com's Website, located at https://sidehustlesfromhome.com.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use
            SideHustlesFromHome.com if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h3>Cookies</h3>
          <p>
            The website uses cookies to help personalize your online experience. By accessing SideHustlesFromHome.com,
            you agreed to use the required cookies.
          </p>
          <p>
            A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run
            programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a
            web server in the domain that issued the cookie to you.
          </p>
          <p>
            We may use cookies to collect, store, and track information for statistical or marketing purposes to operate
            our website. You have the ability to accept or decline cookies. Most web browsers automatically accept
            cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to
            decline cookies, you may not be able to fully experience the interactive features of the
            SideHustlesFromHome.com services or websites you visit.
          </p>
          <h3>License</h3>
          <p>
            Unless otherwise stated, SideHustlesFromHome.com and/or its licensors own the intellectual property rights
            for all material on SideHustlesFromHome.com. All intellectual property rights are reserved. You may access
            this from SideHustlesFromHome.com for your own personal use subjected to restrictions set in these terms and
            conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Republish material from SideHustlesFromHome.com</li>
            <li>Sell, rent or sub-license material from SideHustlesFromHome.com</li>
            <li>Reproduce, duplicate or copy material from SideHustlesFromHome.com</li>
            <li>Redistribute content from SideHustlesFromHome.com</li>
          </ul>
          <p>This Agreement shall begin on the date hereof.</p>
          <h3>Hyperlinking to our Content</h3>
          <p>The following organizations may link to our Website without prior written approval:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites
              of other listed businesses; and
            </li>
            <li>
              System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and
              charity fundraising groups which may not hyperlink to our Web site.
            </li>
          </ul>
          <p>We may consider and approve other link requests from the following types of organizations:</p>
          <ul className="list-disc list-inside ml-4">
            <li>commonly-known consumer and/or business information sources;</li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>
          <p>
            No use of SideHustlesFromHome.com's logo or other artwork will be allowed for linking absent a trademark
            license agreement.
          </p>
          <h3>iFrames</h3>
          <p>
            Without prior approval and written permission, you may not create frames around our Webpages that alter in
            any way the visual presentation or appearance of our Website.
          </p>
          <h3>Content Liability</h3>
          <p>
            We shall not be held responsible for any content that appears on your Website. You agree to protect and
            defend us against all claims that are raised on your Website. No link(s) should appear on any Website that
            may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates
            the infringement or other violation of, any third party rights.
          </p>
          <h3>Reservation of Rights</h3>
          <p>
            We reserve the right to request that you remove all links or any particular link to our Website. You approve
            to immediately remove all links to our Website upon request. We also reserve the right to amen these terms
            and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be
            bound to and follow these linking terms and conditions.
          </p>
          <h3>Disclaimer</h3>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions
            relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p>
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are
            subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including
            liabilities arising in contract, in tort and for breach of statutory duty.
          </p>
          <p>
            As long as the website and the information and services on the website are provided free of charge, we will
            not be liable for any loss or damage of any nature.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
