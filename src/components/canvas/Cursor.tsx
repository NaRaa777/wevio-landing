"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const svgRef = useRef<SVGSVGElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const trail = useRef<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const scale = useRef(1);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      scale.current =
        t.closest("a, button, [data-cursor-hover], [role='button']") ? 1.6 : 1;
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    let raf = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);

      if (svgRef.current) {
        svgRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) scale(${scale.current})`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      trail.current.unshift({ ...pos.current });
      trail.current.pop();
      trailsRef.current.forEach((el, i) => {
        if (!el) return;
        const t = trail.current[i];
        const opacity = 0.15 - i * 0.03;
        el.style.transform = `translate(${t.x}px, ${t.y}px)`;
        el.style.opacity = String(Math.max(0, opacity));
      });

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[300] hidden md:block" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailsRef.current[i] = el;
          }}
          className="absolute left-0 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan"
        />
      ))}
      <svg
        ref={svgRef}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
        width="36"
        height="36"
        style={{ willChange: "transform" }}
      >
        <circle
          ref={ringRef}
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="rgba(91,142,255,0.5)"
          strokeWidth="1"
        />
      </svg>
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}



