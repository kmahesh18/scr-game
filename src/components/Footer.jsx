import { FaLinkedin, FaGithub, FaTwitter, FaGlobe, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { href: "https://www.linkedin.com/in/sharad-chandra-reddy-b0737a231/", icon: <FaLinkedin /> },
  { href: "https://github.com/SCR01", icon: <FaGithub /> },
  { href: "https://portfolio-scr.vercel.app/", icon: <FaGlobe /> },
  { href: "https://x.com/home", icon: <FaTwitter /> },
  { href: "mailto:scr.contact@email.com", icon: <FaEnvelope /> },
];

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#1a1a2e] text-white py-10 px-4 md:px-12 border-t border-[#333]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <img src="/img/logo.png" alt="SCR Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">SCR Gaming</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Made with ❤️ using React, GSAP & Tailwind CSS
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400">Connect with us:</p>
          <div className="flex gap-5 text-2xl">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Footer Info */}
        <div className="text-center md:text-right">
          <a
            href="#privacy-policy"
            className="block text-sm text-gray-400 hover:underline mb-1"
          >
            Privacy Policy
          </a>
          <p className="text-sm text-gray-500">
            © 2025 SCR Gaming. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
