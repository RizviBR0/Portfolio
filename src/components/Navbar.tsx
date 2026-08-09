import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { motionEase } from "../lib/motion";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const lenis = useLenis();
  const isHome = window.location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    setIsOpen(false);
    if (!isHome) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    if (shouldReduceMotion || !lenis) {
      target.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    } else {
      lenis.scrollTo(target, { offset: -72, duration: 0.9 });
    }
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <motion.nav
        aria-label="Primary navigation"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.65, ease: motionEase }}
        className={`site-nav ${scrolled || !isHome ? "site-nav--scrolled" : ""}`}
      >
        <div className="site-nav__inner flex h-18 items-center justify-between gap-6">
          <a href="/" className="brand-mark" aria-label="Sabbir Rizvi portfolio home">
            <span>Rizvi</span>
          </a>

          <div className="site-nav__links hidden items-center lg:flex">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={hrefFor(link.id)}
                  onClick={(event) => handleLinkClick(event, link.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="menu-toggle lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">Menu</span>
            <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} />
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
            <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.25 }}
            className="mobile-menu"
          >
            <div className="mobile-menu__orb mobile-menu__orb--violet" aria-hidden="true" />
            <div className="mobile-menu__orb mobile-menu__orb--cyan" aria-hidden="true" />
            <nav aria-label="Mobile navigation" className="flex flex-col items-start gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={hrefFor(link.id)}
                  onClick={(event) => handleLinkClick(event, link.id)}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.035,
                    duration: shouldReduceMotion ? 0.01 : 0.38,
                    ease: motionEase,
                  }}
                  className="mobile-menu__link"
                >
                  <span className="mobile-menu__index">0{index + 1}</span>
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
