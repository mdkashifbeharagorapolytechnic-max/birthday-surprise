"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FinalMessage from "./FinalMessage";

export default function LoveLetter() {
  const [showFinal, setShowFinal] = useState(false);
  const [text, setText] = useState("");

  const message = `
My Dearest Olly ❤️

You are the most beautiful part of my life.

Your smile makes my days brighter,
your presence makes everything special.

Thank you for all the beautiful memories,
all the happiness and all the love.

I wish you endless happiness,
success and a life full of dreams.

Happy Birthday My Love 🎂❤️

Forever Yours ❤️
`;

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setText(message.substring(0, index));
      index++;

      if (index > message.length) {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, []);


  if (showFinal) {
    return <FinalMessage />;
  }


  return (
    <div
      style={{
        background:
          "radial-gradient(circle,#3a0b25,#000 70%)",
        color:"#fff",
        minHeight:"100vh",
        padding:"50px 20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        textAlign:"center",
      }}
    >

      <motion.h1
        initial={{
          opacity:0,
          y:-40
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:1
        }}
        style={{
          fontSize:
          "clamp(35px,7vw,55px)",
          textShadow:
          "0 0 25px #ff4d88"
        }}
      >
        A Letter From My Heart 💌
      </motion.h1>


      <motion.div
        initial={{
          opacity:0,
          scale:0.8
        }}
        animate={{
          opacity:1,
          scale:1
        }}
        transition={{
          duration:1
        }}
        style={{
          marginTop:"40px",
          maxWidth:"750px",
          background:
          "rgba(255,255,255,0.08)",
          padding:"40px",
          borderRadius:"25px",
          border:
          "1px solid rgba(255,255,255,0.2)",
          boxShadow:
          "0 0 40px rgba(255,77,136,0.25)",
          fontSize:
          "clamp(17px,3vw,22px)",
          lineHeight:"1.9",
          whiteSpace:"pre-line",
          textAlign:"left",
          backdropFilter:"blur(10px)",
        }}
      >

        {text}

        <motion.span
          animate={{
            opacity:[1,0,1]
          }}
          transition={{
            duration:0.8,
            repeat:Infinity
          }}
        >
          |
        </motion.span>

      </motion.div>


      <motion.button
        initial={{
          opacity:0,
          y:30
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          delay:2
        }}
        whileHover={{
          scale:1.08
        }}
        whileTap={{
          scale:0.95
        }}
        onClick={()=>setShowFinal(true)}
        style={{
          marginTop:"45px",
          padding:"16px 45px",
          borderRadius:"40px",
          border:"none",
          cursor:"pointer",
          background:
          "linear-gradient(45deg,#ff4d88,#ff99bb)",
          color:"white",
          fontSize:"20px",
          boxShadow:
          "0 0 30px rgba(255,77,136,0.5)"
        }}
      >
        Final Surprise 🎆
      </motion.button>

    </div>
  );
}