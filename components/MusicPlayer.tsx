"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const playMusic = () => {
    audioRef.current
      ?.play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        console.log("Music requires user interaction");
      });
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 999,
          display: "flex",
          gap: "10px",
        }}
      >
        {!playing ? (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={playMusic}
            style={{
              padding: "12px 20px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(45deg,#ff4d88,#ff99bb)",
              color: "white",
              fontSize: "16px",
              boxShadow:
                "0 0 20px rgba(255,77,136,0.5)",
            }}
          >
            🎵 Play
          </motion.button>
        ) : (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={pauseMusic}
            style={{
              padding: "12px 20px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              background: "#222",
              color: "white",
              fontSize: "16px",
            }}
          >
            ⏸ Pause
          </motion.button>
        )}
      </motion.div>
    </>
  );
}