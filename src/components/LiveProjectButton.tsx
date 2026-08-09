import { Magnet } from "./Magnet";

interface LiveProjectButtonProps {
  className?: string;
  link: string;
}

export function LiveProjectButton({ className = "", link }: LiveProjectButtonProps) {
  return (
    <Magnet
      padding={15}
      magnetStrength={15}
      activeTransition="transform 0.2s ease-out"
      inactiveTransition="transform 0.4s ease-in-out"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 text-white font-semibold uppercase tracking-wider px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm hover:bg-white/25 hover:border-white/40 transition-all duration-300 shadow-sm cursor-pointer ${className}`}
      >
        Live Project
      </a>
    </Magnet>
  );
}
