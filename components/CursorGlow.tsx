"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf: number;
    let tx = 0, ty = 0;   // target
    let cx = 0, cy = 0;   // current (lerped)

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {
      // Smooth lerp — glow lags slightly behind cursor for elegance
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate(${cx - 300}px, ${cy - 300}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9997] w-[600px] h-[600px] rounded-full will-change-transform hidden md:block"
      style={{
        background:
          "radial-gradient(circle at center, rgba(139,92,246,0.10) 0%, rgba(99,102,241,0.04) 45%, transparent 70%)",
      }}
    />
  );
}
