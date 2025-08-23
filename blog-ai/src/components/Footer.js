import React from "react";

export default function Footer() {
  const footerData = {
    about: {
      logo: "/logo.png",
      description:
        "Blog AI is a blogging platform that allows users to create, share, and discover blogs on various topics. It provides a user-friendly interface for writing and publishing content, as well as features for engaging with readers through comments and social sharing. Whether you're a seasoned writer or just starting out, Blog AI offers tools to help you express your ideas and connect with an audience.",
    },
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    categories: [
      { label: "Technology", href: "/category/technology" },
      { label: "StartUp", href: "/category/startup" },
      { label: "Lifestyle", href: "/category/lifestyle" },
      { label: "Finance", href: "/category/finance" },
      { label: "AI & Machine Learning", href: "/category/ai" },
    ],
    socialLinks: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
    copyright: "Copyright 2025 © Blog AI - Daksh Jain All Rights Reserved",
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">

        {/* About Section */}
        <div className="flex flex-col items-start max-w-[350px]">
          <img
            src={footerData.about.logo}
            alt="Blog AI logo"
            className="w-28 sm:w-36"
          />
          <p className="mt-6">{footerData.about.description}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {footerData.quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-primary transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2">
            {footerData.categories.map((cat) => (
              <li key={cat.label}>
                <a
                  href={cat.href}
                  className="hover:text-primary transition"
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2">
            {footerData.socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500">
        {footerData.copyright}
      </p>
    </div>
  );
}
