import { Magnet } from "./Magnet";

interface LiveProjectButtonProps {
  className?: string;
  link: string;
}

export function LiveProjectButton({ className = "", link }: LiveProjectButtonProps) {
  return (
    <Magnet
      padding={30}
      magnetStrength={30}
      activeTransition="transform 0.2s ease-out"
      inactiveTransition="transform 0.4s ease-in-out"
    >
      <a href={link}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer ${className}`}
      >
        Live Project
      </a>
    </Magnet>
  );
}
