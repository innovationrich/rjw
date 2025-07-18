"use client"

import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

export default function BlogGrid() {
  if (!blogPosts?.length) {
    return <p className="text-center text-gray-500">No articles yet — check back soon.</p>
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <article key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <Link href={`/blog/${post.id}`} className="relative h-48 w-full shrink-0">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </Link>

          <div className="flex flex-1 flex-col bg-white p-5">
            <span className="mb-2 text-xs uppercase tracking-wide text-orange-600">{post.category}</span>
            <Link href={`/blog/${post.id}`}>
              <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-900 hover:text-orange-600">
                {post.title}
              </h3>
            </Link>
            <p className="line-clamp-3 flex-1 text-sm text-gray-600">{post.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
