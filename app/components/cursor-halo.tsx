"use client";

import { useEffect, useRef } from "react";

export function CursorHalo() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const moveHalo = (event: PointerEvent) => {
      haloRef.current?.style.setProperty("--halo-x", `${event.clientX}px`);
      haloRef.current?.style.setProperty("--halo-y", `${event.clientY}px`);
      haloRef.current?.setAttribute("data-active", "true");
    };

    window.addEventListener("pointermove", moveHalo, { passive: true });
    return () => window.removeEventListener("pointermove", moveHalo);
  }, []);

  return <div ref={haloRef} className="cursor-halo" aria-hidden="true" />;
}
