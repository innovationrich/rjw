import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - SideHustlesFromHome.com",
  description:
    "Learn about SideHustlesFromHome.com, our mission, and our team dedicated to helping you find profitable side hustles.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About SideHustlesFromHome.com</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            Welcome to SideHustlesFromHome.com, your ultimate resource for discovering legitimate and profitable ways to
            earn extra income from the comfort of your home. Our mission is to empower individuals to achieve financial
            freedom and flexibility through diverse side hustle opportunities.
          </p>
          <p>
            We believe that everyone has unique skills and potential to generate additional income, whether it's through
            online freelancing, passive income streams, gig economy jobs, or creative ventures. Our team is dedicated to
            researching, testing, and sharing the most effective strategies and opportunities to help you succeed.
          </p>
          <p>
            Our content is meticulously crafted to provide actionable advice, detailed guides, and inspiring success
            stories. We cover a wide range of topics, from digital marketing and e-commerce to specialized skills and
            entry-level remote jobs.
          </p>
          <p>
            Join our growing community of side hustlers and start your journey towards a more flexible and financially
            rewarding life today!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
