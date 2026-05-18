"use client";

import { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      frame++;
      const next = Math.min(100, Math.round((frame / 60) * 100));
      setProgress(next);
      if (next < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(async () => {
          const gsapMod = await import("gsap");
          gsapMod.gsap.to(".preloader", {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => {
              setHidden(true);
              onDone();
            },
          });
        }, 300);
      }
    };
    requestAnimationFrame(tick);
  }, [onDone]);

  if (hidden) return null;

  return (
    <div
      className="preloader"
      style={{ clipPath: "inset(0 0 0 0)" }}
      aria-hidden={hidden}
    >
      <p className="font-syne text-3xl font-extrabold text-white opacity-0 animate-[fadeIn_0.6s_ease_forwards]">
        Wevio<span className="text-blue">.</span>
      </p>
      <p className="font-syne text-4xl font-bold text-blue">{progress}%</p>
      <div className="h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue to-cyan transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}


