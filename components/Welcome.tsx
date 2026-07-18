"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Cake from "./Cake";

export default function Welcome() {
  const [showCake, setShowCake] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCake(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (showCake) {
    return <Cake />;
  }

  return (
    <div
      style={{
        background:
          "radial-gradient(circle, #3a0b25, #000 70%)",
        color: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      {/* Movie intro text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          fontSize: "18px",
          color: "#ffb6c1",
          letterSpacing: "4px",
        }}
      >
        A STORY MADE WITH LOVE
      </motion.p>


      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        style={{
          fontSize: "clamp(40px,8vw,70px)",
          marginTop: "30px",
        }}
      >
        Happy Birthday ❤️
      </motion.h1>


      <motion.h2
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 1,
        }}
        style={{
          fontSize: "clamp(25px,5vw,40px)",
          color: "#ff4d88",
        }}
      >
        My Beautiful Olly 🎂
      </motion.h2>


      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        style={{
          fontSize: "22px",
          marginTop: "20px",
          color: "#ddd",
        }}
      >
        Your movie is about to begin... 🎬
      </motion.p>


      {/* Loading dots */}
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        style={{
          marginTop: "40px",
          fontSize: "35px",
        }}
      >
        • • •
      </motion.div>

    </div>
  );
}