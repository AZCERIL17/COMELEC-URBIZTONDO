import { IMAGES } from "../data/assets";

interface ComelecLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function ComelecLogo({ className = "w-10 h-10", size }: ComelecLogoProps) {
  const dimensionStyles = size ? { width: `${size}px`, height: `${size}px` } : {};

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden shadow-sm border border-amber-300 bg-amber-50 ${className}`}
      style={dimensionStyles}
      title="Official Seal - Commission on Elections Urbiztondo, Pangasinan"
    >
      <img
        src={IMAGES.comelecSeal}
        alt="COMELEC Urbiztondo Pangasinan Official Seal"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center scale-105"
      />
    </div>
  );
}
