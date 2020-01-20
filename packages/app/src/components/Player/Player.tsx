import React, { useState } from "react";
import {
  Bar,
  Wrapper,
  Minimize,
  Controls,
  WaveformWrapper,
  Button
} from "./Player.styled";
import Prev from "../../icons/Prev";
import Pause from "../../icons/Pause";
import Play from "../../icons/Play";
import Next from "../../icons/Next";
import Waveform from "../Waveform";
import Volume from "../Volume";
import ChevronDown from "../../icons/ChevronDown";

const Player = ({
  active,
  onPlay,
  onNext,
  onPrev,
  onPause,
  onTick,
  isPlaying,
  activeSong
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  function toggleCollapse(e) {
    setCollapsed(!collapsed);
  }

  function adjustVolume(volume) {
    setVolume(volume / 100);
  }

  function toggleMute() {
    setMuted(!muted);
  }

  return (
    <Bar active={active}>
      <Wrapper collapsed={collapsed}>
        <Minimize collapsed={collapsed} onClick={toggleCollapse}>
          <ChevronDown />
        </Minimize>
        <WaveformWrapper collapsed={collapsed}>
          {activeSong.src && (
            <Waveform
              playing={isPlaying}
              song={activeSong}
              onTick={onTick}
              onFinish={onNext}
              volume={volume}
              muted={muted}
            />
          )}
        </WaveformWrapper>
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
        <Volume
          volume={volume * 100}
          isMuted={muted}
          isCollapsed={collapsed}
          onVolumeChange={adjustVolume}
          onToggleMute={toggleMute}
        ></Volume>
      </Wrapper>
    </Bar>
  );
};

export default Player;
