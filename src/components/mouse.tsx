import { motion, useScroll } from "framer-motion";
import { forwardRef, RefObject, useEffect, useRef } from "react";

export const Mouse = forwardRef<RefObject<HTMLElement> | undefined>((props, ref) => {
  const cursorRef = useRef(null);
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      // @ts-ignore
      const mouseX = clientX - cursorRef.current.clientWidth / 6;
      // @ts-ignore
      const mouseY = clientY - cursorRef.current.clientHeight / 6;
      // @ts-ignore
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  });
  // @ts-ignore
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <svg id="progress" width="70" height="70" viewBox="0 0 100 100" ref={cursorRef}>
      <circle cx="40" cy="40" r="2" pathLength="1" className="dot" />
      <circle cx="40" cy="40" r="20" pathLength="1" className="bg" />
      <motion.circle
        cx="40"
        cy="40"
        r="20"
        pathLength="1"
        className="indicator"
        style={{ pathLength: scrollXProgress }}
      />
    </svg>
  );
});
