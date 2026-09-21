"use client";

import { motion } from "framer-motion";

export default function BirthdayWish() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 35%, #4a1238 0%, #1b0718 40%, #070008 75%, #000 100%)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        boxSizing: "border-box",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,105,160,0.4), transparent 70%)",
          filter: "blur(45px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating Stars */}
      {Array.from({ length: 28 }).map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0.15,
            scale: 0.5,
          }}
          animate={{
            opacity: [0.15, 0.9, 0.15],
            scale: [0.5, 1, 0.5],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 2.5 + (index % 5),
            repeat: Infinity,
            delay: index * 0.12,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: index % 6 === 0 ? "4px" : "2px",
            height: index % 6 === 0 ? "4px" : "2px",
            borderRadius: "50%",
            background: "#fff",
            left: `${(index * 41) % 100}%`,
            top: `${(index * 67) % 100}%`,
            boxShadow:
              "0 0 12px rgba(255,255,255,0.8)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: "620px",
          padding: "48px 30px",
          borderRadius: "32px",
          textAlign: "center",
          boxSizing: "border-box",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035))",
          border:
            "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow:
            "0 30px 90px rgba(0,0,0,0.65), 0 0 55px rgba(255,77,136,0.16)",
        }}
      >
        {/* Birthday Icon */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: [0.9, 1.08, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          style={{
            fontSize: "65px",
            lineHeight: 1,
            filter:
              "drop-shadow(0 0 22px rgba(255,105,160,0.65))",
          }}
        >
          🎂
        </motion.div>

        {/* Small Heading */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          style={{
            marginTop: "25px",
            marginBottom: 0,
            color: "#ffb6c1",
            fontSize: "12px",
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          A Special Wish
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.9,
          }}
          style={{
            margin: "14px 0 0",
            fontSize:
              "clamp(38px, 9vw, 58px)",
            lineHeight: 1.1,
            fontWeight: 700,
            color: "#fff",
            textShadow:
              "0 0 30px rgba(255,105,160,0.45)",
          }}
        >
          Alfiya ✨
        </motion.h1>

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
            delay: 1,
            duration: 0.8,
          }}
          style={{
            height: "1px",
            margin: "24px auto",
            background:
              "linear-gradient(90deg, transparent, #ff6f9c, transparent)",
          }}
        />

        {/* Wishes */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            color: "#ead6df",
            fontSize:
              "clamp(15px, 4vw, 18px)",
            lineHeight: 1.9,
          }}
        >
          <p style={{ margin: "0 0 18px" }}>
            Wishing you a very Happy Birthday! 🎉
          </p>

          <p style={{ margin: "0 0 18px" }}>
            May your day be filled with
            happiness, laughter, and lots of
            beautiful moments.
          </p>

          <p style={{ margin: "0 0 18px" }}>
            May the year ahead bring you
            new memories, success, peace,
            and plenty of reasons to smile. 🌸
          </p>

          <p style={{ margin: 0 }}>
            Keep smiling, keep shining,
            and always stay the wonderful
            person you are. ✨
          </p>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 2,
            duration: 0.9,
          }}
          style={{
            marginTop: "30px",
            padding: "18px",
            borderRadius: "20px",
            background:
              "rgba(255,105,160,0.08)",
            border:
              "1px solid rgba(255,182,193,0.12)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#ffb6c1",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Have an amazing birthday, Alfiya! 💕
          </p>

          <p
            style={{
              margin: "8px 0 0",
              color:
                "rgba(255,255,255,0.55)",
              fontSize: "13px",
            }}
          >
            Wishing you happiness today
            and always.
          </p>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
          }}
          style={{
            marginTop: "30px",
            fontSize: "22px",
            letterSpacing: "10px",
          }}
        >
          🌸 ✨ 🌸
        </motion.div>
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
          delay: 2.8,
        }}
        style={{
          position: "absolute",
          bottom: "20px",
          margin: 0,
          color:
            "rgba(255,255,255,0.3)",
          fontSize: "10px",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        MADE WITH FRIENDSHIP ✨
      </motion.p>
    </main>
  );
}