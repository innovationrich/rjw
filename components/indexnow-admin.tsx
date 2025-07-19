"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { submitUrlsToSearch } from "@/app/actions/indexnow"
import { CheckCircle, AlertCircle, Send } from "lucide-react"

export function IndexNowAdmin() {
  const [urls, setUrls] = useState("")
  const [host, setHost] = useState("sidehustlesfromhome.com") // Default to your domain
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async () => {
    if (!urls.trim() || !host.trim()) {
      setResult({ success: false, message: "Please provide both URLs and host domain" })
      return
    }

    setIsSubmitting(true)
    setResult(null)

    try {
      const urlList = urls
        .split("\n")
        .map((url) => url.trim())
        .filter((url) => url.length > 0)

      const response = await submitUrlsToSearch(urlList, host)

      if (response.success) {
        setResult({
          success: true,
          message: `Successfully submitted ${urlList.length} URL(s) to IndexNow`,
        })
        setUrls("")
      } else {
        setResult({
          success: false,
          message: `Failed to submit URLs: ${response.error}`,
        })
      }
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred while submitting URLs",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="w-5 h-5 text-orange-600" />
          IndexNow URL Submission
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="host" className="block text-sm font-medium text-gray-700 mb-2">
            Host Domain
          </label>
          <Input
            id="host"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            placeholder="your-domain.com"
            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="urls" className="block text-sm font-medium text-gray-700 mb-2">
            URLs to Submit (one per line)
          </label>
          <Textarea
            id="urls"
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
            placeholder={`https://your-domain.com/blog/new-post
https://your-domain.com/categories/side-hustles
https://your-domain.com/about`}
            rows={6}
            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full bg-orange-600 hover:bg-orange-700">
          {isSubmitting ? "Submitting..." : "Submit to IndexNow"}
        </Button>

        {result && (
          <div
            className={`flex items-center gap-2 p-3 rounded-lg ${
              result.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}
          >
            {result.success ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span className="text-sm">{result.message}</span>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">IndexNow Benefits:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Instant indexing across multiple search engines</li>
            <li>• Supported by Bing, Yandex, and other search engines</li>
            <li>• Reduces crawl quota usage</li>
            <li>• Faster content discovery and ranking</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
