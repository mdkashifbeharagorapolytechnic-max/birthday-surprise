"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FinalMessage from "./FinalMessage";

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [text, setText] = useState("");
  const [typingFinished, setTypingFinished] =
    useState(false);

  const message = `My Dearest Jaan ❤️

Sometimes I wonder how one person can become
such a beautiful part of someone's life.

And then I think about you.

Your smile can make an ordinary day feel special.
Your presence can make everything feel a little lighter.
And somehow, even the smallest moments with you
become memories I want to keep forever.

Thank you for every laugh,
every conversation,
every little moment,
and every beautiful memory
we have created together.

I may not always find the perfect words
to tell you how much you mean to me,
but I hope you always remember this...

You are incredibly special to me.

On your birthday,
I don't just wish you a beautiful day.

I wish you a life filled with happiness,
peace, success, beautiful dreams,
and all the love your heart deserves.

And if I get to be a part of that journey,
I will consider myself very lucky.

Happy Birthday, My Jaan 🎂❤️

Keep smiling.
Keep shining.
And never forget how loved you are.

Forever Yours ❤️`;

  useEffect(() => {
    if (!opened) return;

    let index = 0;

    const timer = setInterval(() => {
      setText(message.substring(0, index + 1));
      index++;

      if (index >= message.length) {
        clearInterval(timer);
        setTypingFinished(true);
      }
    }, 28);

    return () => clearInterval(timer);
  }, [opened]);

  const openLetter = () => {
    setOpened(true);
  };

  if (showFinal) {
    return <FinalMessage />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 20%, #5a123f 0%, #220818 35%, #080009 72%, #000 100%)",
        color: "#fff",
        padding: "55px 18px 90px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.32, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,77,136,0.4), transparent 70%)",
          filter: "blur(50px)",
          top: "-180px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* Second glow */}
      <motion.div
        animate={{
          x: [-60, 60, -60],
          y: [30, -30, 30],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,170,200,0.25), transparent 70%)",
          filter: "blur(60px)",
          right: "-120px",
          bottom: "-100px",
          pointerEvents: "none",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 35 }).map(
        (_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.1, 0.75, 0.1],
              scale: [0.5, 1, 0.5],
              y: [-3, 4, -3],
            }}
            transition={{
              duration:
                2.5 + (index % 5),
              repeat: Infinity,
              delay: index * 0.12,
            }}
            style={{
              position: "fixed",
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
                "0 0 10px rgba(255,255,255,0.8)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )
      )}

      {/* Header */}
      <motion.section
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
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: "850px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#ffb6c1",
            fontSize: "11px",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          Chapter Three • From My Heart
        </p>

        <h1
          style={{
            margin:
              "17px 0 0",
            fontSize:
              "clamp(38px, 9vw, 70px)",
            lineHeight: 1.05,
            fontWeight: 600,
            textShadow:
              "0 0 35px rgba(255,77,136,0.45)",
          }}
        >
          A Letter
          <br />
          <span
            style={{
              color: "#ff6f9c",
            }}
          >
            For My Jaan 💌
          </span>
        </h1>

        <p
          style={{
            maxWidth: "600px",
            margin:
              "22px auto 0",
            color: "#ead6df",
            fontSize:
              "clamp(15px, 4vw, 19px)",
            lineHeight: 1.7,
          }}
        >
          Some feelings are difficult to say
          out loud...
          <br />
          so I wrote them down for you.
        </p>
      </motion.section>

      <AnimatePresence mode="wait">
        {!opened ? (
          /* =========================
             SEALED ENVELOPE
             ========================= */
          <motion.section
            key="envelope"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -30,
            }}
            transition={{
              delay: 0.3,
              duration: 1,
              type: "spring",
              stiffness: 80,
            }}
            style={{
              position: "relative",
              zIndex: 5,
              width: "100%",
              maxWidth: "600px",
              marginTop: "55px",
              textAlign: "center",
            }}
          >
            {/* Envelope glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
              }}
              style={{
                position: "absolute",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,77,136,0.4), transparent 70%)",
                filter: "blur(35px)",
                left: "50%",
                top: "45%",
                transform:
                  "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />

            {/* Envelope */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "relative",
                width: "min(88vw, 480px)",
                height: "300px",
                margin: "0 auto",
                borderRadius: "18px",
                background:
                  "linear-gradient(145deg, #f6d7df, #d99aaa)",
                boxShadow:
                  "0 35px 80px rgba(0,0,0,0.5), 0 0 35px rgba(255,77,136,0.2)",
                overflow: "hidden",
              }}
            >
              {/* Envelope bottom */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, transparent 49%, rgba(160,80,105,0.18) 50%, transparent 51%), linear-gradient(45deg, transparent 49%, rgba(160,80,105,0.18) 50%, transparent 51%)",
                  pointerEvents: "none",
                }}
              />

              {/* Envelope flap */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  borderLeft:
                    "240px solid transparent",
                  borderRight:
                    "240px solid transparent",
                  borderTop:
                    "155px solid #efc3cf",
                  transform:
                    "translateX(-0px)",
                  filter:
                    "drop-shadow(0 5px 5px rgba(0,0,0,0.12))",
                }}
              />

              {/* Letter visible inside */}
              <motion.div
                animate={{
                  y: [2, -2, 2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "55px",
                  transform:
                    "translateX(-50%)",
                  width: "70%",
                  height: "190px",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(180deg, #fffaf1, #f7eadb)",
                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "#633c49",
                }}
              >
                <span
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontSize: "25px",
                    fontStyle: "italic",
                  }}
                >
                  For My Jaan
                </span>

                <span
                  style={{
                    marginTop: "12px",
                    fontSize: "30px",
                  }}
                >
                  ❤️
                </span>
              </motion.div>

              {/* Wax seal */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "30px",
                  transform:
                    "translateX(-50%)",
                  width: "66px",
                  height: "66px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(145deg, #9b294d, #e05278)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "27px",
                  boxShadow:
                    "0 8px 20px rgba(80,0,30,0.3), 0 0 20px rgba(255,77,136,0.35)",
                  zIndex: 5,
                }}
              >
                ❤️
              </motion.div>
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
                delay: 1,
              }}
              style={{
                marginTop: "35px",
                color: "#ffb6c1",
                fontSize: "16px",
                fontStyle: "italic",
              }}
            >
              I wrote something only for you...
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
                delay: 1.3,
              }}
              whileHover={{
                scale: 1.06,
                boxShadow:
                  "0 0 50px rgba(255,77,136,0.6)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={openLetter}
              style={{
                marginTop: "22px",
                minWidth: "250px",
                padding:
                  "16px 32px",
                borderRadius: "50px",
                border:
                  "1px solid rgba(255,255,255,0.15)",
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
              💌 Open My Letter
            </motion.button>
          </motion.section>
        ) : (
          /* =========================
             OPEN LETTER
             ========================= */
          <motion.section
            key="letter"
            initial={{
              opacity: 0,
              scale: 0.88,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            style={{
              position: "relative",
              zIndex: 5,
              width: "100%",
              maxWidth: "850px",
              marginTop: "45px",
            }}
          >
            {/* Paper glow */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "35px",
                background:
                  "radial-gradient(circle, rgba(255,77,136,0.25), transparent 70%)",
                filter: "blur(35px)",
                pointerEvents: "none",
              }}
            />

            {/* Paper */}
            <motion.div
              initial={{
                rotateX: 25,
                opacity: 0,
              }}
              animate={{
                rotateX: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.1,
              }}
              style={{
                position: "relative",
                padding:
                  "45px clamp(22px, 6vw, 70px) 50px",
                borderRadius: "8px",
                background:
                  "linear-gradient(180deg, #fffaf2 0%, #f8eadb 100%)",
                color: "#533844",
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.55)",
                textAlign: "left",
                overflow: "hidden",
                transformOrigin:
                  "top center",
              }}
            >
              {/* Paper texture lines */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(140,90,100,0.07) 32px)",
                  pointerEvents: "none",
                }}
              />

              {/* Decorative corner */}
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "22px",
                  fontSize: "28px",
                  opacity: 0.35,
                }}
              >
                ❤️
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontSize:
                      "clamp(23px, 5vw, 30px)",
                    fontStyle: "italic",
                    color: "#8f3e59",
                  }}
                >
                  My Dearest Jaan ❤️
                </p>

                <div
                  style={{
                    width: "70px",
                    height: "1px",
                    background:
                      "#d98da2",
                    margin:
                      "18px 0 28px",
                  }}
                />

                {/* Typewriter text */}
                <p
                  style={{
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontSize:
                      "clamp(16px, 3.8vw, 19px)",
                    lineHeight: 1.95,
                    color: "#59434b",
                  }}
                >
                  {text}
                  {!typingFinished && (
                    <motion.span
                      animate={{
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                      style={{
                        display: "inline-block",
                        width: "2px",
                        height: "20px",
                        marginLeft: "2px",
                        background:
                          "#b84d6b",
                        verticalAlign:
                          "middle",
                      }}
                    />
                  )}
                </p>

                {/* Signature */}
                <AnimatePresence>
                  {typingFinished && (
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
                        duration: 1,
                      }}
                      style={{
                        marginTop: "35px",
                        paddingTop: "25px",
                        borderTop:
                          "1px solid rgba(120,70,85,0.18)",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontFamily:
                            "Georgia, 'Times New Roman', serif",
                          fontSize:
                            "clamp(22px, 5vw, 31px)",
                          fontStyle: "italic",
                          color: "#a83d5c",
                        }}
                      >
                        Forever Yours ❤️
                      </p>

                      <p
                        style={{
                          margin:
                            "8px 0 0",
                          fontSize: "11px",
                          letterSpacing: "3px",
                          color:
                            "rgba(83,56,68,0.5)",
                          textTransform:
                            "uppercase",
                        }}
                      >
                        Always • Your Jaan
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Final button */}
            <AnimatePresence>
              {typingFinished && (
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
                    delay: 1.2,
                    duration: 0.8,
                  }}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      margin:
                        "32px 0 0",
                      color: "#ffb6c1",
                      fontSize: "15px",
                      fontStyle: "italic",
                    }}
                  >
                    And now...
                    <br />
                    there is one last little surprise.
                  </p>

                  <motion.button
                    whileHover={{
                      scale: 1.06,
                      boxShadow:
                        "0 0 50px rgba(255,77,136,0.65)",
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() =>
                      setShowFinal(true)
                    }
                    style={{
                      marginTop: "22px",
                      minWidth: "270px",
                      padding:
                        "17px 32px",
                      borderRadius: "50px",
                      border:
                        "1px solid rgba(255,255,255,0.16)",
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
                    One Last Surprise 🎆
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Footer */}
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
          position: "relative",
          zIndex: 5,
          margin:
            "55px 0 0",
          color:
            "rgba(255,255,255,0.25)",
          fontSize: "9px",
          letterSpacing: "3px",
          textAlign: "center",
        }}
      >
        SOME FEELINGS ARE MEANT TO BE KEPT FOREVER ❤️
      </motion.p>
    </main>
  );
}