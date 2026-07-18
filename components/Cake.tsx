"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Gallery from "./Gallery";

export default function Cake() {
  const [showGallery, setShowGallery] = useState(false);

  const openGallery = async () => {
    const audio = document.getElementById(
      "birthday-music"
    ) as HTMLAudioElement | null;

    if (audio) {
      try {
        audio.currentTime = 0;
        await audio.play();
      } catch (err) {
        console.error("Music could not play:", err);
      }
    }

    setShowGallery(true);
  };

  if (showGallery) {
    return <Gallery />;
  }

  return (
    <div
      style={{
        background: "radial-gradient(circle, #3a0b25, #000 70%)",
        color: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <FloatingHearts />

      {/* Cake */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          type: "spring",
        }}
        style={{
          fontSize: "clamp(70px,20vw,120px)",
        }}
      >
        🎂
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        style={{
          fontSize: "clamp(28px,5vw,45px)",
          marginTop: "20px",
        }}
      >
        Happy Birthday My Love ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        style={{
          fontSize: "clamp(16px,4vw,20px)",
          color: "#ffc0cb",
        }}
      >
        May all your dreams come true ✨
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.3,
        }}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={openGallery}
        style={{
          marginTop: "40px",
          padding: "14px 28px",
          width: "90%",
          maxWidth: "320px",
          borderRadius: "40px",
          border: "none",
          cursor: "pointer",
          fontSize: "clamp(16px,4vw,20px)",
          background: "linear-gradient(45deg,#ff4d88,#ff99bb)",
          color: "white",
          boxShadow: "0 0 30px rgba(255,77,136,0.5)",
        }}
      >
        Open Memories 📸
      </motion.button>

      {/* Sparkles */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          fontSize: "30px",
        }}
      >
        ✨ ✨ ✨
      </div>
    </div>
  );
}