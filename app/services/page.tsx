"use client"

import { Bot, Code, Rocket, Brain, MessageSquare, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: 1,
    title: "AI Chatbots & Virtual Agents",
    description:
      "Intelligent conversational AI that handles customer support, lead generation, and sales automation 24/7 with natural language processing.",
    icon: Bot,
    features: [
      "Natural Language Processing",
      "Multi-platform Integration",
      "Lead Qualification & Scoring",
      "24/7 Customer Support",
      "Analytics & Reporting",
      "Custom Training & Optimization",
    ],
    benefits: [
      "Reduce response time by 90%",
      "Handle 80% of customer inquiries automatically",
      "Increase lead conversion by 35%",
      "Available 24/7 across all channels",
    ],
  },
  {
    id: 2,
    title: "SaaS Platform Development",
    description:
      "Full-stack SaaS platforms built with modern technologies, scalable architecture, and enterprise-grade security features.",
    icon: Code,
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "API Development & Integration",
      "Real-time Analytics Dashboard",
      "Security & Compliance",
      "Mobile-responsive Design",
    ],
    benefits: [
      "Scalable from day one",
      "Enterprise-ready security",
      "Faster time to market",
      "Built-in payment processing",
    ],
  },
  {
    id: 3,
    title: "MVP Development",
    description:
      "Rapid prototyping and MVP development to validate your ideas, attract investors, and get to market quickly with minimal resources.",
    icon: Rocket,
    features: [
      "Rapid Prototyping",
      "User Testing & Feedback",
      "Iterative Development",
      "Market Validation",
      "Investor-ready Demos",
      "Scalable Foundation",
    ],
    benefits: [
      "Launch in 4-8 weeks",
      "Validate ideas with real users",
      "Attract investors and funding",
      "Minimize development risks",
    ],
  },
  {
    id: 4,
    title: "AI Automation Tools",
    description:
      "Custom AI solutions and automation tools that streamline business processes, reduce manual work, and increase operational efficiency.",
    icon: Brain,
    features: [
      "Process Automation",
      "Intelligent Document Processing",
      "Predictive Analytics",
      "Workflow Optimization",
      "Data Analysis & Insights",
      "Custom AI Model Training",
    ],
    benefits: [
      "Reduce manual work by 70%",
      "Improve accuracy and consistency",
      "Generate actionable insights",
      "Scale operations efficiently",
    ],
  },
  {
    id: 5,
    title: "Smart Messaging Systems",
    description:
      "Intelligent pop-up messages, email automation, and multi-channel communication systems that engage users at the right moment.",
    icon: MessageSquare,
    features: [
      "Behavioral Targeting",
      "Exit-Intent Detection",
      "A/B Testing & Optimization",
      "Multi-channel Campaigns",
      "Personalization Engine",
      "Real-time Analytics",
    ],
    benefits: [
      "Increase conversion rates by 25%",
      "Reduce cart abandonment",
      "Improve user engagement",
      "Personalized user experiences",
    ],
  },
  {
    id: 6,
    title: "Custom AI Solutions",
    description:
      "Tailored artificial intelligence solutions designed specifically for your business needs, industry requirements, and unique challenges.",
    icon: Zap,
    features: [
      "Custom AI Model Development",
      "Industry-specific Solutions",
      "API Integration & Development",
      "Training & Support",
      "Continuous Optimization",
      "Scalable Architecture",
    ],
    benefits: [
      "Solve unique business challenges",
      "Competitive advantage through AI",
      "Tailored to your specific needs",
      "Ongoing support and optimization",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16 fade-in">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI chatbots to complete SaaS platforms, we build cutting-edge solutions that automate processes, engage
            customers, and drive business growth for startups and established companies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card-bg rounded-xl border border-border-color overflow-hidden card-hover"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent-blue/20 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-accent-blue" />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-accent-blue mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-400 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-accent-blue hover:bg-blue-700 text-white">
                    <Link href="/contact">
                      Get Started with {service.title.split(" ")[0]} {service.title.split(" ")[1]}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-400">How we deliver exceptional results for every project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery & Planning</h3>
              <p className="text-gray-400">
                We understand your business needs, target audience, and project goals to create a comprehensive
                development strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Design & Prototyping</h3>
              <p className="text-gray-400">
                Our team creates user-centric designs and interactive prototypes to validate concepts before development
                begins.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Development & Testing</h3>
              <p className="text-gray-400">
                We build your solution using cutting-edge technologies with rigorous testing to ensure quality and
                performance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-blue">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Launch & Support</h3>
              <p className="text-gray-400">
                We ensure smooth deployment and provide ongoing support to help you maximize your solution's potential
                and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Build Your Solution?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our AI and automation solutions can transform your business ideas
            into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-blue hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border-color text-text-primary hover:bg-card-bg px-8 py-4 text-lg"
            >
              <a href="mailto:saba@tecsaro.com">Email Us Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}



// 'use client'

// import { useState } from "react"
// import { collection, addDoc, serverTimestamp } from "firebase/firestore"
// import { db } from "@/lib/firebase"

// import { MapPin, Mail, Clock } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       await addDoc(collection(db, "contacts"), {
//         ...formData,
//         createdAt: serverTimestamp(),
//       })

//       setSubmitted(true)
//       setFormData({ name: "", email: "", message: "" })
//     } catch (error) {
//       console.error("Error saving to Firebase:", error)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="pt-16 fade-in">
//       {/* Hero Section */}
//       <section className="py-16 sm:py-20 hero-gradient text-center px-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">Contact Us</h1>
//           <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
//             Ready to transform your business? Get in touch with our experts to discuss your challenges and opportunities.
//           </p>
//         </div>
//       </section>

//       {/* Form & Info */}
//       <section className="py-16 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
//             {/* Contact Form */}
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold mb-6">Send us a message</h2>

//               {submitted ? (
//                 <div className="bg-green-900/20 border border-green-500 rounded-lg p-6 text-center">
//                   <h3 className="text-xl font-semibold text-green-400 mb-2">Thank you!</h3>
//                   <p className="text-gray-300">
//                     Your message has been sent successfully. We'll get back to you soon.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
//                     <Input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="bg-card-bg border-border-color text-text-primary"
//                       placeholder="Your full name"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="bg-card-bg border-border-color text-text-primary"
//                       placeholder="your@email.com"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       rows={6}
//                       required
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="bg-card-bg border-border-color text-text-primary"
//                       placeholder="Tell us about your project or how we can help..."
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-accent-blue hover:bg-blue-700 text-white"
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </Button>
//                 </form>
//               )}
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in touch</h2>

//               <div className="space-y-8">
//                 <ContactItem
//                   icon={<MapPin className="h-6 w-6 text-accent-blue" />}
//                   title="Office Location"
//                   content={["Santosh Nagar", "Hyderabad, India"]}
//                 />
//                 <ContactItem
//                   icon={<Mail className="h-6 w-6 text-accent-blue" />}
//                   title="Email"
//                   content={[
//                     <a
//                       href="mailto:info@tecsaro.com"
//                       key="email"
//                       className="hover:text-accent-blue transition-colors"
//                     >
//                       info@tecsaro.com
//                     </a>,
//                   ]}
//                 />
//                 <ContactItem
//                   icon={<Clock className="h-6 w-6 text-accent-blue" />}
//                   title="Business Hours"
//                   content={[
//                     "Mon - Fri: 9:00 AM - 6:00 PM",
//                     "Sat: 10:00 AM - 2:00 PM",
//                     "Sunday: Closed",
//                   ]}
//                 />
//               </div>

//               <div className="mt-8 bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-6 text-center">
//                 <h3 className="font-semibold mb-2 text-accent-blue">Ready to Collaborate?</h3>
//                 <p className="text-gray-400">
//                   Reach out at{" "}
//                   <a href="mailto:info@tecsaro.com" className="text-accent-blue hover:underline">
//                     info@tecsaro.com
//                   </a>{" "}
//                   to explore how we can work together.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function ContactItem({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode[] }) {
//   return (
//     <div className="flex items-start space-x-4">
//       <div className="mt-1">{icon}</div>
//       <div>
//         <h3 className="font-semibold mb-1">{title}</h3>
//         <div className="text-gray-400 space-y-1">
//           {content.map((line, i) => (
//             <div key={i}>{line}</div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
