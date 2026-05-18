import Image from "next/image";

interface PortfolioScreenshotProps {
  src: string;
  alt: string;
  /** Priorité LCP (couverture carte / slide actif) */
  priority?: boolean;
  sizes: string;
  className?: string;
}

/** Captures UI : netteté native, cadrage contain centré */
export function PortfolioScreenshot({
  src,
  alt,
  priority = false,
  sizes,
  className = "",
}: PortfolioScreenshotProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      priority={priority}
      sizes={sizes}
      draggable={false}
      className={`object-contain object-center ${className}`}
    />
  );
}


