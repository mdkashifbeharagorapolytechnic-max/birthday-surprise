"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Gallery from "./Gallery";

export default function Cake() {
  const [showGallery, setShowGallery] = useState(false);
  const [wished, setWished] = useState(false);
  const [opening, setOpening] = useState(false);

  const makeWish = () => {
    if (wished) return;

    setWished(true);

    // Small vibration on supported mobile devices
    if (
      typeof navigator !== "undefined" &&
      "vibrate" in navigator
    ) {
      navigator.vibrate([40, 60, 40]);
    }
  };

  const openGallery = async () => {
    if (opening) return;

    setOpening(true);

    const audio = document.getElementById(
      "birthday-music"
    ) as HTMLAudioElement | null;

    if (audio) {
      try {
        audio.currentTime = 0;
        await audio.play();
      } catch (error) {
        console.error(
          "Birthday music could not play:",
          error
        );
      }
    }

    setTimeout(() => {
      setShowGallery(true);
    }, 1000);
  };

  if (showGallery) {
    return <Gallery />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 35%, #5a103d 0%, #220719 35%, #080009 72%, #000 100%)",
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

      {/* Main cinematic glow */}
      <motion.div
        animate={{
          scale: wished
            ? [1, 1.35, 1]
            : [1, 1.15, 1],
          opacity: wished
            ? [0.25, 0.55, 0.25]
            : [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: wished ? 2.2 : 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,77,136,0.45), transparent 70%)",
          filter: "blur(45px)",
          pointerEvents: "none",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 35 }).map(
        (_, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0.1,
              scale: 0.4,
            }}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [0.4, 1, 0.4],
              y: [-4, 5, -4],
            }}
            transition={{
              duration: 2.5 + (index % 5),
              repeat: Infinity,
              delay: index * 0.1,
            }}
            style={{
              position: "absolute",
              width:
                index % 7 === 0
                  ? "4px"
                  : "2px",
              height:
                index % 7 === 0
                  ? "4px"
                  : "2px",
              borderRadius: "50%",
              background: "#fff",
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
              boxShadow:
                "0 0 12px rgba(255,255,255,0.85)",
              pointerEvents: "none",
            }}
          />
        )
      )}

      {/* Celebration particles after wish */}
      <AnimatePresence>
        {wished &&
          Array.from({ length: 30 }).map(
            (_, index) => (
              <motion.div
                key={`celebration-${index}`}
                initial={{
                  opacity: 1,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: 0,
                  scale:
                    0.6 + (index % 4) * 0.2,
                  x:
                    ((index * 83) % 400) -
                    200,
                  y:
                    -80 -
                    ((index * 47) % 300),
                  rotate:
                    index % 2 === 0
                      ? 180
                      : -180,
                }}
                transition={{
                  duration:
                    1.5 +
                    (index % 5) * 0.15,
                  delay:
                    (index % 6) * 0.04,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "48%",
                  zIndex: 8,
                  width:
                    index % 3 === 0
                      ? "8px"
                      : "5px",
                  height:
                    index % 3 === 0
                      ? "8px"
                      : "5px",
                  borderRadius:
                    index % 2 === 0
                      ? "50%"
                      : "2px",
                  background:
                    index % 4 === 0
                      ? "#fff"
                      : "#ff82aa",
                  boxShadow:
                    "0 0 10px rgba(255,255,255,0.7)",
                  pointerEvents: "none",
                }}
              />
            )
          )}
      </AnimatePresence>

      {/* Content */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Date */}
        <motion.p
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          style={{
            margin: 0,
            color: "#ffb6c1",
            fontSize: "12px",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          18 • September
        </motion.p>

        {/* Small subtitle */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.35,
          }}
          style={{
            margin:
              "18px 0 0",
            color:
              "rgba(255,255,255,0.7)",
            fontSize: "13px",
            letterSpacing: "3px",
          }}
        >
          A LITTLE MOMENT JUST FOR YOU
        </motion.p>

        {/* Cake */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.25,
            y: 50,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 1.25,
            type: "spring",
            stiffness: 85,
          }}
          style={{
            position: "relative",
            marginTop: "28px",
            fontSize:
              "clamp(95px, 26vw, 155px)",
            lineHeight: 1,
            filter:
              "drop-shadow(0 18px 28px rgba(0,0,0,0.5)) drop-shadow(0 0 30px rgba(255,77,136,0.35))",
          }}
        >
          🎂

          {/* Candle flame */}
          <AnimatePresence>
            {!wished && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: [0.9, 1.15, 0.9],
                  y: [0, -3, 0],
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "-2px",
                  left: "50%",
                  transform:
                    "translateX(-50%)",
                  fontSize: "34px",
                  filter:
                    "drop-shadow(0 0 12px rgba(255,180,80,0.9))",
                }}
              >
                🔥
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Birthday title */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          style={{
            margin:
              "18px 0 0",
            fontSize:
              "clamp(32px, 8vw, 58px)",
            lineHeight: 1.1,
            fontWeight: 700,
            textShadow:
              "0 0 32px rgba(255,77,136,0.5)",
          }}
        >
          Happy Birthday,
          <br />
          <span
            style={{
              color: "#ff6f9c",
            }}
          >
            My Jaan ❤️
          </span>
        </motion.h1>

        {/* Initial message */}
        <AnimatePresence mode="wait">
          {!wished ? (
            <motion.div
              key="before-wish"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <p
                style={{
                  maxWidth: "600px",
                  margin:
                    "20px auto 0",
                  color: "#ead6df",
                  fontSize:
                    "clamp(16px, 4vw, 20px)",
                  lineHeight: 1.7,
                }}
              >
                Before we continue our little
                story...
                <br />
                there is one thing I want you to do.
              </p>

              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                style={{
                  margin:
                    "18px 0 0",
                  color: "#ffb6c1",
                  fontSize:
                    "clamp(17px, 4vw, 21px)",
                  fontStyle: "italic",
                }}
              >
                Make a wish, Jaan... ✨
              </motion.p>

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
                  delay: 1.7,
                }}
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 0 50px rgba(255,77,136,0.65)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={makeWish}
                style={{
                  marginTop: "28px",
                  minWidth: "250px",
                  padding:
                    "16px 32px",
                  borderRadius: "50px",
                  border:
                    "1px solid rgba(255,255,255,0.18)",
                  background:
                    "linear-gradient(135deg, #ff4d88, #ff82aa)",
                  color: "#fff",
                  fontSize: "17px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow:
                    "0 0 30px rgba(255,77,136,0.35)",
                }}
              >
                ✨ Make a Wish
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="after-wish"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* Wish complete */}
              <motion.div
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                animate={{
                  scale: [0.5, 1.15, 1],
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                }}
                style={{
                  marginTop: "24px",
                  fontSize: "38px",
                  filter:
                    "drop-shadow(0 0 18px rgba(255,77,136,0.65))",
                }}
              >
                ✨ ❤️ ✨
              </motion.div>

              <p
                style={{
                  margin:
                    "15px 0 0",
                  color: "#ffb6c1",
                  fontSize:
                    "clamp(19px, 5vw, 25px)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                }}
              >
                Wish made. ❤️
                <br />
                <span
                  style={{
                    fontSize:
                      "clamp(15px, 4vw, 18px)",
                    color: "#ead6df",
                    fontStyle: "normal",
                  }}
                >
                  Now let's make some memories...
                </span>
              </p>

              {/* Continue button */}
              <motion.button
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
                  delay: 0.8,
                  duration: 0.7,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 0 50px rgba(255,77,136,0.65)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={openGallery}
                disabled={opening}
                style={{
                  marginTop: "27px",
                  minWidth: "275px",
                  padding:
                    "17px 30px",
                  borderRadius: "50px",
                  border:
                    "1px solid rgba(255,255,255,0.18)",
                  background:
                    "linear-gradient(135deg, #ff4d88, #ff82aa)",
                  color: "#fff",
                  fontSize: "17px",
                  fontWeight: 600,
                  cursor: opening
                    ? "default"
                    : "pointer",
                  boxShadow:
                    "0 0 32px rgba(255,77,136,0.4)",
                  opacity: opening ? 0.75 : 1,
                }}
              >
                {opening
                  ? "Opening Our Memories... ❤️"
                  : "Our Memories Await 📸"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Bottom caption */}
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
        {wished
          ? "A BEAUTIFUL MEMORY IS WAITING ❤️"
          : "MAKE A WISH • CLOSE YOUR EYES • THINK OF SOMETHING BEAUTIFUL"}
      </motion.p>

      {/* Opening transition */}
      <AnimatePresence>
        {opening && (
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
              duration: 0.6,
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background:
                "radial-gradient(circle at center, #4b0b35 0%, #080009 65%, #000 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{
                scale: 0.3,
                opacity: 0,
              }}
              animate={{
                scale: [0.3, 1.15, 1],
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
              }}
              style={{
                fontSize: "70px",
                filter:
                  "drop-shadow(0 0 30px rgba(255,77,136,0.7))",
              }}
            >
              💖
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
                delay: 0.45,
              }}
              style={{
                marginTop: "20px",
                color: "#ffb6c1",
                fontSize: "13px",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Turning memories into moments...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}