import { useEffect, useRef } from "react";

function BigBackgroundBlobs() {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const pinkRef = useRef<HTMLDivElement | null>(null);
   const blueRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      let rafId: number;
      const handleMove = (e: MouseEvent) => {
         if (!containerRef.current) return;
         const rect = containerRef.current.getBoundingClientRect();
         const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
         const y = (e.clientY - rect.top) / rect.height - 0.5;

         cancelAnimationFrame(rafId);
         rafId = requestAnimationFrame(() => {
            if (pinkRef.current) {
               pinkRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
            }
            if (blueRef.current) {
               blueRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
            }
         });
      };

      const el = containerRef.current;
      if (el) el.addEventListener("mousemove", handleMove);
      return () => {
         if (el) el.removeEventListener("mousemove", handleMove);
         cancelAnimationFrame(rafId);
      };
   }, []);

   return (
      <div ref={containerRef} aria-hidden className="pointer-events-auto absolute inset-0 overflow-hidden">
         {/* Pink blob - top left */}
         <div
            ref={pinkRef}
            className="absolute top-10 left-10 h-[560px] w-[560px] rounded-full bg-pink-400/60 blur-[110px] will-change-transform mix-blend-screen"
         />

         {/* Blue blob - bottom right */}
         <div
            ref={blueRef}
            className="absolute bottom-10 right-10 h-[560px] w-[560px] rounded-full bg-blue-400/60 blur-[110px] will-change-transform mix-blend-screen"
         />
      </div>
   );
}

export default BigBackgroundBlobs;


