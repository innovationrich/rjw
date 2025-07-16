import { Card } from "@/components/ui/card"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export const metadata = {
  title: "About Us - Side Hustle Success",
  description:
    "Learn about Side Hustle Success and our mission to help people achieve financial freedom through proven side hustles and passive income strategies.",
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Side Hustle Success</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're dedicated to helping people build profitable side hustles and achieve financial freedom through proven
            strategies, real success stories, and actionable advice.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To provide practical, actionable guidance that helps people start and scale profitable side hustles,
            regardless of their background, experience, or available time. We believe everyone deserves the opportunity
            to improve their financial situation and build multiple income streams.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Community Members</div>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-gray-600">Detailed Guides</div>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$2M+</div>
            <div className="text-gray-600">Generated Income</div>
          </Card>
        </div>

        {/* Content Quality */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Success Stories</h3>
              <p className="text-gray-600 leading-relaxed">
                Every strategy we share is backed by real people who have achieved real results. We feature detailed
                case studies with actual income numbers and step-by-step breakdowns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Content</h3>
              <p className="text-gray-600 leading-relaxed">
                No fluff or theoretical advice. Our guides include specific tools, platforms, pricing strategies, and
                templates you can use immediately to start earning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beginner-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you're completely new to side hustles or looking to scale existing income streams, our content
                is designed to meet you where you are.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regularly Updated</h3>
              <p className="text-gray-600 leading-relaxed">
                The side hustle landscape changes rapidly. We continuously update our content and strategies to reflect
                current market conditions and opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Side Hustle Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of people who are already building profitable side hustles with our proven strategies and
            step-by-step guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Browse Our Guides
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
