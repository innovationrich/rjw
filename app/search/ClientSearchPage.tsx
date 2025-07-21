"use client"

/*
 * A client-only shell around the real search UI.
 * Dynamic import WITH `ssr:false` is allowed here (because *this* file is
 * itself a Client Component) and guarantees the hook-heavy code never runs
 * during the server build.
 */
import dynamic from "next/dynamic"
import type { SearchPageClientProps } from "./SearchPageClient"

/* Lazy-load the heavy UI bundle, browsers only */
const SearchPageClient = dynamic(() => import("./SearchPageClient").then((m) => m.SearchPageClient), {
  ssr: false,
  loading: () => null,
})

export default function ClientSearchPage(props: SearchPageClientProps) {
  return <SearchPageClient {...props} />
}
