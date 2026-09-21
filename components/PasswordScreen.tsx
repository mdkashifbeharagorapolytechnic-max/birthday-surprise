"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "./Welcome";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [error, setError] = useState(false);

  const checkPassword = () => {
    if (password === "1809") {
      setError(false);
      setUnlocked(true);

      // Cinematic transition ke baad Welcome page
      setTimeout(() => {
        setShowWelcome(true);
      }, 1800);
    } else {
      setError(true);
      setPassword("");
    }
  };

  // Password unlock hone ke baad Welcome page
  if (showWelcome) {
    return <Welcome />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, #3d0b2c 0%, #160513 40%, #050008 75%, #000 100%)",
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
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,77,136,0.35), transparent 70%)",
          filter: "blur(45px)",
          pointerEvents: "none",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 35 }).map((_, index) => (
        <motion.span
          key={index}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5 + (index % 4),
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
            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
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
          zIndex: 5,
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
        }}
      >
        {/* Top Label */}
        <motion.p
          initial={{
            opacity: 0,
            letterSpacing: "10px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "4px",
          }}
          transition={{
            delay: 0.4,
            duration: 1.4,
          }}
          style={{
            margin: 0,
            color: "#ffb6c1",
            fontSize: "12px",
            textTransform: "uppercase",
          }}
        >
          A Little Birthday Surprise
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 1.1,
          }}
          style={{
            margin: "22px 0 0",
            fontSize: "clamp(38px, 10vw, 64px)",
            lineHeight: 1.1,
            fontWeight: 700,
            textShadow: "0 0 30px rgba(255,77,136,0.5)",
          }}
        >
          For Alfiya ✨
        </motion.h1>

        {/* Description */}
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
            delay: 1.2,
            duration: 1,
          }}
          style={{
            margin: "20px auto 0",
            maxWidth: "380px",
            color: "#ead6df",
            fontSize: "16px",
            lineHeight: 1.7,
          }}
        >
          Something simple, sweet and special
          <br />
          has been made just for your birthday. 🌸
        </motion.p>

        {/* Password Box */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.7,
            duration: 1,
          }}
          style={{
            marginTop: "35px",
            padding: "28px 24px",
            borderRadius: "26px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.45)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#ffb6c1",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Enter the secret code
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                checkPassword();
              }
            }}
            placeholder="••••"
            maxLength={4}
            inputMode="numeric"
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              boxSizing: "border-box",
              borderRadius: "15px",
              border: error
                ? "1px solid rgba(255,80,100,0.8)"
                : "1px solid rgba(255,255,255,0.15)",
              outline: "none",
              background: "rgba(0,0,0,0.35)",
              color: "#fff",
              textAlign: "center",
              fontSize: "22px",
              letterSpacing: "10px",
            }}
          />

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={checkPassword}
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "15px",
              border: "none",
              borderRadius: "15px",
              background:
                "linear-gradient(135deg, #ff6f9c, #d94678)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2px",
              cursor: "pointer",
              boxShadow:
                "0 10px 30px rgba(255,77,136,0.25)",
            }}
          >
            OPEN SURPRISE ✨
          </motion.button>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: -5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -5,
                }}
                style={{
                  margin: "14px 0 0",
                  color: "#ff8fa3",
                  fontSize: "12px",
                }}
              >
                Hmm... that's not the secret code. Try again 💫
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.3,
          }}
          style={{
            marginTop: "28px",
            color: "rgba(255,255,255,0.35)",
            fontSize: "10px",
            letterSpacing: "2px",
          }}
        >
          MADE WITH FRIENDSHIP • 18 SEPTEMBER
        </motion.p>
      </motion.div>

      {/* Cinematic Unlock Screen */}
      <AnimatePresence>
        {unlocked && !showWelcome && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background:
                "radial-gradient(circle at center, #4a1238 0%, #170615 45%, #000 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {/* Glow */}
            <motion.div
              initial={{
                scale: 0.2,
                opacity: 0,
              }}
              animate={{
                scale: [0.2, 1.2, 2.5],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,105,160,0.8), transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Center Icon */}
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                position: "relative",
                zIndex: 2,
                fontSize: "70px",
                filter:
                  "drop-shadow(0 0 25px rgba(255,105,160,0.9))",
              }}
            >
              ✨
            </motion.div>

            {/* Particles */}
            {Array.from({ length: 35 }).map((_, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [
                    0,
                    (index % 2 === 0 ? 1 : -1) *
                      (50 + index * 8),
                  ],
                  y: [0, -80 - index * 6],
                }}
                transition={{
                  duration: 1.8 + (index % 5) * 0.2,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: index % 3 === 0 ? "5px" : "3px",
                  height: index % 3 === 0 ? "5px" : "3px",
                  borderRadius: "50%",
                  background: "#ffb6c1",
                  boxShadow:
                    "0 0 12px rgba(255,182,193,0.9)",
                }}
              />
            ))}

            {/* Text */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              style={{
                position: "absolute",
                bottom: "18%",
                textAlign: "center",
                padding: "0 20px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#ffb6c1",
                  fontSize: "12px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                A little birthday world is opening
              </p>

              <p
                style={{
                  margin: "12px 0 0",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                Just for you, Alfiya ✨
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}