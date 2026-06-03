import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0C0C0C]/80 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 py-4 md:py-5">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-white font-bold text-lg md:text-xl tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Rizvi
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-base">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7621B0] to-[#42fcff] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Hamburger Button — Mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[6px] z-60 cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block w-7 h-[2px] bg-white rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-7 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block w-7 h-[2px] bg-white rounded-full origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0C0C0C]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            {/* Decorative gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#7621B0]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#42fcff]/10 rounded-full blur-[80px] pointer-events-none" />

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-[#D7E2EA] hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#7621B0] to-[#42fcff] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
