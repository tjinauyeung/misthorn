/** @jsx jsx */

import { useEffect, useState, Fragment } from "react";
import styled from "@emotion/styled";
import { jsx, Global } from "@emotion/core";
import global from "./global.styles";

const Title = styled.h1`
  font-size: 60px;
  margin-top: 100px;
`;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Song = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }
`;

const Shadow = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30vh;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent 0%, #000 100%);
`;

const Thumb = styled.div<{ src: string; flex: string }>`
  flex: ${props => (props.flex ? props.flex : "none")};
  width: 150px;
  height: 150px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const Body = styled.div`
  padding-left: 50px;
`;

const List = styled.div`
  margin-bottom: 150px;
`;

const Player = styled.div<{ active: boolean }>`
  background: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid var(--grey);
  z-index: 4;
  transition: transform 200ms ease-in-out;
  transform: ${props => (props.active ? "none" : "translateY(100%)")};
  display: flex;
  align-items: center;
`;

const Duration = styled.p`
  font-family: monospace;
`;

const NowPlaying = styled.div`
  padding: 0 40px;
  font-size: 22px;
  font-weight: 200;
  border-left: 1px solid #222;
`;

const Progress = styled.div`
  appearance: none;
  width: 100%;
  height: 1px;
  background: #222;
  position: relative;
  margin-right: 50px;
`;

const ProgressBar = styled.div<{ value: number; max: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${props => props.max / props.value}%;
  background: #fff;

  &:hover:after {
    content: "";
    display: block;
    width: 9px;
    height: 9px;
    background: #fff;
    border-radius: 100%;
    position: absolute;
    right: 0;
    top: 0px;
    transform: translate(50%, -50%);
  }
`;

const Show = styled.button`
  font-family: monospace;
  color: #fff;
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  left: calc(100% + 20px);
  padding: 20px;
  transform: translateY(-50%);
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Aside = styled.aside<{ expand: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  background: #fff;
  font-family: monospace;
  padding: 50px 20px;
  width: 200px;
  z-index: 999;
  transform: ${props => (props.expand ? "none" : "translateX(-100%)")};
  transition: transform 400ms cubic-bezier(0.07, 0.7, 0.36, 0.99);
`;

interface ISong {
  id: number;
  artist: string;
  name: string;
  album: string;
  duration: number;
  cover: string;
}

interface ISongPlaying extends ISong {
  current: number;
}

export const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showAside, setShowAside] = useState(false);
  const [songs, setSongs] = useState([] as ISong[]);
  const [playing, setPlaying] = useState({} as ISongPlaying);

  useEffect(() => {
    Promise.all(
      Array.from({ length: 10 }).map(() => {
        return fetch("http://localhost:8000/random/thumbnail")
          .then(res => res.json())
          .then(cover => {
            return {
              id: count++,
              artist: "Nas",
              name: "NY State of Mind",
              album: "illmatic",
              duration: Math.floor(Math.random() * 300) + 200,
              cover: cover.url
            };
          });
      })
    )
      .then(songs => setSongs(songs))
      .finally(() => setLoading(false));
  }, []);

  let count = 1;

  function playSong(song: ISong) {
    setPlaying({
      ...song,
      current: Math.floor(Math.random() * 200)
    });
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <Fragment>
      <Aside expand={showAside}>
        credits here
        <Show onClick={e => setShowAside(show => !show)}>
          {showAside ? "hide" : "show"}
        </Show>
      </Aside>
      <Container>
        <Global styles={global} />
        <Title>Misthoorn</Title>
        <List>
          {songs.length > 0 &&
            songs.map((song: ISong) => (
              <Fragment key={song.id}>
                <Song onClick={e => playSong(song)}>
                  <Thumb src={song.cover}></Thumb>
                  <Body>
                    <h2>{song.artist}</h2>
                    <h1>{song.name}</h1>
                    <Duration>{song.duration}</Duration>
                  </Body>
                </Song>
                <hr />
              </Fragment>
            ))}
        </List>
      </Container>
      <Shadow />
      <Player active={!!playing.artist}>
        <Thumb src={playing.cover} flex="1 0 150px;"></Thumb>
        <NowPlaying>Now playing {playing.artist}</NowPlaying>
        <Progress>
          <ProgressBar value={playing.current} max={playing.duration} />
        </Progress>
      </Player>
    </Fragment>
  );
};
