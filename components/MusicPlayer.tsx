"use client";

import { useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <audio
      id="birthday-music"
      ref={audioRef}
      loop
      preload="auto"
    >
      <source src="/music/song.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}