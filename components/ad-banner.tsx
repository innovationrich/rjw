import { Card } from "@/components/ui/card"

export function AdBanner() {
  return (
    <Card className="w-full bg-gray-100 p-4 text-center text-gray-500 dark:bg-gray-800 dark:text-gray-400">
      <p>Advertisement</p>
      {/* Replace with your actual ad code */}
      <div className="mt-2 h-24 w-full bg-gray-200 flex items-center justify-center text-sm text-gray-400 dark:bg-gray-700 dark:text-gray-500">
        [Your AdSense or other ad code here]
      </div>
    </Card>
  )
}

export default AdBanner
