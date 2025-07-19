import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - SideHustlesFromHome.com",
  description:
    "Have questions or feedback? Contact SideHustlesFromHome.com for support, partnerships, or general inquiries.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-gray-700">
            We'd love to hear from you! Whether you have a question, feedback, or a partnership inquiry, please fill out
            the form below.
          </p>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-base">
                Name
              </Label>
              <Input id="name" placeholder="Your Name" required type="text" />
            </div>
            <div>
              <Label htmlFor="email" className="text-base">
                Email
              </Label>
              <Input id="email" placeholder="your@example.com" required type="email" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-base">
                Subject
              </Label>
              <Input id="subject" placeholder="Subject of your message" required type="text" />
            </div>
            <div>
              <Label htmlFor="message" className="text-base">
                Message
              </Label>
              <Textarea className="min-h-[120px]" id="message" placeholder="Your message" required />
            </div>
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
          <p className="text-center text-sm text-gray-500">
            We aim to respond to all inquiries within 2-3 business days.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
