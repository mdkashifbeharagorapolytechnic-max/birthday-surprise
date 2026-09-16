"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function FinalMessage() {
  const [show, setShow] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, #4a0b32 0%, #1a0617 35%, #060009 72%, #000 100%)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "30px 20px",
        boxSizing: "border-box",
      }}
    >
      <FloatingHearts />

      {/* Main Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.4, 0.18],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,77,136,0.4), transparent 70%)",
          filter: "blur(45px)",
          pointerEvents: "none",
        }}
      />

      {/* Small Floating Stars */}
      {Array.from({ length: 30 }).map((_, index) => (
        <motion.span
          key={index}
          animate={{
            opacity: [0.15, 0.9, 0.15],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + (index % 4),
            repeat: Infinity,
            delay: index * 0.1,
          }}
          style={{
            position: "absolute",
            width: index % 5 === 0 ? "4px" : "2px",
            height: index % 5 === 0 ? "4px" : "2px",
            borderRadius: "50%",
            background: "#fff",
            left: `${(index * 37) % 100}%`,
            top: `${(index * 61) % 100}%`,
            boxShadow:
              "0 0 12px rgba(255,255,255,0.9)",
            pointerEvents: "none",
          }}
        />
      ))}

      {!show ? (
        /* =========================
           BEFORE REVEAL
        ========================== */
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          style={{
            position: "relative",
            zIndex: 5,
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              fontSize: "clamp(65px, 18vw, 100px)",
              filter:
                "drop-shadow(0 0 30px rgba(255,77,136,0.5))",
            }}
          >
            🎁
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
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
            The Final Chapter
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.9,
            }}
            style={{
              margin: "18px 0 0",
              fontSize:
                "clamp(38px, 9vw, 68px)",
              lineHeight: 1.1,
              fontWeight: 600,
              textShadow:
                "0 0 35px rgba(255,77,136,0.45)",
            }}
          >
            One More
            <br />
            <span
              style={{
                color: "#ff6f9c",
              }}
            >
              Surprise...
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.1,
            }}
            style={{
              marginTop: "22px",
              color: "#ead6df",
              fontSize:
                "clamp(16px, 4vw, 20px)",
              lineHeight: 1.7,
            }}
          >
            You have reached the end
            <br />
            of your little birthday story...
            <br />
            but not the end of my love. ❤️
          </motion.p>

          <motion.button
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.5,
            }}
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 0 50px rgba(255,77,136,0.65)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setShow(true)}
            style={{
              marginTop: "35px",
              padding: "17px 42px",
              borderRadius: "50px",
              border:
                "1px solid rgba(255,255,255,0.15)",
              background:
                "linear-gradient(135deg, #ff4d88, #ff82aa)",
              color: "#fff",
              fontSize: "18px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow:
                "0 0 30px rgba(255,77,136,0.4)",
            }}
          >
            ✨ Reveal My Heart ❤️
          </motion.button>
        </motion.div>
      ) : (
        /* =========================
           FINAL REVEAL
        ========================== */
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 70,
          }}
          style={{
            position: "relative",
            zIndex: 5,
            width: "100%",
            maxWidth: "850px",
          }}
        >
          {/* Firework */}
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.3, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1.2,
            }}
            style={{
              fontSize:
                "clamp(55px, 14vw, 90px)",
              filter:
                "drop-shadow(0 0 25px rgba(255,77,136,0.6))",
            }}
          >
            🎆
          </motion.div>

          {/* Date */}
          <motion.p
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            style={{
              marginTop: "15px",
              marginBottom: 0,
              color: "#ffb6c1",
              fontSize: "12px",
              letterSpacing: "6px",
            }}
          >
            18 • SEPTEMBER
          </motion.p>

          {/* Happy Birthday */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.7,
              duration: 1,
            }}
            style={{
              margin: "25px 0 0",
              fontSize:
                "clamp(42px, 10vw, 78px)",
              lineHeight: 1.05,
              fontWeight: 700,
              textShadow:
                "0 0 35px rgba(255,77,136,0.5)",
            }}
          >
            Happy Birthday
            <br />
            <span
              style={{
                color: "#ff6f9c",
              }}
            >
              My Jaan ❤️
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: "120px",
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
              duration: 1,
            }}
            style={{
              height: "1px",
              margin: "28px auto 0",
              background:
                "linear-gradient(90deg, transparent, #ff6f9c, transparent)",
            }}
          />

          {/* Main Message */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
            style={{
              margin:
                "30px auto 0",
              maxWidth: "720px",
              color: "#ffe0e8",
              fontSize:
                "clamp(19px, 4vw, 28px)",
              lineHeight: 1.75,
            }}
          >
            You are my today,
            <br />
            my tomorrow,
            <br />
            and my forever.
          </motion.p>

          {/* Emotional Message */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.2,
              duration: 1,
            }}
            style={{
              margin:
                "28px auto 0",
              maxWidth: "700px",
              color: "#dcbec9",
              fontSize:
                "clamp(15px, 3vw, 19px)",
              lineHeight: 1.8,
            }}
          >
            Thank you for being a beautiful part
            <br />
            of my life and for filling my world
            <br />
            with memories I will always treasure.
          </motion.p>

          {/* Animated Heart */}
          <motion.div
            animate={{
              scale: [1, 1.22, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              marginTop: "30px",
              fontSize:
                "clamp(42px, 10vw, 58px)",
              filter:
                "drop-shadow(0 0 20px rgba(255,77,136,0.65))",
            }}
          >
            ❤️
          </motion.div>

          {/* Forever */}
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
              delay: 2.8,
              duration: 1,
            }}
            style={{
              marginTop: "28px",
              marginBottom: 0,
              color: "#ffb6c1",
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize:
                "clamp(23px, 5vw, 34px)",
            }}
          >
            Forever Yours ❤️
          </motion.p>

          {/* Final tiny message */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 3.5,
              duration: 1,
            }}
            style={{
              marginTop: "35px",
              marginBottom: 0,
              color:
                "rgba(255,255,255,0.4)",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            This little world was made only for you ✨
          </motion.p>
        </motion.div>
      )}

      {/* Bottom Signature */}
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
        }}
        style={{
          position: "absolute",
          bottom: "18px",
          left: "20px",
          right: "20px",
          margin: 0,
          color:
            "rgba(255,255,255,0.25)",
          fontSize: "9px",
          letterSpacing: "3px",
          textAlign: "center",
        }}
      >
        MADE WITH LOVE • 18 SEPTEMBER ❤️
      </motion.p>
    </main>
  );
}