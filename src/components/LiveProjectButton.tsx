import { Magnet } from "./Magnet";

interface LiveProjectButtonProps {
  className?: string;
}

export function LiveProjectButton({ className = "" }: LiveProjectButtonProps) {
  return (
    <Magnet padding={80} magnetStrength={4} activeTransition="transform 0.2s ease-out" inactiveTransition="transform 0.4s ease-in-out">
      <button
        className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer ${className}`}
      >
        Live Project
      </button>
    </Magnet>
  );
}
