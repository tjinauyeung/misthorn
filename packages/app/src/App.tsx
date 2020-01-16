/** @jsx jsx */

import { useEffect, useState, Fragment } from "react";
import { jsx } from "@emotion/core";
import {
  Loader,
  Aside,
  Show,
  Container,
  Title,
  List,
  Song,
  Thumb,
  Duration,
  Body,
  Shadow,
  Player,
  Controls,
  Progress,
  ProgressBar,
  Button
} from "./App.styled";
import { Waveform } from "./components/Waveform";
import { Pause } from "./icons/Pause";
import { Play } from "./icons/Play";

interface ISong {
  id: number;
  artist: string;
  name: string;
  album: string;
  duration: number;
  cover: string;
  src: string;
}

interface ISongPlaying extends ISong {
  current: number;
}

let count = 1;

function makeSongs(cover) {
  return Array.from({ length: 20 }).map(() => ({
    id: count++,
    artist: "Nas",
    name: "NY State of Mind",
    album: "illmatic",
    duration: Math.floor(Math.random() * 300) + 200,
    cover: cover.url,
    src:
      "http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
  }));
}

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showAside, setShowAside] = useState(false);
  const [on, setOn] = useState(false);
  const [songs, setSongs] = useState([] as ISong[]);
  const [activeSong, setActiveSong] = useState({} as ISongPlaying);

  useEffect(() => {
    fetch("http://localhost:8000/random/thumbnail")
      .then(res => res.json())
      .then(cover => makeSongs(cover))
      .then(songs => setSongs(songs))
      .catch(e => {
        const cover = {
          url: ""
        };
        setSongs(makeSongs(cover));
      })
      .finally(() => setLoading(false));
  }, []);

  function playSong(song: ISong) {
    setOn(true);
    setActiveSong({
      ...song,
      current: Math.floor(Math.random() * 200)
    });
  }

  function toggleMusic() {
    setOn(isOn => !isOn);
  }

  if (loading) {
    return <Loader>loading...</Loader>;
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
      <Player active={!!activeSong.src}>
        <Thumb size={100} src={activeSong.cover}></Thumb>
        <Controls>
          <Button onClick={toggleMusic}>{on ? <Pause /> : <Play />}</Button>
        </Controls>
        <div style={{ flex: 1 }}>
          <Waveform playing={on} src={activeSong.src} />
        </div>
      </Player>
      )}
    </Fragment>
  );
};
