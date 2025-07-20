"use server"

interface IndexNowSubmission {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

/**
 * Submits a list of URLs to the IndexNow API for immediate indexing.
 * @param urls An array of URLs to submit.
 * @param type The type of submission: 'added' for new/updated URLs, 'deleted' for removed URLs.
 * @returns A success message or an error.
 */
export async function submitUrlsToIndexNow(urls: string[], type: "added" | "deleted") {
  const indexNowApiKey = process.env.INDEXNOW_API_KEY
  const host = process.env.NEXT_PUBLIC_VERCEL_URL || "jobsnearmehiringimmediately.com" // Use your actual domain

  if (!indexNowApiKey) {
    console.error("INDEXNOW_API_KEY environment variable is not set.")
    return { success: false, message: "IndexNow API key is missing." }
  }

  const payload: IndexNowSubmission = {
    host: host.replace(/^(https?:\/\/)?(www\.)?/, ""), // Remove protocol and www for host
    key: indexNowApiKey,
    keyLocation: `https://${host.replace(/^(https?:\/\/)?/, "")}/indexnow.txt`, // Full URL to the key file
    urlList: urls,
  }

  try {
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      console.log(`Successfully submitted ${urls.length} URLs to IndexNow (${type}).`)
      return { success: true, message: `Successfully submitted ${urls.length} URLs to IndexNow.` }
    } else {
      const errorText = await response.text()
      console.error(`Failed to submit URLs to IndexNow: ${response.status} - ${errorText}`)
      return { success: false, message: `Failed to submit URLs to IndexNow: ${response.status} - ${errorText}` }
    }
  } catch (error) {
    console.error("Error submitting URLs to IndexNow:", error)
    return { success: false, message: `Error submitting URLs to IndexNow: ${(error as Error).message}` }
  }
}
