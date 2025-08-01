"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-color" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image 
              src="/tecsarologo.png" 
              alt="Tecsaro Logo" 
              width={200} 
              height={200}
              className="bg-transparent"
            />
            {/* <span className="text-xl font-bold leading-tight ml-2">Tecsaro</span> */}
          </div>
            {/* <div className="flex flex-col ml-2">
              <span className="text-xl font-bold leading-tight">Tecsaro</span>
              <span className="text-xs text-gray-400 leading-tight">Technologies</span>
            </div>
          </div> */}

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent-blue ${
                  pathname === item.href ? "text-accent-blue" : "text-text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary hover:text-accent-blue">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card-bg border-t border-border-color">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-accent-blue ${
                    pathname === item.href ? "text-accent-blue" : "text-text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X } from "lucide-react"
// import Image from "next/image"

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/services", label: "Services" },
//     { href: "/blog", label: "Blog" },
//     { href: "/contact", label: "Contact" },
//   ]

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <Image
//               src="/tecsarologo.png"
//               alt="Tecsaro Logo"
//               width={140}
//               height={40}
//               className="h-auto w-auto object-contain"
//               priority
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`text-sm font-medium transition-colors hover:text-accent-blue ${
//                   pathname === item.href ? "text-accent-blue" : "text-gray-800"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-800 hover:text-accent-blue focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pt-2 pb-4 bg-white border-t border-gray-200">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`block py-2 text-base font-medium transition-colors hover:text-accent-blue ${
//                 pathname === item.href ? "text-accent-blue" : "text-gray-800"
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   )
// }
