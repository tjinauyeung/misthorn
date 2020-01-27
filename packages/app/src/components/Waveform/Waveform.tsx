import React, { useEffect, useRef, FC, useState, Fragment } from "react";
import WaveSurfer from "wavesurfer.js";
import Cursor from "wavesurfer.js/dist/plugin/wavesurfer.cursor";
import { ISong } from "../../declarations";
import Loader from "../Loader";

let ws: WaveSurfer = {} as WaveSurfer;

const Waveform: FC<{
  playing?: boolean;
  song: ISong;
  onFinish: () => void;
  onTick: (seconds: number) => void;
  volume: number;
  muted: boolean;
}> = ({
  playing = false,
  song = {},
  onTick,
  onFinish,
  volume = 0.5,
  muted = false
}) => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    ws.destroy && ws.destroy();
    ws = WaveSurfer.create({
      container: ref.current!,
      waveColor: "#666",
      progressColor: "#fff",
      cursorColor: "#fff",
      cursorWidth: 1,
      barWidth: 1,
      barRadius: 1,
      barGap: 2,
      responsive: true,
      height: 15,
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
      if (volume) {
        ws.setVolume(volume);
      }
      if (muted !== undefined) {
        ws.setMute(muted);
      }
    }
  }, [ws, loading, playing, volume, muted]);

  return (
    <Fragment>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Loader size={5} />
        </div>
      )}
      <div
        style={{ position: "relative", flex: 1, maxWidth: 768, margin: "auto" }}
        ref={ref}
      ></div>
    </Fragment>
  );
};

export default Waveform;
