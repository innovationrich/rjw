"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Full-Time Jobs",
    href: "/full-time-jobs",
    description: "Explore stable, long-term career opportunities.",
  },
  {
    title: "Part-Time Jobs",
    href: "/part-time-jobs",
    description: "Find flexible work options to fit your schedule.",
  },
  {
    title: "Entry-Level Jobs",
    href: "/entry-level-jobs",
    description: "Discover roles that require no prior experience.",
  },
  {
    title: "Remote Jobs",
    href: "/remote-jobs",
    description: "Work from anywhere with these virtual opportunities.",
  },
  {
    title: "Warehouse Jobs",
    href: "/warehouse-jobs",
    description: "Find jobs in logistics, fulfillment, and distribution centers.",
  },
  {
    title: "Retail Jobs",
    href: "/retail-jobs",
    description: "Opportunities in sales, customer service, and store operations.",
  },
  {
    title: "Healthcare Jobs",
    href: "/healthcare-jobs",
    description: "Roles in hospitals, clinics, and medical facilities.",
  },
  {
    title: "Fast Food Jobs",
    href: "/fast-food-jobs",
    description: "Quick-service restaurant positions with immediate openings.",
  },
  {
    title: "Construction Jobs",
    href: "/construction-jobs",
    description: "Build your career in the construction industry.",
  },
]

const cities: { title: string; href: string; description: string }[] = [
  {
    title: "Houston, TX",
    href: "/houston",
    description: "Find jobs in the diverse Houston metropolitan area.",
  },
  {
    title: "Chicago, IL",
    href: "/chicago",
    description: "Explore opportunities in the Windy City's robust job market.",
  },
  {
    title: "Atlanta, GA",
    href: "/atlanta",
    description: "Discover jobs in the rapidly growing Atlanta economy.",
  },
  {
    title: "Phoenix, AZ",
    href: "/phoenix",
    description: "Search for jobs in the sunny Phoenix metropolitan area.",
  },
  {
    title: "Philadelphia, PA",
    href: "/philadelphia",
    description: "Find employment in the historic city of Philadelphia.",
  },
  {
    title: "San Antonio, TX",
    href: "/san-antonio",
    description: "Explore job openings in the vibrant city of San Antonio.",
  },
]

export function Navigation() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/jobs-near-me-immediately-logo.png"
            alt="Jobs Near Me Immediately Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="text-lg font-bold text-gray-900">Jobs Near Me</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/search" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Job Search</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Job Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Cities</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {cities.map((city) => (
                    <ListItem key={city.title} title={city.title} href={city.href}>
                      {city.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="flex items-center" onClick={() => setIsSheetOpen(false)}>
                <Image
                  src="/jobs-near-me-immediately-logo.png"
                  alt="Jobs Near Me Immediately Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-lg font-bold text-gray-900">Jobs Near Me</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close navigation menu</span>
              </Button>
            </div>
            <nav className="grid gap-4 text-lg font-medium">
              <Link href="/search" className="hover:text-blue-600" onClick={() => setIsSheetOpen(false)}>
                Job Search
              </Link>
              <h3 className="font-semibold text-gray-700 mt-2">Job Categories</h3>
              <ul className="grid gap-2 pl-4">
                {components.map((component) => (
                  <li key={component.title}>
                    <Link
                      href={component.href}
                      className="hover:text-blue-600 text-sm"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {component.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-gray-700 mt-2">Cities</h3>
              <ul className="grid gap-2 pl-4">
                {cities.map((city) => (
                  <li key={city.title}>
                    <Link
                      href={city.href}
                      className="hover:text-blue-600 text-sm"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {city.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/blog" className="hover:text-blue-600 mt-2" onClick={() => setIsSheetOpen(false)}>
                Blog
              </Link>
              <Link href="/about" className="hover:text-blue-600" onClick={() => setIsSheetOpen(false)}>
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
