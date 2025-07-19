const INDEXNOW_API_KEY = "22edc7cab1d846889a863530975e6e09"
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"

interface IndexNowSubmission {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

export async function submitToIndexNow(urls: string | string[], host: string) {
  try {
    const urlList = Array.isArray(urls) ? urls : [urls]

    const submission: IndexNowSubmission = {
      host: host,
      key: INDEXNOW_API_KEY,
      keyLocation: `https://${host}/${INDEXNOW_API_KEY}.txt`,
      urlList: urlList,
    }

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(submission),
    })

    if (response.ok) {
      console.log("URLs successfully submitted to IndexNow:", urlList)
      return { success: true, urls: urlList }
    } else {
      console.error("IndexNow submission failed:", response.status, response.statusText)
      return { success: false, error: response.statusText }
    }
  } catch (error) {
    console.error("IndexNow submission error:", error)
    return { success: false, error: String(error) } // Convert error to string for consistent return type
  }
}

// Helper function to submit a single URL
export async function submitUrlToIndexNow(url: string, host: string) {
  return submitToIndexNow([url], host)
}

// Helper function to submit multiple URLs
export async function submitUrlsToIndexNow(urls: string[], host: string) {
  return submitToIndexNow(urls, host)
}
