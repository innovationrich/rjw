"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useIndexNow } from "@/hooks/use-indexnow"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface IndexNowButtonProps {
  url: string
  host: string
  className?: string
}

export function IndexNowButton({ url, host, className = "" }: IndexNowButtonProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const { submitUrl } = useIndexNow(host)

  const handleSubmit = async () => {
    setStatus("submitting")

    try {
      const result = await submitUrl(url)

      if (result.success) {
        setStatus("success")
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const getButtonContent = () => {
    switch (status) {
      case "submitting":
        return "Submitting..."
      case "success":
        return (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Submitted!
          </>
        )
      case "error":
        return (
          <>
            <AlertCircle className="w-4 h-4 mr-2" />
            Failed
          </>
        )
      default:
        return (
          <>
            <Send className="w-4 h-4 mr-2" />
            Submit to IndexNow
          </>
        )
    }
  }

  const getButtonVariant = () => {
    switch (status) {
      case "success":
        return "default"
      case "error":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <Button
      onClick={handleSubmit}
      disabled={status === "submitting"}
      variant={getButtonVariant()}
      size="sm"
      className={className}
    >
      {getButtonContent()}
    </Button>
  )
}
