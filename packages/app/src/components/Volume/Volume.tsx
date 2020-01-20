import React, { useRef, useState } from "react";
import styled from "styled-components";
import Volume from "../../icons/Volume";
import VolumeLouder from "../../icons/VolumeLouder";
import VolumeMuted from "../../icons/VolumeMuted";

const Wrapper = styled.div<{ collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  height: 50px;
  flex: 1 0 50px;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  transition: all 150ms ease;

  &:active {
    color: #fff;
  }

  &:focus {
    color: #fff;
    outline: none;
  }

  &:hover {
    color: #fff;
  }
`;

const Range = styled.input`
  appearance: none;
  width: 100%;
  height: 1;
  border-radius: 5px;
  background: #222;
  outline: none;
  transition: all 100ms ease;
  cursor: pointer;
  max-width: 140px;
  margin: 15px;

  &:hover::-webkit-slider-thumb {
    background: #fff;
  }

  &:active::-webkit-slider-thumb {
    background: #fff;
  }

  &::-webkit-slider-thumb {
    transition: all 100ms ease;
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #666;
  }
`;

const VolumeBar = ({
  isCollapsed,
  volume,
  onToggleMute,
  onVolumeChange,
  isMuted
}) => {
  const handleChange = e => {
    const value = e.currentTarget.value;
    onVolumeChange(value);
  };

  const incrementVolume = increment => e => {
    onVolumeChange(volume + increment);
  };

  return (
    <Wrapper collapsed={isCollapsed}>
      <Button onClick={onToggleMute}>
        {isMuted ? <VolumeMuted /> : <Volume />}
      </Button>
      <Range
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleChange}
      />
      <Button onClick={incrementVolume(10)}>
        <VolumeLouder />
      </Button>
    </Wrapper>
  );
};

export default VolumeBar;
