"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Cake from "./Cake";

export default function Welcome() {
  const [showCake, setShowCake] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCake(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (showCake) {
    return <Cake />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, #3d0b2c 0%, #160513 38%, #050008 75%, #000 100%)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,77,136,0.35), transparent 70%)",
          filter: "blur(35px)",
          pointerEvents: "none",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 32 }).map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0.15,
            scale: 0.5,
          }}
          animate={{
            opacity: [0.15, 0.9, 0.15],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5 + (index % 4),
            repeat: Infinity,
            delay: index * 0.12,
          }}
          style={{
            position: "absolute",
            width: index % 4 === 0 ? "4px" : "2px",
            height: index % 4 === 0 ? "4px" : "2px",
            borderRadius: "50%",
            background: "#fff",
            left: `${(index * 37) % 100}%`,
            top: `${(index * 61) % 100}%`,
            boxShadow:
              "0 0 10px rgba(255,255,255,0.8)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Top Date */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          marginBottom: "35px",
          color: "#ffb6c1",
          fontSize: "13px",
          letterSpacing: "6px",
          textTransform: "uppercase",
        }}
      >
        18 • September
      </motion.div>

      {/* Intro Line */}
      <motion.p
        initial={{
          opacity: 0,
          letterSpacing: "12px",
        }}
        animate={{
          opacity: 1,
          letterSpacing: "5px",
        }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        style={{
          position: "relative",
          zIndex: 2,
          margin: 0,
          color: "#f6b6c7",
          fontSize: "13px",
          textTransform: "uppercase",
        }}
      >
        A story made with love
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.7,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 1.4,
          type: "spring",
          stiffness: 90,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          margin: "25px 0 0",
          fontSize: "clamp(42px, 10vw, 76px)",
          lineHeight: 1.05,
          fontWeight: 700,
          textShadow:
            "0 0 25px rgba(255,77,136,0.45)",
        }}
      >
        Happy Birthday
      </motion.h1>

      {/* Jaan */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          margin: "12px 0 0",
          fontSize: "clamp(38px, 9vw, 68px)",
          lineHeight: 1.1,
          fontWeight: 500,
          color: "#ff6f9c",
          textShadow:
            "0 0 30px rgba(255,77,136,0.6)",
        }}
      >
        My Jaan ❤️
      </motion.h2>

      {/* Emotional Line */}
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "600px",
          marginTop: "28px",
          marginBottom: 0,
          color: "#ead6df",
          fontSize: "clamp(16px, 4vw, 21px)",
          lineHeight: 1.7,
        }}
      >
        The day my favorite person
        <br />
        came into this world. ✨
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        animate={{
          width: "90px",
          opacity: 1,
        }}
        transition={{
          delay: 2.8,
          duration: 1,
        }}
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #ff6f9c, transparent)",
          marginTop: "32px",
        }}
      />

      {/* Movie Starting Text */}
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 3.3,
          duration: 1,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "25px",
          marginBottom: 0,
          color: "#ffb6c1",
          fontSize: "14px",
          letterSpacing: "2px",
        }}
      >
        YOUR LITTLE MOVIE IS ABOUT TO BEGIN
      </motion.p>

      {/* Loading Dots */}
      <motion.div
        animate={{
          opacity: [0.25, 1, 0.25],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "22px",
          fontSize: "24px",
          letterSpacing: "8px",
          color: "#ff6f9c",
        }}
      >
        • • •
      </motion.div>

      {/* Bottom Text */}
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 4,
        }}
        style={{
          position: "absolute",
          bottom: "25px",
          margin: 0,
          color: "rgba(255,255,255,0.35)",
          fontSize: "11px",
          letterSpacing: "2px",
        }}
      >
        MADE ESPECIALLY FOR YOU ❤️
      </motion.p>
    </main>
  );
}