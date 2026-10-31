import { useEffect, useRef, useState } from "react";

// Only for devices with a real mouse: on phones there is no cursor and the large blurred layer costs battery while scrolling
const fineMouse = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export default function CursorHalo() {
  const haloRef = useRef(null);
  const [enabled] = useState(fineMouse);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const moveHalo = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const halo = haloRef.current;
        if (!halo) return;
        halo.style.transform = `translate3d(${e.clientX - 360}px, ${e.clientY - 360}px, 0)`; // Centers the 720px halo on the cursor
      });
    };
    window.addEventListener("mousemove", moveHalo, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", moveHalo);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={haloRef}
      aria-hidden="true"
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
