import React, { useEffect, useRef, FC, useState, Fragment } from "react";
import WaveSurfer from "wavesurfer.js";
import Cursor from "wavesurfer.js/dist/plugin/wavesurfer.cursor";
import { ISong } from "../../declarations";
import styled from "styled-components";

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 10px;
  color: #fff;
`;

let ws: WaveSurfer = {} as WaveSurfer;

const Waveform: FC<{
  playing?: boolean;
  song: ISong;
  onFinish: () => void;
  onTick: (seconds: number) => void;
}> = ({ playing = false, song = {}, onTick, onFinish }) => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ws.destroy && ws.destroy();
    ws = WaveSurfer.create({
      container: ref.current!,
      waveColor: "#222",
      progressColor: "#fff",
      cursorColor: "#222",
      cursorWidth: 0,
      barWidth: 1,
      barRadius: 1,
      barGap: 1,
      height: 30,
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
    ws.load(song.src);
    ws.on("ready", () => setLoading(false));
    ws.on("audioprocess", seconds => onTick(seconds));
    ws.on("finish", onFinish);
  }, [song]);

  useEffect(() => {
    if (!loading) {
      if (playing) {
        ws.play && ws.play();
      } else {
        ws.pause && ws.pause();
      }
    }
  }, [ws, loading, playing]);

  return (
    <Fragment>
      {loading && <Loader>loading...</Loader>}
      <div
        style={{ position: "relative", flex: 1, maxWidth: 900, margin: "auto" }}
        ref={ref}
      ></div>
    </Fragment>
  );
};

export default Waveform;
