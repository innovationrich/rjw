"use client"

import { useCallback } from "react"
import { submitUrlsToSearch } from "@/app/actions/indexnow"

export function useIndexNow(host: string) {
  const submitUrl = useCallback(
    async (url: string) => {
      try {
        const result = await submitUrlsToSearch([url], host)
        return result
      } catch (error) {
        console.error("IndexNow submission failed:", error)
        return { success: false, error: "Submission failed" }
      }
    },
    [host],
  )

  const submitUrls = useCallback(
    async (urls: string[]) => {
      try {
        const result = await submitUrlsToSearch(urls, host)
        return result
      } catch (error) {
        console.error("IndexNow bulk submission failed:", error)
        return { success: false, error: "Bulk submission failed" }
      }
    },
    [host],
  )

  return { submitUrl, submitUrls }
}
