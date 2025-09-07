
  

import Link from "next/link";
import {
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/tecsaro-digital/",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/tecsaro_digital/",
    },
    {
      icon: Twitter,
      href: "https://x.com/tecsaro",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@tecsaro_digital",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1C9m6DpxvE/",
    },
  ];

  return (
    <footer className="bg-card-bg border-t border-border-color text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="/tecsarologo.png"
                alt="Tecsaro Logo"
                width={120}
                height={120}
                className="object-contain"
              />
              <p className="text-sm max-w-[300px]">
                Building cutting-edge AI tools, chatbot solutions, and SaaS platforms.
                Specializing in MVP development for startups and founders.
              </p>
            </div>
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors p-1.5 hover:bg-accent-blue/10 rounded-lg"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
<div className="space-y-3">
  <h3 className="text-base font-semibold text-white">Quick Links</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link href="/about" className="hover:text-accent-blue transition-colors">
        About Us
      </Link>
    </li>
    <li>
      <Link href="/services" className="hover:text-accent-blue transition-colors">
        Services
      </Link>
    </li>
    <li>
      <Link href="/blog" className="hover:text-accent-blue transition-colors">
        Blog
      </Link>
    </li>
    <li>
      <Link href="/contact" className="hover:text-accent-blue transition-colors">
        Contact
      </Link>
    </li>
  </ul>
</div>


          {/* Services */}
          <div className="space-y-3">
  <h3 className="text-base font-semibold text-white">Services</h3>
  <ul className="space-y-2 text-sm">
    {['AI Chatbots', 'SaaS Development', 'MVP Development', 'Consulting'].map(
      (service) => (
        <li key={service}>
          <Link
            href="/services"
            className="hover:text-accent-blue transition-colors"
          >
            {service}
          </Link>
        </li>
      )
    )}
  </ul>
</div>

        </div>

        {/* Divider */}
        <div className="border-t border-border-color mt-8 pt-6" />

        {/* Bottom Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-6">
          <div>
            © {new Date().getFullYear()} Tecsaro Digital. All rights reserved.
          </div>

          <div className="md:col-start-3 flex justify-end">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:info@tecsaro.com" 
                className="hover:text-accent-blue transition-colors whitespace-nowrap"
              >
                info@tecsaro.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
