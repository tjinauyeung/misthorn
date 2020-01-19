import React from "react";
import { Bar, Controls, Button } from "./Player.styled";
import Prev from "../../icons/Prev";
import Pause from "../../icons/Pause";
import Play from "../../icons/Play";
import Next from "../../icons/Next";
import Waveform from "../Waveform";

const Player = ({
  active,
  onPlay,
  onNext,
  onPrev,
  onPause,
  onTick,
  isPlaying,
  activeSong
}) => (
  <Bar active={active}>
    <Controls>
      <Button onClick={onPrev}>
        <Prev />
      </Button>
      <Button onClick={isPlaying ? onPause : onPlay}>
        {isPlaying ? <Pause /> : <Play />}
      </Button>
      <Button onClick={onNext}>
        <Next />
      </Button>
    </Controls>
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {activeSong.src && <Waveform playing={isPlaying} song={activeSong} onTick={onTick} onFinish={onNext}/>}
    </div>
  </Bar>
);

export default Player;
