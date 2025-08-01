// "use client"

// import type React from "react"

// import { useState } from "react"
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

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       const response = await fetch("/api/contacts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         setSubmitted(true)
//         setFormData({ name: "", email: "", message: "" })
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })
  // }

// "use client"

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
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       await addDoc(collection(db, "contacts"), {
//         name: formData.name,
//         email: formData.email,
//         message: formData.message,
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
//       <section className="py-20 hero-gradient">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Ready to transform your business? Get in touch with our experts to discuss your challenges and
//             opportunities.
//           </p>
//         </div>
//       </section>

//       {/* Contact Form & Info */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {/* Contact Form */}
//             <div>
//               <h2 className="text-3xl font-bold mb-8">Send us a message</h2>

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
//                     <label htmlFor="name" className="block text-sm font-medium mb-2">
//                       Full Name
//                     </label>
//                     <Input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="bg-card-bg border-border-color text-text-primary"
//                       placeholder="Your full name"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium mb-2">
//                       Email Address
//                     </label>
//                     <Input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="bg-card-bg border-border-color text-text-primary"
//                       placeholder="your.email@company.com"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={6}
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

//             {/* Contact Information */}
//             <div>
//               <h2 className="text-3xl font-bold mb-8">Get in touch</h2>

//               <div className="space-y-8">
//                 <div className="flex items-start space-x-4">
//                   <MapPin className="h-6 w-6 text-accent-blue mt-1" />
//                   <div>
//                     <h3 className="font-semibold mb-1">Office Location</h3>
//                     <p className="text-gray-400">
//                       Santosh Nagar
//                       <br />
//                       Hyderabad, India
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <Mail className="h-6 w-6 text-accent-blue mt-1" />
//                   <div>
//                     <h3 className="font-semibold mb-1">Email</h3>
//                     <p className="text-gray-400">
//                       <a href="mailto:saba@tecsaro.com" className="hover:text-accent-blue transition-colors">
//                         info@tecsaro.com
//                       </a>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <Clock className="h-6 w-6 text-accent-blue mt-1" />
//                   <div>
//                     <h3 className="font-semibold mb-1">Business Hours</h3>
//                     <p className="text-gray-400">
//                       Monday - Friday: 9:00 AM - 6:00 PM
//                       <br />
//                       Saturday: 10:00 AM - 2:00 PM
//                       <br />
//                       Sunday: Closed
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-6 text-center">
//                 <h3 className="font-semibold mb-2 text-accent-blue">Ready to Collaborate?</h3>
//                 <p className="text-gray-400">
//                   Reach out to us at{" "}
//                   <a href="mailto:saba@tecsaro.com" className="text-accent-blue hover:underline">
//                     info@tecsaro.com
//                   </a>{" "}
//                   to collaborate or learn more about our services.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }






'use client'

import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"

import { MapPin, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      })

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error saving to Firebase:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16 fade-in">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 hero-gradient text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our experts to discuss your challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Send us a message</h2>

              {submitted ? (
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Thank you!</h3>
                  <p className="text-gray-300">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-card-bg border-border-color text-text-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-card-bg border-border-color text-text-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-card-bg border-border-color text-text-primary"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-blue hover:bg-blue-700 text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in touch</h2>

              <div className="space-y-8">
                <ContactItem
                  icon={<MapPin className="h-6 w-6 text-accent-blue" />}
                  title="Office Location"
                  content={["Santosh Nagar", "Hyderabad, India"]}
                />
                <ContactItem
                  icon={<Mail className="h-6 w-6 text-accent-blue" />}
                  title="Email"
                  content={[
                    <a
                      href="mailto:info@tecsaro.com"
                      key="email"
                      className="hover:text-accent-blue transition-colors"
                    >
                      info@tecsaro.com
                    </a>,
                  ]}
                />
                <ContactItem
                  icon={<Clock className="h-6 w-6 text-accent-blue" />}
                  title="Business Hours"
                  content={[
                    "Mon - Fri: 9:00 AM - 6:00 PM",
                    "Sat: 10:00 AM - 2:00 PM",
                    "Sunday: Closed",
                  ]}
                />
              </div>

              <div className="mt-8 bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-6 text-center">
                <h3 className="font-semibold mb-2 text-accent-blue">Ready to Collaborate?</h3>
                <p className="text-gray-400">
                  Reach out at{" "}
                  <a href="mailto:info@tecsaro.com" className="text-accent-blue hover:underline">
                    info@tecsaro.com
                  </a>{" "}
                  to explore how we can work together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactItem({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode[] }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <div className="text-gray-400 space-y-1">
          {content.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
