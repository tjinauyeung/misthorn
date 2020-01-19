import React, { SyntheticEvent } from "react";
import {
  Card,
  Artist,
  Name,
  Controls,
  Thumb,
  ThumbWrapper,
  NowPlaying,
  Body,
  Duration,
  TimePlaying
} from "./Song.styled";
import { ISong } from "../../declarations";
import Play from "../../icons/Play";
import Pause from "../../icons/Pause";

interface Props {
  song: ISong;
  isActive: boolean;
  isPlaying: boolean;
  seconds: number;
  onClick?: (e: SyntheticEvent) => void;
}

const fmtTime = s => {
  let secs = Math.floor(s);
  return (secs - (secs %= 60)) / 60 + (9 < secs ? ":" : ":0") + secs;
};

const Song = ({ onClick, isActive, isPlaying, song, seconds }: Props) => (
  <Card onClick={onClick} active={isPlaying}>
    <ThumbWrapper>
      <Thumb src={song.cover}></Thumb>
      <Controls>
        {isPlaying ? <Pause fill /> : <Play fill />}
      </Controls>
    </ThumbWrapper>
    <Body>
      {isActive && isPlaying && <NowPlaying>now playing</NowPlaying>}
      {isActive && !isPlaying && <NowPlaying>paused</NowPlaying>}
      <Artist>{song.artist}</Artist>
      <Name>{song.name}</Name>
      <Duration>
        {isActive && <TimePlaying>{fmtTime(seconds)} / </TimePlaying>}
        {song.duration}
      </Duration>
    </Body>
  </Card>
);

export default Song;
