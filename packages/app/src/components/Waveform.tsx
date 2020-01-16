import React, { useEffect, useRef, useState, FC } from "react";
import WaveSurfer from "wavesurfer.js";
import Cursor from "wavesurfer.js/dist/plugin/wavesurfer.cursor";

let ws: WaveSurfer;

export const Waveform: FC<{ playing?: boolean; src?: string }> = ({
  playing = false,
  src = "http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
}) => {
  const ref = useRef(null);

  useEffect(() => {
    ws = WaveSurfer.create({
      container: ref.current!,
      waveColor: "#222",
      progressColor: "#fff",
      cursorColor: "#222",
      cursorWidth: 1,
      barWidth: 1,
      barRadius: 1,
      barGap: 1,
      height: 100,
      plugins: [
        Cursor.create({
          showTime: true,
          opacity: 1,
          customShowTimeStyle: {
            background: "#000",
            color: "#fff",
            padding: "2px",
            font: "normal 10px monospace"
          }
        })
      ]
    });
    ws.load(src);
  }, []);

  useEffect(() => {
    if (playing) {
      ws.play();
    } else {
      ws.pause();
    }
  }, [ws, playing]);

  return <div style={{ position: "relative" }} ref={ref}></div>;
};
