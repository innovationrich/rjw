"use server"

import { submitToIndexNow } from "@/lib/indexnow"

export async function submitUrlsToSearch(urls: string[], host: string) {
  try {
    const result = await submitToIndexNow(urls, host)
    return result
  } catch (error) {
    console.error("Server action IndexNow error:", error)
    return { success: false, error: "Failed to submit URLs" }
  }
}
