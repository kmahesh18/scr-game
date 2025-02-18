import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/sharad-chandra-reddy-b0737a231/", icon: <FaLinkedin /> },
  { href: "https://github.com/SCR01", icon: <FaGithub /> },
  { href: "https://portfolio-scr.vercel.app/", icon: <FaGlobe /> },
  { href: "https://x.com/home", icon: <FaTwitter /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©SCR 2024. All rights reserved
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
