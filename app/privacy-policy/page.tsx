import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - SideHustlesFromHome.com",
  description:
    "Read the Privacy Policy for SideHustlesFromHome.com to understand how we collect, use, and protect your personal data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            At SideHustlesFromHome.com, we are committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <h3>Information We Collect</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you register on the website,
            participate in activities on the website, or contact us. This may include your name, email address, and any
            other information you choose to provide.
          </p>
          <h3>How We Use Your Information</h3>
          <p>We use the information collected to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our partners, including for customer service, to
              provide you with updates and other information relating to the website, and for marketing and promotional
              purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
          <h3>Log Files</h3>
          <p>
            SideHustlesFromHome.com follows a standard procedure of using log files. These files log visitors when they
            visit websites. All hosting companies do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider
            (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to
            any personally identifiable information. The purpose of the information is for analyzing trends,
            administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>
          <h3>Cookies and Web Beacons</h3>
          <p>
            Like any other website, SideHustlesFromHome.com uses 'cookies'. These cookies are used to store information
            including visitors' preferences, and the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing our web page content based on visitors'
            browser type and/or other information.
          </p>
          <h3>Third-Party Privacy Policies</h3>
          <p>
            SideHustlesFromHome.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are
            advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
          <p>
            You can choose to disable cookies through your individual browser options. To know more detailed information
            about cookie management with specific web browsers, it can be found at the browsers' respective websites.
          </p>
          <h3>Children's Information</h3>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage
            parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            SideHustlesFromHome.com does not knowingly collect any Personal Identifiable Information from children under
            the age of 13. If you think that your child provided this kind of information on our website, we strongly
            encourage you to contact us immediately and we will do our best efforts to promptly remove such information
            from our records.
          </p>
          <h3>Online Privacy Policy Only</h3>
          <p>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with
            regard to the information that they shared and/or collect in SideHustlesFromHome.com. This policy is not
            applicable to any information collected offline or via channels other than this website.
          </p>
          <h3>Consent</h3>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
        </CardContent>
      </Card>
    </div>
  )
}
