"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function FinalMessage() {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        background:
          "radial-gradient(circle, #3a0b25, #000 70%)",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "30px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingHearts />


      {!show ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            style={{
              fontSize: "clamp(35px,8vw,60px)",
            }}
          >
            One More Surprise... 🎁
          </h1>


          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShow(true)}
            style={{
              marginTop: "40px",
              padding: "18px 45px",
              borderRadius: "50px",
              border: "none",
              background:
                "linear-gradient(45deg,#ff4d88,#ff99bb)",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              boxShadow:
                "0 0 30px rgba(255,77,136,0.6)",
            }}
          >
            ✨ Reveal ❤️
          </motion.button>
        </motion.div>
      ) : (

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
        >

          <motion.div
            animate={{
              rotate: [0,10,-10,0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{
              fontSize:"60px",
            }}
          >
            🎆
          </motion.div>


          <h1
            style={{
              fontSize:
                "clamp(45px,8vw,75px)",
              textShadow:
                "0 0 25px #ff4d88",
            }}
          >
            Happy Birthday 🎂
          </h1>


          <h2
            style={{
              fontSize:
                "clamp(40px,7vw,65px)",
              color:"#ff4d88",
              textShadow:
                "0 0 30px #ff4d88",
            }}
          >
            Olly ❤️
          </h2>


          <p
            style={{
              fontSize:
                "clamp(18px,4vw,28px)",
              maxWidth:"750px",
              lineHeight:"1.7",
              color:"#ffd6e0",
            }}
          >
            You are my today,
            my tomorrow,
            and my forever.
            <br /><br />
            Thank you for being the most
            beautiful chapter of my life ❤️
          </p>


          <motion.div
            animate={{
              scale:[1,1.2,1],
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
            }}
            style={{
              fontSize:"50px",
              marginTop:"30px",
            }}
          >
            ❤️✨🎆❤️✨
          </motion.div>


          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1}}
            style={{
              marginTop:"40px",
              fontSize:"24px",
              color:"#ffb6c1",
            }}
          >
            Forever Yours ❤️
          </motion.p>

        </motion.div>
      )}

    </div>
  );
}