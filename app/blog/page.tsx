// 'use client'

// import Link from "next/link"
// import { User, ArrowRight } from "lucide-react"

// const blogPosts = [
//   {
//     id: 1,
//     title: "What Is a Chatbot and How Does It Work?",
//     excerpt:
//       "Discover the fundamentals of chatbot technology, from basic rule-based systems to advanced AI-powered conversational agents that are transforming customer interactions.",
//     author: "Tecsaro Team",
//     category: "AI Basics",
//     readTime: "5 min read",
//   },
//   {
//     id: 2,
//     title: "Why Your Business Needs a Chatbot Today",
//     excerpt:
//       "Explore the compelling business reasons to implement chatbots, from 24/7 customer support to lead generation and cost reduction benefits.",
//     author: "Tecsaro Team",
//     category: "Business Strategy",
//     readTime: "6 min read",
//   },
//   {
//     id: 3,
//     title: "AI vs Rule-Based Chatbots: What's the Difference?",
//     excerpt:
//       "Understanding the key differences between traditional rule-based chatbots and modern AI-powered conversational agents, and when to use each approach.",
//     author: "Tecsaro Team",
//     category: "Technology",
//     readTime: "7 min read",
//   },
  
//   {
//     id: 4,
//     title: "How Chatbots Improve Customer Experience",
//     excerpt:
//       "Learn how intelligent chatbots enhance customer satisfaction through instant responses, personalized interactions, and seamless support experiences.",
//     author: "Tecsaro Team",
//     category: "Customer Experience",
//     readTime: "6 min read",
//   },
//   {
//     id: 5,
//     title: "Building AI Agents for Customer Support & Sales",
//     excerpt:
//       "Deep dive into creating sophisticated AI agents that can handle complex customer support scenarios and drive sales through intelligent conversations.",
//     author: "Tecsaro Team",
//     category: "AI Agents",
//     readTime: "8 min read",
//   },
  

//   {
//     id: 6,
//     title: "What Makes a Successful MVP in Tech Startups",
//     excerpt:
//       "Key principles for building minimum viable products that validate your startup idea, attract investors, and provide a foundation for future growth.",
//     author: "Tecsaro Team",
//     category: "MVP",
//     readTime: "9 min read",
//   },
//   {
//     id: 7,
//     title: "How AI Is Reshaping SaaS in 2025",
//     excerpt:
//       "Explore the latest AI trends transforming the SaaS industry, from intelligent automation to predictive analytics and personalized user experiences.",
//     author: "Tecsaro Team",
//     category: "AI Trends",
//     readTime: "7 min read",
//   },
//   {
//     id: 8,
//     title: "Best Use Cases of Chatbots in Real Businesses",
//     excerpt:
//       "Real-world examples of successful chatbot implementations across industries, showcasing practical applications and measurable business results.",
//     author: "Tecsaro Team",
//     category: "Case Studies",
//     readTime: "8 min read",
//   },
// ]

// export default function BlogPage() {
//   return (
//     <div className="pt-16 fade-in">
//       {/* Hero Section */}
//       <section className="py-20 hero-gradient">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">Tecsaro Blog</h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Insights, guides, and expert perspectives on AI, chatbots, SaaS development, and startup growth strategies.
//           </p>
//         </div>
//       </section>

//       {/* Blog Posts Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map((post) => (
//               <article
//                 key={post.id}
//                 className="bg-card-bg rounded-xl border border-border-color overflow-hidden card-hover"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center text-sm text-gray-400 mb-3">
//                     <span className="bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full text-xs font-medium">
//                       {post.category}
//                     </span>
//                     <span className="ml-auto">{post.readTime}</span>
//                   </div>

//                   <h2 className="text-xl font-semibold mb-3 line-clamp-2">
//                     <Link href={`/blog/${post.id}`} className="hover:text-accent-blue transition-colors">
//                       {post.title}
//                     </Link>
//                   </h2>

//                   <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

//                   <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
//                     <div className="flex items-center">
//                       <User className="h-4 w-4 mr-1" />
//                       <span>{post.author}</span>
//                     </div>
//                   </div>

//                   <Link
//                     href={`/blog/${post.id}`}
//                     className="inline-flex items-center text-accent-blue hover:underline font-medium"
//                   >
//                     Read More <ArrowRight className="ml-1 h-4 w-4" />
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


// 'use client'

// import Link from "next/link"
// import { User, ArrowRight } from "lucide-react"

// const blogPosts = [
//   {
//     id: 1,
//     title: "What Is a Chatbot and How Does It Work?",
//     excerpt:
//       "Discover the fundamentals of chatbot technology, from basic rule-based systems to advanced AI-powered conversational agents that are transforming customer interactions.",
//     author: "Tecsaro Team",
//     category: "AI Basics",
//     readTime: "5 min read",
//   },
//   {
//     id: 2,
//     title: "Why Your Business Needs a Chatbot Today",
//     excerpt:
//       "Explore the compelling business reasons to implement chatbots, from 24/7 customer support to lead generation and cost reduction benefits.",
//     author: "Tecsaro Team",
//     category: "Business Strategy",
//     readTime: "6 min read",
//   },
//   {
//     id: 3,
//     title: "AI vs Rule-Based Chatbots: What's the Difference?",
//     excerpt:
//       "Understanding the key differences between traditional rule-based chatbots and modern AI-powered conversational agents, and when to use each approach.",
//     author: "Tecsaro Team",
//     category: "Technology",
//     readTime: "7 min read",
//   },
//   {
//     id: 4,
//     title: "How Chatbots Improve Customer Experience",
//     excerpt:
//       "Learn how intelligent chatbots enhance customer satisfaction through instant responses, personalized interactions, and seamless support experiences.",
//     author: "Tecsaro Team",
//     category: "Customer Experience",
//     readTime: "6 min read",
//   },
//   {
//     id: 5,
//     title: "Building AI Agents for Customer Support & Sales",
//     excerpt:
//       "Deep dive into creating sophisticated AI agents that can handle complex customer support scenarios and drive sales through intelligent conversations.",
//     author: "Tecsaro Team",
//     category: "AI Agents",
//     readTime: "8 min read",
//   },
//   {
//     id: 6,
//     title: "What Makes a Successful MVP in Tech Startups",
//     excerpt:
//       "Key principles for building minimum viable products that validate your startup idea, attract investors, and provide a foundation for future growth.",
//     author: "Tecsaro Team",
//     category: "MVP",
//     readTime: "9 min read",
//   },
//   {
//     id: 7,
//     title: "How AI Is Reshaping SaaS in 2025",
//     excerpt:
//       "Explore the latest AI trends transforming the SaaS industry, from intelligent automation to predictive analytics and personalized user experiences.",
//     author: "Tecsaro Team",
//     category: "AI Trends",
//     readTime: "7 min read",
//   },
//   {
//     id: 8,
//     title: "Best Use Cases of Chatbots in Real Businesses",
//     excerpt:
//       "Real-world examples of successful chatbot implementations across industries, showcasing practical applications and measurable business results.",
//     author: "Tecsaro Team",
//     category: "Case Studies",
//     readTime: "8 min read",
//   },
// ]

// export default function BlogPage() {
//   return (
//     <div className="pt-16 fade-in">
//       {/* Hero Section */}
//       <section className="py-16 sm:py-20 hero-gradient text-center px-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
//             Tecsaro Blog
//           </h1>
//           <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
//             Insights, guides, and expert perspectives on AI, chatbots, SaaS development, and startup growth strategies.
//           </p>
//         </div>
//       </section>

//       {/* Blog Posts Grid */}
//       <section className="py-16 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {blogPosts.map((post) => (
//               <article
//                 key={post.id}
//                 className="bg-card-bg rounded-xl border border-border-color shadow-sm overflow-hidden transition-transform duration-200 hover:scale-[1.01]"
//               >
//                 <div className="p-6 flex flex-col h-full">
//                   <div className="flex items-center text-xs text-gray-400 mb-3">
//                     <span className="bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full font-medium">
//                       {post.category}
//                     </span>
//                     <span className="ml-auto">{post.readTime}</span>
//                   </div>

//                   <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
//                     <Link
//                       href={`/blog/${post.id}`}
//                       className="hover:text-accent-blue transition-colors"
//                     >
//                       {post.title}
//                     </Link>
//                   </h2>

//                   <p className="text-sm text-gray-400 mb-4 line-clamp-3">
//                     {post.excerpt}
//                   </p>

//                   <div className="flex items-center text-sm text-gray-400 mt-auto">
//                     <User className="h-4 w-4 mr-1" />
//                     <span>{post.author}</span>
//                   </div>

//                   <Link
//                     href={`/blog/${post.id}`}
//                     className="inline-flex items-center text-accent-blue hover:underline font-medium text-sm mt-3"
//                   >
//                     Read More <ArrowRight className="ml-1 h-4 w-4" />
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



'use client'

import Head from "next/head"
import Link from "next/link"
import { User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "What Is a Chatbot and How Does It Work?",
    excerpt:
      "Discover the fundamentals of chatbot technology, from basic rule-based systems to advanced AI-powered conversational agents that are transforming customer interactions.",
    author: "Tecsaro Team",
    category: "AI Basics",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Chatbot Today",
    excerpt:
      "Explore the compelling business reasons to implement chatbots, from 24/7 customer support to lead generation and cost reduction benefits.",
    author: "Tecsaro Team",
    category: "Business Strategy",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "AI vs Rule-Based Chatbots: What's the Difference?",
    excerpt:
      "Understanding the key differences between traditional rule-based chatbots and modern AI-powered conversational agents, and when to use each approach.",
    author: "Tecsaro Team",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "How Chatbots Improve Customer Experience",
    excerpt:
      "Learn how intelligent chatbots enhance customer satisfaction through instant responses, personalized interactions, and seamless support experiences.",
    author: "Tecsaro Team",
    category: "Customer Experience",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Building AI Agents for Customer Support & Sales",
    excerpt:
      "Deep dive into creating sophisticated AI agents that can handle complex customer support scenarios and drive sales through intelligent conversations.",
    author: "Tecsaro Team",
    category: "AI Agents",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "What Makes a Successful MVP in Tech Startups",
    excerpt:
      "Key principles for building minimum viable products that validate your startup idea, attract investors, and provide a foundation for future growth.",
    author: "Tecsaro Team",
    category: "MVP",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "How AI Is Reshaping SaaS in 2025",
    excerpt:
      "Explore the latest AI trends transforming the SaaS industry, from intelligent automation to predictive analytics and personalized user experiences.",
    author: "Tecsaro Team",
    category: "AI Trends",
    readTime: "7 min read",
  },
  {
    id: 8,
    title: "Best Use Cases of Chatbots in Real Businesses",
    excerpt:
      "Real-world examples of successful chatbot implementations across industries, showcasing practical applications and measurable business results.",
    author: "Tecsaro Team",
    category: "Case Studies",
    readTime: "8 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Tecsaro Blog: AI, Chatbots, SaaS & Startup Growth Insights</title>
        <meta
          name="description"
          content="Explore expert articles and guides on AI chatbots, SaaS development, MVPs, and startup growth strategies from Tecsaro Technologies."
        />
        <meta
          name="keywords"
          content="AI blog, chatbot technology, SaaS development, startup growth, MVP, AI agents, customer support automation"
        />
        <meta name="author" content="Tecsaro Technologies" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Tecsaro Blog: AI, Chatbots, SaaS & Startup Growth Insights" />
        <meta
          property="og:description"
          content="Explore expert articles and guides on AI chatbots, SaaS development, MVPs, and startup growth strategies from Tecsaro Technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tecsaro.com/blog" />
        <meta property="og:image" content="https://www.tecsaro.com/og-image-blog.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tecsaro Blog: AI, Chatbots, SaaS & Startup Growth Insights" />
        <meta
          name="twitter:description"
          content="Explore expert articles and guides on AI chatbots, SaaS development, MVPs, and startup growth strategies from Tecsaro Technologies."
        />
        <meta name="twitter:image" content="https://www.tecsaro.com/og-image-blog.jpg" />
      </Head>

      <div className="pt-16 fade-in">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 hero-gradient text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">Tecsaro Blog</h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Insights, guides, and expert perspectives on AI, chatbots, SaaS development, and startup growth strategies.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card-bg rounded-xl border border-border-color shadow-sm overflow-hidden transition-transform duration-200 hover:scale-[1.01]"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                      <span className="bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="ml-auto">{post.readTime}</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-accent-blue transition-colors">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center text-sm text-gray-400 mt-auto">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-accent-blue hover:underline font-medium text-sm mt-3"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
