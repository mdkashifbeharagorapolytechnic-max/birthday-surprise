"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LoveLetter from "./LoveLetter";

type Photo = {
  image: string;
  text: string;
};

export default function Gallery() {
  const [openLetter, setOpenLetter] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos: Photo[] = [
    {
      image: "/images/photo1.jpeg",
      text: "Meri Heroine 😍",
    },
    {
      image: "/images/photo3.jpeg",
      text: "Your smile is my happiness 💕",
    },
    {
      image: "/images/photo4.jpeg",
      text: "You make life beautiful ❤️",
    },
    {
      image: "/images/photo5.jpeg",
      text: "Meri Pretty Girl ❤️",
    },
    {
      image: "/images/photo6.jpeg",
      text: "My happiest place is with you 💖",
    },
    {
      image: "/images/photo7.jpeg",
      text: "Drama Queen 😘",
    },
    {
      image: "/images/photo8.jpeg",
      text: "A memory I will always keep ✨",
    },
    {
      image: "/images/photo9.jpeg",
      text: "My forever person 💕",
    },
    {
      image: "/images/photo10.jpeg",
      text: "Forever and always ❤️",
    },
  ];

  const closeViewer = () => {
    setSelectedPhoto(null);
  };

  const showNextPhoto = () => {
    if (selectedPhoto === null) return;

    setSelectedPhoto(
      selectedPhoto === photos.length - 1
        ? 0
        : selectedPhoto + 1
    );
  };

  const showPreviousPhoto = () => {
    if (selectedPhoto === null) return;

    setSelectedPhoto(
      selectedPhoto === 0
        ? photos.length - 1
        : selectedPhoto - 1
    );
  };

  if (openLetter) {
    return <LoveLetter />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, #4a0b32 0%, #1a0617 35%, #060009 72%, #000 100%)",
        color: "#fff",
        padding: "70px 20px 90px",
        boxSizing: "border-box",
      }}
    >
      {/* Ambient background glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,77,136,0.35), transparent 70%)",
          filter: "blur(50px)",
          top: "-180px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Second glow */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [20, -20, 20],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,140,180,0.25), transparent 70%)",
          filter: "blur(60px)",
          bottom: "-120px",
          right: "-100px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating stars */}
      {Array.from({ length: 25 }).map((_, index) => (
        <motion.span
          key={index}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5 + (index % 4),
            repeat: Infinity,
            delay: index * 0.15,
          }}
          style={{
            position: "fixed",
            width: index % 5 === 0 ? "3px" : "2px",
            height: index % 5 === 0 ? "3px" : "2px",
            borderRadius: "50%",
            background: "#fff",
            left: `${(index * 41) % 100}%`,
            top: `${(index * 67) % 100}%`,
            boxShadow:
              "0 0 10px rgba(255,255,255,0.8)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      {/* Header */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
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
          Chapter Two • Us
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 1,
          }}
          style={{
            margin: "18px 0 0",
            fontSize: "clamp(40px, 9vw, 72px)",
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: "-2px",
            textShadow:
              "0 0 35px rgba(255,77,136,0.45)",
          }}
        >
          Our Little
          <br />
          <span
            style={{
              color: "#ff6f9c",
            }}
          >
            Universe ❤️
          </span>
        </motion.h1>

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
            delay: 0.6,
            duration: 1,
          }}
          style={{
            maxWidth: "620px",
            margin: "25px auto 0",
            color: "#ead6df",
            fontSize: "clamp(16px, 4vw, 20px)",
            lineHeight: 1.7,
          }}
        >
          A few pictures.
          <br />
          A thousand feelings.
          <br />
          And memories I never want to lose. ✨
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "110px",
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          style={{
            height: "1px",
            margin: "30px auto 0",
            background:
              "linear-gradient(90deg, transparent, #ff6f9c, transparent)",
          }}
        />
      </section>

      {/* Photo counter */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          marginTop: "35px",
          color: "rgba(255,255,255,0.45)",
          fontSize: "12px",
          letterSpacing: "3px",
        }}
      >
        {photos.length} MEMORIES • ONE STORY
      </motion.div>

      {/* Gallery */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          margin: "45px auto 0",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "28px",
        }}
      >
        {photos.map((photo, index) => (
          <motion.article
            key={photo.image}
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: (index % 3) * 0.12,
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
            }}
            style={{
              position: "relative",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035))",
              border:
                "1px solid rgba(255,255,255,0.14)",
              borderRadius: "26px",
              overflow: "hidden",
              boxShadow:
                "0 20px 50px rgba(0,0,0,0.35)",
              backdropFilter: "blur(14px)",
            }}
          >
            {/* Image area */}
            <div
              onClick={() => setSelectedPhoto(index)}
              style={{
                position: "relative",
                width: "100%",
                height: "360px",
                overflow: "hidden",
                background: "#080808",
                cursor: "pointer",
              }}
            >
              <motion.img
                src={photo.image}
                alt={photo.text}
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  background: "#080808",
                }}
              />

              {/* Image gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55), transparent 45%)",
                  pointerEvents: "none",
                }}
              />

              {/* Open icon */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                }}
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background:
                    "rgba(0,0,0,0.45)",
                  border:
                    "1px solid rgba(255,255,255,0.25)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  backdropFilter: "blur(8px)",
                  pointerEvents: "none",
                }}
              >
                ⛶
              </motion.div>

              {/* Photo number */}
              <div
                style={{
                  position: "absolute",
                  left: "18px",
                  bottom: "16px",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "11px",
                  letterSpacing: "2px",
                }}
              >
                MEMORY {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Caption */}
            <div
              style={{
                padding: "20px 20px 22px",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#ffe0e8",
                  fontSize: "17px",
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {photo.text}
              </p>

              <p
                style={{
                  margin: "8px 0 0",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                A little piece of us
              </p>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Continue button */}
      <motion.section
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          marginTop: "75px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#ffb6c1",
            fontSize: "15px",
            fontStyle: "italic",
          }}
        >
          And this is only a small part of our story...
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 45px rgba(255,77,136,0.55)",
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() => setOpenLetter(true)}
          style={{
            marginTop: "25px",
            padding: "16px 34px",
            minWidth: "260px",
            borderRadius: "50px",
            border:
              "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
            background:
              "linear-gradient(135deg, #ff4d88, #ff82aa)",
            color: "#fff",
            fontSize: "17px",
            fontWeight: 600,
            boxShadow:
              "0 0 25px rgba(255,77,136,0.3)",
          }}
        >
          Read What My Heart Says 💌
        </motion.button>
      </motion.section>

      {/* Bottom */}
      <p
        style={{
          position: "relative",
          zIndex: 2,
          margin: "55px 0 0",
          textAlign: "center",
          color: "rgba(255,255,255,0.3)",
          fontSize: "10px",
          letterSpacing: "3px",
        }}
      >
        SOME MEMORIES ARE FOREVER ❤️
      </p>

      {/* Fullscreen Photo Viewer */}
      <AnimatePresence>
        {selectedPhoto !== null && (
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
            onClick={closeViewer}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background:
                "rgba(0,0,0,0.92)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "25px",
              boxSizing: "border-box",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Close */}
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={closeViewer}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 105,
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                border:
                  "1px solid rgba(255,255,255,0.2)",
                background:
                  "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "22px",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              ×
            </motion.button>

            {/* Previous */}
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={(event) => {
                event.stopPropagation();
                showPreviousPhoto();
              }}
              style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 105,
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border:
                  "1px solid rgba(255,255,255,0.2)",
                background:
                  "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              ‹
            </motion.button>

            {/* Next */}
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={(event) => {
                event.stopPropagation();
                showNextPhoto();
              }}
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 105,
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border:
                  "1px solid rgba(255,255,255,0.2)",
                background:
                  "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              ›
            </motion.button>

            {/* Viewer content */}
            <motion.div
              key={selectedPhoto}
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.88,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              style={{
                width: "100%",
                maxWidth: "1000px",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={photos[selectedPhoto].image}
                alt={photos[selectedPhoto].text}
                style={{
                  maxWidth: "100%",
                  maxHeight: "72vh",
                  objectFit: "contain",
                  borderRadius: "16px",
                  boxShadow:
                    "0 0 70px rgba(255,77,136,0.25)",
                  background: "#080808",
                }}
              />

              <p
                style={{
                  margin:
                    "22px 55px 0",
                  color: "#ffe0e8",
                  fontSize:
                    "clamp(17px, 4vw, 23px)",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                {photos[selectedPhoto].text}
              </p>

              <p
                style={{
                  margin: "8px 0 0",
                  color:
                    "rgba(255,255,255,0.4)",
                  fontSize: "11px",
                  letterSpacing: "2px",
                }}
              >
                {selectedPhoto + 1} /{" "}
                {photos.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}