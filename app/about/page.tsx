// import { Target, Lightbulb, Bot, Code, Rocket, CheckCircle } from "lucide-react"

// export default function AboutPage() {
//   return (
//     <div className="pt-16 fade-in">
//       {/* Hero Section */}
//       <section className="py-20 hero-gradient">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">About Tecsaro Digital</h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//            Tecsaro Digital is a forward-thinking AI & SaaS solutions agency focused on building smart, scalable, and impactful digital products. We help startups, entrepreneurs, and businesses automate workflows, enhance user experiences, and launch powerful products — from MVPs to full-scale SaaS platforms.

// We’re also building our own in-house products to solve real-world problems using cutting-edge technology — starting with education, automation, and healthcare.
//           </p>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             <div>
//               <div className="flex items-center mb-6">
//                 <Target className="h-8 w-8 text-accent-blue mr-3" />
//                 <h2 className="text-3xl font-bold">Our Vision</h2>
//               </div>
//               <p className="text-lg text-gray-400 leading-relaxed">
//                To empower the world through intelligent technology — making complex problems simple with AI, automation, and product innovation.
// We envision a future where businesses and individuals use smart tools not just to survive, but to grow faster, learn better, and operate smarter.
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center mb-6">
//                 <Lightbulb className="h-8 w-8 text-accent-blue mr-3" />
//                 <h2 className="text-3xl font-bold">Our Mission</h2>
//               </div>
//               <p className="text-lg text-gray-400 leading-relaxed">
//                 To deliver smart AI-powered solutions and build high-impact SaaS products that solve real problems, delight users, and create long-term value.
//                 We aim to:
//                 Help startups launch faster with smart MVPs.
//                 Automate businesses through AI agents and chatbots.
//                 Build our own SaaS platforms that change how people learn, work, and grow.
//                 Create tools that are fast, user-friendly, and built with purpose.

//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What We Specialize In */}
//       <section className="py-20 bg-card-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Specialize In</h2>
//             <p className="text-xl text-gray-400">Our core expertise and technology focus areas</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-bg-primary p-8 rounded-xl border border-border-color text-center">
//               <Bot className="h-12 w-12 text-accent-blue mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-4">AI Chatbots & Agents</h3>
//               <p className="text-gray-400">
//                 Building intelligent conversational AI that handles customer support, sales, and lead generation with
//                 natural language processing and machine learning.
//               </p>
//             </div>

//             <div className="bg-bg-primary p-8 rounded-xl border border-border-color text-center">
//               <Code className="h-12 w-12 text-accent-blue mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-4">SaaS Platforms</h3>
//               <p className="text-gray-400">
//                 Full-stack SaaS development with modern technologies, scalable architecture, subscription management,
//                 and enterprise-grade security.
//               </p>
//             </div>

//             <div className="bg-bg-primary p-8 rounded-xl border border-border-color text-center">
//               <Rocket className="h-12 w-12 text-accent-blue mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-4">MVP Development</h3>
//               <p className="text-gray-400">
//                 Rapid prototyping and MVP development for startups, helping founders validate ideas, secure funding, and
//                 get to market quickly.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Approach */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Approach</h2>
//             <p className="text-xl text-gray-400">How we deliver innovative solutions for startups and founders</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-accent-blue">1</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
//               <p className="text-gray-400">
//                 We stay at the forefront of AI and technology trends, incorporating the latest innovations into every
//                 solution we build.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-accent-blue">2</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Rapid Development</h3>
//               <p className="text-gray-400">
//                 Our agile development process ensures fast delivery without compromising quality, helping you get to
//                 market quickly.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-accent-blue">3</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Startup Focus</h3>
//               <p className="text-gray-400">
//                 We understand the unique challenges startups face and tailor our solutions to help founders succeed and
//                 scale.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Tecsaro */}
//       <section className="py-20 bg-card-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Tecsaro Digital</h2>
//             <p className="text-xl text-gray-400">What sets us apart in the AI and SaaS development space</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="flex items-start space-x-4">
//               <CheckCircle className="h-6 w-6 text-accent-blue mt-1 flex-shrink-0" />
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">Cutting-Edge Technology</h3>
//                 <p className="text-gray-400">
//                   We use the latest AI frameworks, modern development stacks, and cloud technologies to build scalable,
//                   future-proof solutions.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <CheckCircle className="h-6 w-6 text-accent-blue mt-1 flex-shrink-0" />
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">Startup Expertise</h3>
//                 <p className="text-gray-400">
//                   Our team understands the startup ecosystem and builds solutions that help founders validate ideas,
//                   attract investors, and scale rapidly.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <CheckCircle className="h-6 w-6 text-accent-blue mt-1 flex-shrink-0" />
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">AI-First Approach</h3>
//                 <p className="text-gray-400">
//                   Every solution we build incorporates intelligent automation and AI capabilities to give your business
//                   a competitive advantage.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <CheckCircle className="h-6 w-6 text-accent-blue mt-1 flex-shrink-0" />
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">End-to-End Solutions</h3>
//                 <p className="text-gray-400">
//                   From initial concept to deployment and scaling, we provide comprehensive development services for your
//                   entire project lifecycle.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Build the Future?</h2>
//           <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
//             Let's discuss your project and see how Tecsaro Digital can help you build innovative AI solutions and
//             SaaS platforms.
//           </p>
//           <a
//             href="mailto:info@tecsaro.com"
//             className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Get In Touch
//           </a>
//         </div>
//       </section>
//     </div>
//   )
// }


import {
  Target,
  Lightbulb,
  Bot,
  Code,
  Rocket,
  CheckCircle,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-16 fade-in">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-wrap balance">
            About Tecsaro Digital
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Tecsaro Digital is a forward-thinking AI & SaaS solutions agency focused on building smart, scalable,
            and impactful digital products. We help startups, entrepreneurs, and businesses automate workflows, enhance
            user experiences, and launch powerful products — from MVPs to full-scale SaaS platforms. We’re also building
            our own in-house products to solve real-world problems using cutting-edge technology — starting with
            education, automation, and healthcare.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-accent-blue mr-3" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed">
              To empower the world through intelligent technology — making complex problems simple with AI, automation,
              and product innovation. We envision a future where businesses and individuals use smart tools not just to
              survive, but to grow faster, learn better, and operate smarter.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Lightbulb className="h-8 w-8 text-accent-blue mr-3" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed">
              To deliver smart AI-powered solutions and build high-impact SaaS products that solve real problems,
              delight users, and create long-term value.
              <br />
              <br />
              We aim to:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Help startups launch faster with smart MVPs.</li>
                <li>Automate businesses through AI agents and chatbots.</li>
                <li>Build our own SaaS platforms that change how people learn, work, and grow.</li>
                <li>Create tools that are fast, user-friendly, and built with purpose.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* What We Specialize In */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Specialize In</h2>
          <p className="text-xl text-gray-400 mb-12">Our core expertise and technology focus areas</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                Icon: Bot,
                title: "AI Chatbots & Agents",
                desc: "Building intelligent conversational AI that handles customer support, sales, and lead generation.",
              },
              {
                Icon: Code,
                title: "SaaS Platforms",
                desc: "Full-stack SaaS development with modern tech, scalable architecture, and enterprise security.",
              },
              {
                Icon: Rocket,
                title: "MVP Development",
                desc: "Rapid prototyping for startups to validate ideas and go to market faster.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-bg-primary p-8 rounded-xl border border-border-color text-center">
                <Icon className="h-12 w-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Approach</h2>
          <p className="text-xl text-gray-400 mb-12">
            How we deliver innovative solutions for startups and founders
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Innovation First",
                desc: "We stay at the forefront of AI and technology trends, adding cutting-edge tech into every solution.",
              },
              {
                number: "2",
                title: "Rapid Development",
                desc: "Agile processes ensure fast delivery while maintaining high quality.",
              },
              {
                number: "3",
                title: "Startup Focus",
                desc: "We tailor each solution to help founders launch, validate, and scale with confidence.",
              },
            ].map(({ number, title, desc }) => (
              <div key={number} className="text-center">
                <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-blue">{number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tecsaro */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Tecsaro Digital</h2>
          <p className="text-xl text-gray-400 mb-12">
            What sets us apart in the AI and SaaS development space
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Cutting-Edge Technology",
                desc: "We use the latest frameworks, stacks, and cloud tech to build scalable solutions.",
              },
              {
                title: "Startup Expertise",
                desc: "We understand startup challenges and build with fundraising, scaling, and speed in mind.",
              },
              {
                title: "AI-First Approach",
                desc: "All our solutions are infused with intelligent automation and smart decision-making.",
              },
              {
                title: "End-to-End Solutions",
                desc: "From concept to launch, we offer full lifecycle product development services.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-accent-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how Tecsaro Digital can help you build innovative AI solutions and
            SaaS platforms.
          </p>
          <a
            href="mailto:info@tecsaro.com"
            className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
