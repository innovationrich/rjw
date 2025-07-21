"use server"

import { revalidatePath } from "next/cache"

const INDEXNOW_API_KEY = process.env.INDEXNOW_API_KEY || ""
const INDEXNOW_HOST = "jobsnearmehiringimmediately.com" // Your domain

export async function submitUrlsToIndexNow(urls: string[]) {
  if (!INDEXNOW_API_KEY) {
    console.warn("INDEXNOW_API_KEY is not set. Skipping IndexNow submission.")
    return { success: false, message: "IndexNow API key not configured." }
  }

  const endpoint = `https://api.indexnow.org/IndexNow`

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_API_KEY,
        urlList: urls,
      }),
    })

    if (response.ok) {
      console.log(`Successfully submitted ${urls.length} URLs to IndexNow.`)
      // Optionally revalidate paths if they are part of your Next.js app
      urls.forEach((url) => {
        try {
          const urlPath = new URL(url).pathname
          revalidatePath(urlPath)
          console.log(`Revalidated path: ${urlPath}`)
        } catch (e) {
          console.error(`Could not parse URL for revalidation: ${url}`, e)
        }
      })
      return { success: true, message: "URLs submitted successfully to IndexNow." }
    } else {
      const errorText = await response.text()
      console.error(`IndexNow submission failed: ${response.status} - ${errorText}`)
      return { success: false, message: `IndexNow submission failed: ${response.status} - ${errorText}` }
    }
  } catch (error) {
    console.error("Error submitting URLs to IndexNow:", error)
    return {
      success: false,
      message: `Error submitting URLs to IndexNow: ${error instanceof Error ? error.message : String(error)}`,
    }
  }
}
