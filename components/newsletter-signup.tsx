"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your email service
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6">
            <Mail className="w-8 h-8 text-orange-600" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Join 50,000+ Side Hustlers</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get our weekly newsletter with the latest side hustle opportunities, success stories, and actionable tips
            delivered straight to your inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
              <Button type="submit" size="lg" className="bg-orange-600 hover:bg-orange-700 text-white h-12 px-8">
                Subscribe Free
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-semibold">Thanks for subscribing!</span>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">Weekly</div>
              <div className="text-sm text-gray-600">New opportunities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">$1000+</div>
              <div className="text-sm text-gray-600">Average monthly earnings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">Free</div>
              <div className="text-sm text-gray-600">Always free content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
