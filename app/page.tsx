

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Bot,
  Rocket,
  Code,
  MessageSquare,
  Zap,
  Brain,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  const email = "info@tecsaro.com"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium mb-4">
              🚀 Transforming Ideas into AI-Powered Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building The Future
            <span className="text-accent-blue block">With AI Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Tecsaro Digital specializes in cutting-edge AI chatbots, intelligent automation, SaaS platforms, and
            MVP development for startups and founders ready to transform their ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-accent-blue hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border-color text-text-primary hover:bg-card-bg px-8 py-4 text-lg"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent-blue" />
              <span>AI-First Approach</span>
            </div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      

      {/* What We Build */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Build</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From intelligent chatbots to complete SaaS platforms, we create cutting-edge solutions that drive business
              growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card-bg p-8 rounded-xl border border-border-color card-hover group">
              <div className="relative mb-6">
                <Bot className="h-12 w-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">AI</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Chatbots & Agents</h3>
              <p className="text-gray-400 mb-4">
                Intelligent conversational AI that handles customer support, lead generation, and sales automation 24/7
                with natural language processing.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-green-400">✅ 90% Query Resolution</span>
                <span className="text-sm text-blue-400">⚡ Instant Response</span>
              </div>
              <Link href="/services" className="text-accent-blue hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card-bg p-8 rounded-xl border border-border-color card-hover group">
              <div className="relative mb-6">
                <Code className="h-12 w-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">SaaS</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">SaaS Platforms</h3>
              <p className="text-gray-400 mb-4">
                Full-stack SaaS solutions built with modern technologies, scalable architecture, and user-centric design
                for rapid growth.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-green-400">🚀 Scalable Architecture</span>
                <span className="text-sm text-blue-400">🔒 Enterprise Security</span>
              </div>
              <Link href="/services" className="text-accent-blue hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card-bg p-8 rounded-xl border border-border-color card-hover group">
              <div className="relative mb-6">
                <Rocket className="h-12 w-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">MVP</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">MVP Development</h3>
              <p className="text-gray-400 mb-4">
                Rapid prototyping and MVP development to help startups validate ideas and get to market quickly with
                minimal investment.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-green-400">⏱️ 4-8 Week Delivery</span>
                <span className="text-sm text-blue-400">💡 Idea Validation</span>
              </div>
              <Link href="/services" className="text-accent-blue hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card-bg p-8 rounded-xl border border-border-color card-hover group">
              <div className="relative mb-6">
                <Brain className="h-12 w-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">AI</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Tools & Automation</h3>
              <p className="text-gray-400 mb-4">
                Custom AI solutions and automation tools that streamline business processes and increase efficiency
                through intelligent automation.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-green-400">📈 70% Efficiency Gain</span>
                <span className="text-sm text-blue-400">🤖 Smart Automation</span>
              </div>
              <Link href="/services" className="text-accent-blue hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card-bg p-8 rounded-xl border border-border-color card-hover group">
              <div className="relative mb-6">
                <MessageSquare className="h-12 w-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">MSG</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Messaging</h3>
              <p className="text-gray-400 mb-4">
                Intelligent pop-up messages, email automation, and multi-channel communication systems that engage users
                at the perfect moment.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-green-400">📧 Multi-Channel</span>
                <span className="text-sm text-blue-400">🎯 Targeted Messaging</span>
              </div>
              <Link href="/services" className="text-accent-blue hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card-bg p-8 rounded-xl border border-border-color card-hover group">
              <div className="relative mb-6">
                <Zap className="h-12 w-12 text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">⚡</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-400 mb-4">
                Tailored technology solutions designed specifically for your business needs and industry requirements
                with cutting-edge innovation.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-green-400">🎯 Custom Built</span>
                <span className="text-sm text-blue-400">🔧 Industry Specific</span>
              </div>
              <Link href="/services" className="text-accent-blue hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent-blue/20 to-purple-600/20 rounded-2xl p-12 border border-accent-blue/30">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you leverage AI and automation to transform your
              business ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-blue hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
           <Button
                onClick={handleCopyEmail}
                variant="outline"
                size="lg"
                className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-4 text-lg"
              >
                {copied ? "Copied!" : "Email Us Directly"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import {
//   ArrowRight,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function HomePage() {
//   const [copied, setCopied] = useState(false)
//   const email = "info@tecsaro.com"

//   const handleCopyEmail = async () => {
//     try {
//       if (navigator.clipboard) {
//         await navigator.clipboard.writeText(email)
//       } else {
//         const textarea = document.createElement("textarea")
//         textarea.value = email
//         textarea.style.position = "fixed"
//         document.body.appendChild(textarea)
//         textarea.focus()
//         textarea.select()
//         document.execCommand("copy")
//         document.body.removeChild(textarea)
//       }
//       setCopied(true)
//       setTimeout(() => setCopied(false), 2000)
//     } catch (err) {
//       console.error("Failed to copy email:", err)
//     }
//   }

//   return (
//     <div className="fade-in">
//       {/* CTA Section */}
//       <section className="py-12 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="bg-gradient-to-r from-accent-blue/20 to-purple-600/20 rounded-2xl p-8 sm:p-12 border border-accent-blue/30">
//             <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
//               Ready to Build Something Amazing?
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
//               Let's discuss your project and see how we can help you leverage AI and automation to transform your business ideas into reality.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-accent-blue hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-w-[180px]"
//               >
//                 <Link href="/contact" className="flex items-center justify-center gap-2">
//                   Start Your Project <ArrowRight className="h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button
//                 onClick={handleCopyEmail}
//                 variant="outline"
//                 size="lg"
//                 className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-w-[180px]"
//                 aria-live="polite"
//               >
//                 {copied ? "Copied!" : "Email Us Directly"}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
