import { Magnet } from "./Magnet";
import { Download } from "lucide-react";

interface ResumeButtonProps {
  className?: string;
}

export function ResumeButton({ className = "" }: ResumeButtonProps) {
  return (
    <Magnet
      padding={80}
      magnetStrength={40}
      activeTransition="transform 0.2s ease-out"
      inactiveTransition="transform 0.4s ease-in-out"
    >
      <a
        href="https://drive.google.com/file/d/19y6ICcvJzSn_u80axRFWZWodyi7jRRIM/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/10 text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-all cursor-pointer ${className}`}
        style={{ backdropFilter: "blur(8px)" }}
      >
        <span>Resume</span>
        <Download size={18} strokeWidth={2} />
      </a>
    </Magnet>
  );
}
