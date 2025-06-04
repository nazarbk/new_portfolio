import React, { useEffect, useRef } from "react";

export default function CursorHalo() {
  const haloRef = useRef(null);

  useEffect(() => {
    const moveHalo = (e) => {
      const halo = haloRef.current;
      if (!halo) return;
      const x = e.clientX;
      const y = e.clientY;
      halo.style.transform = `translate3d(${x - 360}px, ${y - 360}px, 0)`; // Centra el halo (tamaño 120px)
    };
    window.addEventListener("mousemove", moveHalo);
    return () => window.removeEventListener("mousemove", moveHalo);
  }, []);

  return (
    <div
      ref={haloRef}
      className="pointer-events-none fixed z-[0] left-0 top-0 w-[720px] h-[720px] rounded-full"
      style={{
        background: "radial-gradient(circle,rgba(234, 140, 255, 0.09) 0%,rgba(48, 92, 123, 0.07) 70%)",
        filter: "blur(32px)",
        transition: "transform 0.13s cubic-bezier(.23,1.32,.69,.98)",
        mixBlendMode: "lighten",
      }}
    />
  );
}
