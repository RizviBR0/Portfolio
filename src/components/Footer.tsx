import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FadeIn } from "./FadeIn";
import { profileLinks } from "../data/siteData";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M6.55 8.35H3.18V21h3.37V8.35ZM4.87 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM10 8.35V21h3.37v-6.26c0-1.65.31-3.25 2.36-3.25 2.02 0 2.05 1.89 2.05 3.36V21h3.38v-6.94c0-3.41-.74-6.03-4.72-6.03-1.91 0-3.19 1.05-3.71 2.04h-.05V8.35H10Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M13.57 22v-8.16h2.74l.41-3.18h-3.15V8.63c0-.92.26-1.55 1.58-1.55h1.69V4.24c-.29-.04-1.3-.13-2.46-.13-2.44 0-4.11 1.49-4.11 4.22v2.33H7.5v3.18h2.77V22h3.3Z" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: profileLinks.linkedin, icon: LinkedInIcon, tone: "linkedin" },
  { label: "GitHub", href: profileLinks.github, icon: GitHubIcon, tone: "github" },
  { label: "Facebook", href: profileLinks.facebook, icon: FacebookIcon, tone: "facebook" },
];

export function Footer() {
  return (
    <footer id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-orb contact-orb--violet" aria-hidden="true" />
      <div className="contact-orb contact-orb--cyan" aria-hidden="true" />

      <div className="site-container relative z-10">
        <FadeIn>
          <p className="eyebrow justify-center">Have an idea worth building?</p>
          <h2 id="contact-title" className="contact-title">
            Let&apos;s work<br />together
          </h2>
          <p className="contact-intro">
            Have a project, product idea, or collaboration in mind? Let&apos;s build
            something useful together.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={22}>
          <div className="contact-actions">
            <a href={profileLinks.email} className="button button--primary button--large">
              Email me
              <ArrowUpRight aria-hidden="true" size={19} />
            </a>
            <a
              href={profileLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--large"
              aria-label="Message Sabbir Rizvi on WhatsApp in a new tab"
            >
              WhatsApp
              <MessageCircle aria-hidden="true" size={18} />
            </a>
          </div>
        </FadeIn>

        <div className="contact-details">
          <a href={profileLinks.email} className="contact-detail">
            <span aria-hidden="true"><Mail size={18} /></span>
            <span><small>Email</small>sabbirh9990@gmail.com</span>
          </a>
          <a href={profileLinks.phone} className="contact-detail">
            <span aria-hidden="true"><Phone size={18} /></span>
            <span><small>Phone</small>+880 1815-507808</span>
          </a>
          <div className="social-links" aria-label="Social profiles">
            {socials.map(({ label, href, icon: Icon, tone }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link social-link--${tone}`}
                aria-label={`${label} profile (opens in a new tab)`}
                title={label}
              >
                <span className="social-link__face" aria-hidden="true">
                  <Icon />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-base">
          <p>&copy; {new Date().getFullYear()} Sabbir Rizvi. All rights reserved.</p>
          <nav aria-label="Footer navigation">
            <a href="/#about">About Sabbir Rizvi</a>
            <a href="/#projects">Product engineering projects</a>
            <a href="#top" className="back-to-top">
              Back to top <ArrowUp aria-hidden="true" size={15} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
