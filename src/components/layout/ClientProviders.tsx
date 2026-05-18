"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";
import { ScrollProgress } from "./ScrollProgress";
import { PageTransition } from "./PageTransition";

const AuroraCanvas = dynamic(
  () => import("@/components/canvas/AuroraCanvas").then((m) => m.AuroraCanvas),
  { ssr: false }
);
const Cursor = dynamic(
  () => import("@/components/canvas/Cursor").then((m) => m.Cursor),
  { ssr: false }
);

export function ClientProviders({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ready) setLoaded(true);
  }, [ready]);

  useEffect(() => {
    if (!loaded) return;
    const initTilt = async () => {
      const { gsap } = await import("gsap");
      document.querySelectorAll("[data-tilt='true']").forEach((card) => {
        const el = card as HTMLElement;
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(el, {
            rotateY: x * 16,
            rotateX: -y * 16,
            transformPerspective: 800,
            duration: 0.4,
          });
        };
        const onLeave = () => {
          gsap.to(el, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          });
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    initTilt();
  }, [loaded]);

  return (
    <>
      {!ready && <Preloader onDone={() => setReady(true)} />}
      {ready && (
        <>
          <AuroraCanvas />
          <div className="grain-overlay" aria-hidden />
          <ScrollProgress />
          <PageTransition />
          <Cursor />
          <Nav />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}


