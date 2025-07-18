import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              SideHustles FromHome.com
            </span>
            <span className="ml-2 animate-pulse text-sm">✨</span>
          </a>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="/categories" className="hover:text-gray-300">
                Categories
              </a>
            </li>
            <li>
              <a href="/categories/investing" className="hover:text-gray-300">
                Investing
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
