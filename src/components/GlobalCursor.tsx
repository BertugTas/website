"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlobalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 8, // Center the 16px dot
        y: mousePosition.y - 8,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 2147483647, // Maximum safe 32-bit integer, safe from purging
        width: "16px",
        height: "16px",
        backgroundColor: "#00e5ff",
        borderRadius: "50%",
        boxShadow: "0 0 15px #00e5ff, 0 0 30px rgba(0, 229, 255, 0.5)",
      }}
    />
  );
}
