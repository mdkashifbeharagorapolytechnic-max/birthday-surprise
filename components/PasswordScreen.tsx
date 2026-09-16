"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "./Welcome";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecret(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const checkPassword = () => {
    if (unlocking || unlocked) return;

    if (password === "1809") {
      setError(false);
      setUnlocking(true);

      setTimeout(() => {
        setUnlocked(true);
      }, 2200);
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      checkPassword();
    }
  };

  if (unlocked) {
    return <Welcome />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        boxSizing: "border-box",
        color: "#fff",
        background:
          "radial-gradient(circle at 50% 40%, #4b0b35 0%, #1b0617 38%, #070009 72%, #000 100%)",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.18, 0.38, 0.18],
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
            "radial-gradient(circle, rgba(255,77,136,0.42), transparent 70%)",
          filter: "blur(45px)",
          pointerEvents: "none",
        }}
      />

      {/* Small floating particles */}
      {Array.from({ length: 35 }).map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0.1,
            scale: 0.5,
          }}
          animate={{
            opacity: [0.1, 0.9, 0.1],
            scale: [0.5, 1, 0.5],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 2.5 + (index % 5),
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width:
              index % 6 === 0
                ? "4px"
                : "2px",
            height:
              index % 6 === 0
                ? "4px"
                : "2px",
            borderRadius: "50%",
            background: "#fff",
            left: `${(index * 37) % 100}%`,
            top: `${(index * 61) % 100}%`,
            boxShadow:
              "0 0 12px rgba(255,255,255,0.8)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Unlock cinematic overlay */}
      <AnimatePresence>
        {unlocking && (
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
              duration: 0.4,
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              background:
                "radial-gradient(circle at center, #4b0b35 0%, #090009 65%, #000 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{
                scale: 0.2,
                opacity: 0,
              }}
              animate={{
                scale: [0.2, 1.25, 1],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              style={{
                fontSize:
                  "clamp(80px, 22vw, 130px)",
                filter:
                  "drop-shadow(0 0 35px rgba(255,77,136,0.75))",
              }}
            >
              ❤️
            </motion.div>

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
                delay: 0.8,
                duration: 0.7,
              }}
              style={{
                height: "2px",
                marginTop: "20px",
                background:
                  "linear-gradient(90deg, transparent, #ff6f9c, transparent)",
              }}
            />

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
                delay: 1,
              }}
              style={{
                marginTop: "22px",
                color: "#ffb6c1",
                fontSize: "12px",
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              Your little world is opening
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0.7],
              }}
              transition={{
                delay: 1.35,
                duration: 0.8,
              }}
              style={{
                marginTop: "12px",
                color:
                  "rgba(255,255,255,0.55)",
                fontSize: "13px",
              }}
            >
              Just for you, Jaan...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 45,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          x: error
            ? [-12, 12, -10, 10, 0]
            : 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: "440px",
          padding: "42px 28px 36px",
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
            "0 30px 90px rgba(0,0,0,0.65), 0 0 55px rgba(255,77,136,0.15)",
        }}
      >
        {/* Heart */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            fontSize: "70px",
            lineHeight: 1,
            filter:
              "drop-shadow(0 0 22px rgba(255,77,136,0.7))",
          }}
        >
          ❤️
        </motion.div>

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
            delay: 0.35,
          }}
          style={{
            marginTop: "24px",
            marginBottom: 0,
            color: "#ffb6c1",
            fontSize: "12px",
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          A Secret Place
        </motion.p>

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
            delay: 0.55,
            duration: 0.8,
          }}
          style={{
            margin: "13px 0 0",
            fontSize:
              "clamp(30px, 8vw, 42px)",
            lineHeight: 1.15,
            fontWeight: 700,
            textShadow:
              "0 0 28px rgba(255,77,136,0.45)",
          }}
        >
          For My Jaan ❤️
        </motion.h1>

        <AnimatePresence>
          {showSecret && (
            <>
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
                  duration: 0.8,
                }}
                style={{
                  marginTop: "17px",
                  color: "#ead6df",
                  fontSize: "16px",
                  lineHeight: 1.7,
                }}
              >
                I made a little world
                <br />
                just for you...
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                style={{
                  marginTop: "8px",
                  color: "#ffb6c1",
                  fontSize: "14px",
                }}
              >
                But first, you need the key. ✨
              </motion.p>
            </>
          )}
        </AnimatePresence>

        {/* Input */}
        <motion.input
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.15,
          }}
          type="password"
          inputMode="numeric"
          maxLength={4}
          placeholder="• • • •"
          value={password}
          onChange={(event) => {
            const value =
              event.target.value.replace(
                /\D/g,
                ""
              );

            setPassword(value);

            if (error) {
              setError(false);
            }
          }}
          onKeyDown={handleKeyDown}
          disabled={unlocking}
          style={{
            width: "100%",
            boxSizing: "border-box",
            marginTop: "28px",
            padding: "17px 18px",
            borderRadius: "17px",
            border: error
              ? "1px solid #ff5c8a"
              : "1px solid rgba(255,182,193,0.35)",
            outline: "none",
            background:
              "rgba(0,0,0,0.35)",
            color: "#fff",
            fontSize: "20px",
            textAlign: "center",
            letterSpacing: "8px",
            boxShadow: error
              ? "0 0 20px rgba(255,92,138,0.2)"
              : "inset 0 0 20px rgba(0,0,0,0.15)",
          }}
        />

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{
                opacity: 0,
                height: 0,
                y: -5,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              style={{
                overflow: "hidden",
                margin: "10px 0 0",
                color: "#ff9ab5",
                fontSize: "13px",
              }}
            >
              Hmm... that's not the secret ❤️
            </motion.p>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.3,
          }}
          whileHover={{
            scale: 1.04,
            boxShadow:
              "0 0 45px rgba(255,77,136,0.6)",
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={checkPassword}
          disabled={unlocking}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "17px 24px",
            borderRadius: "18px",
            border: "none",
            cursor: unlocking
              ? "default"
              : "pointer",
            background:
              "linear-gradient(135deg, #ff4d88, #ff82aa)",
            color: "#fff",
            fontSize: "17px",
            fontWeight: 600,
            boxShadow:
              "0 0 28px rgba(255,77,136,0.38)",
            opacity: unlocking ? 0.7 : 1,
          }}
        >
          {unlocking
            ? "Unlocking your world... ❤️"
            : "Unlock My Surprise ✨"}
        </motion.button>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.6,
          }}
          style={{
            marginTop: "25px",
            marginBottom: 0,
            color:
              "rgba(255,255,255,0.4)",
            fontSize: "11px",
            letterSpacing: "2px",
          }}
        >
          MADE WITH LOVE • 18 SEPTEMBER
        </motion.p>
      </motion.div>
    </main>
  );
}