import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";
import { FaLinkedinIn, FaGithub, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-8"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 10vw, 120px)" }}
            >
              Let&apos;s work
              <br />
              together
            </h2>

            <p
              className="text-[#D7E2EA]/70 font-light max-w-lg leading-relaxed"
              style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}
            >
              Have a project in mind or just want to say hello? I&apos;d love to
              hear from you. Let&apos;s create something extraordinary.
            </p>

            {/* Contact Details */}
            <FadeIn delay={0.15} y={20}>
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                <a
                  href="mailto:sabbirh9990@gmail.com"
                  className="flex items-center gap-3 text-[#D7E2EA]/80 hover:text-white transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7621B0]/15 border border-[#7621B0]/25 group-hover:bg-[#7621B0]/25 transition-colors duration-300">
                    <Mail size={18} className="text-[#7621B0]" />
                  </div>
                  <span className="text-sm md:text-base font-light">
                    sabbirh9990@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+8801815507808"
                  className="flex items-center gap-3 text-[#D7E2EA]/80 hover:text-white transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#42fcff]/8 border border-[#42fcff]/15 group-hover:bg-[#42fcff]/15 transition-colors duration-300">
                    <Phone size={18} className="text-[#42fcff]" />
                  </div>
                  <span className="text-sm md:text-base font-light">
                    +880 1815-507808
                  </span>
                </a>

                <a
                  href="https://wa.me/8801815507808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#D7E2EA]/80 hover:text-white transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors duration-300">
                    <FaWhatsapp size={18} className="text-green-400" />
                  </div>
                  <span className="text-sm md:text-base font-light">
                    WhatsApp
                  </span>
                </a>
              </div>
            </FadeIn>

            <ContactButton />

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com/in/sabbirrizvi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[#D7E2EA] hover:text-white transition-all duration-300 hover:border-white/20"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://github.com/rizvibr0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[#D7E2EA] hover:text-white transition-all duration-300 hover:border-white/20"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://facebook.com/rizvibr0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[#D7E2EA] hover:text-white transition-all duration-300 hover:border-white/20"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mt-24 sm:mt-32 md:mt-40 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#D7E2EA]/40 text-sm font-light">
          <span>
            &copy; {new Date().getFullYear()} Rizvi. All rights reserved.
          </span>
          <div className="flex gap-6 uppercase tracking-widest text-xs">
            <a href="#about" className="hover:text-white/80 transition-colors">
              About
            </a>
            <a
              href="#skills"
              className="hover:text-white/80 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-white/80 transition-colors"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
