import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/hero-banner.png"
        alt="Jobs Hiring Immediately"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-30"
      />
      <div className="relative z-10 px-4 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Your Next Opportunity, <br className="hidden sm:inline" />
          Hiring Immediately
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
          Discover thousands of full-time, part-time, and remote jobs near you. Start your job search today and get
          hired fast!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            <Link href="/search">Search Jobs</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold bg-transparent"
          >
            <Link href="/blog">Read Our Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
