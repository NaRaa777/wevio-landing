"use client";

import { useEffect, useRef } from "react";

export function useMagneticBtn() {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;

    let gsapInstance: typeof import("gsap").gsap | null = null;
    import("gsap").then((mod) => {
      gsapInstance = mod.gsap;
    });

    const onMove = (e: Event) => {
      if (!gsapInstance) return;
      const me = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = me.clientX - rect.left - rect.width / 2;
      const y = me.clientY - rect.top - rect.height / 2;
      gsapInstance.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      if (!gsapInstance) return;
      gsapInstance.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}
