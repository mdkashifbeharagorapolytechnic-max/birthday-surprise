"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import LoveLetter from "./LoveLetter";

export default function Gallery() {
  const [openLetter, setOpenLetter] = useState(false);

  const photos = [
    { image: "/images/photo1.jpeg", text: "Meri Heroine 😍" },
    { image: "/images/photo3.jpeg", text: "Your smile is my happiness 💕" },
    { image: "/images/photo4.jpeg", text: "You make life beautiful ❤️" },
    { image: "/images/photo5.jpeg", text: "Meri Pretty Girl ❤️" },
    { image: "/images/photo6.jpeg", text: "My happiest place is with you 💖" },
    { image: "/images/photo7.jpeg", text: "Drama Queen 😘" },
    { image: "/images/photo8.jpeg", text: "A memory I will always keep ✨" },
    { image: "/images/photo9.jpeg", text: "My forever person 💕" },
    { image: "/images/photo10.jpeg", text: "Forever and always ❤️" },
  ];

  if (openLetter) {
    return <LoveLetter />;
  }

  return (
    <div
      style={{
        background:
          "radial-gradient(circle,#3a0b25,#000 70%)",
        color: "#fff",
        minHeight: "100vh",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >

      <motion.h1
        initial={{opacity:0,y:-40}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        style={{
          fontSize:"clamp(35px,7vw,55px)",
          textShadow:"0 0 25px #ff4d88"
        }}
      >
        Our Beautiful Moments 📸
      </motion.h1>


      <p
        style={{
          fontSize:"20px",
          color:"#ffc0cb",
          marginBottom:"50px"
        }}
      >
        Every picture tells our story ❤️
      </p>


      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
          gap:"30px",
          maxWidth:"1100px",
          margin:"auto",
        }}
      >

      {photos.map((photo,index)=>(

        <motion.div
          key={index}
          initial={{
            opacity:0,
            y:60
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{once:true}}
          transition={{
            delay:index*0.08,
            duration:0.7
          }}
          whileHover={{
            scale:1.05
          }}
          style={{
            background:"rgba(255,255,255,0.08)",
            borderRadius:"25px",
            overflow:"hidden",
            boxShadow:
            "0 0 25px rgba(255,77,136,0.2)",
            border:
            "1px solid rgba(255,255,255,0.15)"
          }}
        >

          <motion.img
            src={photo.image}
            alt={photo.text}
            whileHover={{
              scale:1.1
            }}
            transition={{
              duration:0.5
            }}
            style={{
              width:"100%",
              height:"350px",
              objectFit: "contain",
              background: "#111",
            }}
          />


          <p
            style={{
              padding:"20px",
              fontSize:"18px",
              color:"#ffd6e0"
            }}
          >
            {photo.text}
          </p>


        </motion.div>

      ))}

      </div>


      <motion.button
        whileHover={{scale:1.08}}
        whileTap={{scale:0.95}}
        onClick={()=>setOpenLetter(true)}
        style={{
          marginTop:"60px",
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
        Continue To Love Letter 💌
      </motion.button>

    </div>
  );
}