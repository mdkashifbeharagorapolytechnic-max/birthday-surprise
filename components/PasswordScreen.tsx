"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Welcome from "./Welcome";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const checkPassword = () => {
    if (password === "0807") {
      setUnlocked(true);
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 800);
    }
  };

  if (unlocked) {
    return <Welcome />;
  }

  return (
    <div
      style={{
        background:
          "radial-gradient(circle, #3a0b25, #000 70%)",
        color: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: error ? [-10, 10, -10, 10, 0] : 0,
        }}
        transition={{
          duration: 0.8,
        }}
        style={{
          width: "100%",
          maxWidth: "380px",
          padding: "40px 30px",
          borderRadius: "25px",
          textAlign: "center",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0 0 40px rgba(255,77,136,0.25)",
        }}
      >

        <motion.div
          animate={{
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            fontSize: "70px",
          }}
        >
          🔒
        </motion.div>


        <h1
          style={{
            fontSize: "32px",
            marginTop: "20px",
          }}
        >
          Secret Birthday Movie 🎬
        </h1>


        <p
          style={{
            color: "#ffc0cb",
            marginTop: "15px",
          }}
        >
          Enter the secret password ❤️
        </p>


        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            marginTop: "25px",
            padding: "15px",
            borderRadius: "15px",
            border: "1px solid #ff4d88",
            background: "#000",
            color: "#fff",
            fontSize: "18px",
            textAlign: "center",
            outline: "none",
          }}
        />


        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={checkPassword}
          style={{
            marginTop: "25px",
            padding: "15px 40px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(45deg,#ff4d88,#ff99bb)",
            color: "#fff",
            fontSize: "18px",
            boxShadow:
              "0 0 25px rgba(255,77,136,0.5)",
          }}
        >
          Unlock ❤️
        </motion.button>

      </motion.div>
    </div>
  );
}