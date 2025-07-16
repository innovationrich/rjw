import { NextResponse } from "next/server"

export async function GET() {
  return new NextResponse("google-site-verification: google2d25a61afde90888.html", {
    headers: {
      "Content-Type": "text/html",
    },
  })
}
