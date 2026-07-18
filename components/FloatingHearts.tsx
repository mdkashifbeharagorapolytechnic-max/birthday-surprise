"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [positions, setPositions] = useState<number[]>([]);

  useEffect(() => {
    setPositions(
      [...Array(15)].map(() =>
        Math.random() * window.innerWidth
      )
    );
  }, []);

  return (
    <>
      {positions.map((x, i) => (
        <motion.div
          key={i}
          initial={{
            y: "100vh",
            x,
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            position: "fixed",
            fontSize: "24px",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}