"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const el = overlayRef.current;
    if (!el) return;

    const run = async () => {
      const { gsap } = await import("gsap");
      const tl = gsap.timeline();
      tl.set(el, {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        pointerEvents: "auto",
      })
        .to(el, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.55,
          ease: "power3.inOut",
        })
        .to(el, {
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          duration: 0.55,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(el, { pointerEvents: "none" });
          },
        });
    };
    run();
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="page-transition-overlay"
      aria-hidden
    />
  );
}


