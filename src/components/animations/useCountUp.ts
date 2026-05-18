"use client";

import { useEffect, useRef, useState } from "react";

interface CountConfig {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function useCountUp(config: CountConfig) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || counted.current) return;
        counted.current = true;

        const gsapMod = await import("gsap");
        const obj = { v: 0 };
        gsapMod.gsap.to(obj, {
          v: config.value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            const n =
              config.decimals !== undefined
                ? obj.v.toFixed(config.decimals)
                : Math.round(obj.v).toString();
            setDisplay(`${config.prefix ?? ""}${n}${config.suffix ?? ""}`);
          },
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [config.value, config.suffix, config.prefix, config.decimals]);

  return { ref, display };
}
