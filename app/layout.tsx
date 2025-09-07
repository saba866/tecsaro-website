// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Tecsaro Digital | AI Chatbots, SaaS Development & MVP Solutions",
//   description:
//     "Leading AI chatbot development, SaaS platform creation, and MVP solutions for startups. Expert team specializing in intelligent automation, custom AI tools, and rapid prototyping in Hyderabad, India.",
//   keywords:
//     "AI chatbots, SaaS development, MVP development, artificial intelligence, chatbot solutions, startup technology, automation tools, Hyderabad tech company, AI agents, custom software development",
//   authors: [{ name: "Tecsaro Digital" }],
//   creator: "Tecsaro Digital",
//   publisher: "Tecsaro Digital",
//   robots: "index, follow",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://tecsaro.com",
//     title: "Tecsaro Digital | AI Chatbots & SaaS Solutions",
//     description:
//       "Transform your business with cutting-edge AI chatbots, SaaS platforms, and MVP development. Expert team in Hyderabad specializing in intelligent automation solutions.",
//     siteName: "Tecsaro Digital",
//     images: [
//       {
//         url: "/placeholder.svg?height=630&width=1200",
//         width: 1200,
//         height: 630,
//         alt: "Tecsaro Digital - AI Chatbots and SaaS Solutions",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Tecsaro Digital | AI Chatbots & SaaS Solutions",
//     description: "Transform your business with cutting-edge AI chatbots, SaaS platforms, and MVP development.",
//     images: ["/placeholder.svg?height=630&width=1200"],
//   },
//   alternates: {
//     canonical: "https://tecsaro.com",
//   },
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="dark">
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="theme-color" content="#0073e6" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Tecsaro Digital",
//               description: "Leading AI chatbot development, SaaS platform creation, and MVP solutions for startups",
//               url: "https://tecsaro.com",
//               logo: "https://tecsaro.com/logo.png",
//               contactPoint: {
//                 "@type": "ContactPoint",
//                 telephone: "",
//                 contactType: "customer service",
//                 email: "saba@tecsaro.com",
//               },
//               address: {
//                 "@type": "PostalAddress",
//                 addressLocality: "Hyderabad",
//                 addressRegion: "Telangana",
//                 addressCountry: "India",
//               },
//               sameAs: [
//                 "https://linkedin.com/company/tecsaro",
//                 "https://twitter.com/tecsaro",
//                 "https://facebook.com/tecsaro",
//               ],
//             }),
//           }}
//         />
//       </head>
//       <body className={`${inter.className} bg-bg-primary text-text-primary antialiased`}>
//         <Navigation />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }



import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tecsaro Digital | AI Chatbots, SaaS Development & MVP Solutions",
  description:
    "Leading AI chatbot development, SaaS platform creation, and MVP solutions for startups. Expert team specializing in intelligent automation, custom AI tools, and rapid prototyping in Hyderabad, India.",
  keywords:
    "AI chatbots, SaaS development, MVP development, artificial intelligence, chatbot solutions, startup technology, automation tools, Hyderabad tech company, AI agents, custom software development",
  authors: [{ name: "Tecsaro Digital" }],
  creator: "Tecsaro Digital",
  publisher: "Tecsaro Digital",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tecsaro.com",
    title: "Tecsaro Digital | AI Chatbots & SaaS Solutions",
    description:
      "Transform your business with cutting-edge AI chatbots, SaaS platforms, and MVP development. Expert team in Hyderabad specializing in intelligent automation solutions.",
    siteName: "Tecsaro Digital",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Tecsaro Digital - AI Chatbots and SaaS Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecsaro Digital | AI Chatbots & SaaS Solutions",
    description:
      "Transform your business with cutting-edge AI chatbots, SaaS platforms, and MVP development.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  alternates: {
    canonical: "https://tecsaro.com",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0073e6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tecsaro Digital",
              description:
                "Leading AI chatbot development, SaaS platform creation, and MVP solutions for startups",
              url: "https://tecsaro.com",
              logo: "https://tecsaro.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "",
                contactType: "customer service",
                email: "saba@tecsaro.com",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.linkedin.com/company/tecsaro-digital/",
                "https://x.com/tecsaro",
                "https://www.facebook.com/share/1C9m6DpxvE/",
                "https://www.instagram.com/tecsaro_digital",
                "https://www.youtube.com/@tecsaro_digital",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-bg-primary text-text-primary antialiased`}
      >
        <Navigation />
        <main className="min-h-screen px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
