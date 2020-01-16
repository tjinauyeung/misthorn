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
  NowPlaying,
  Progress,
  ProgressBar
} from "./App.styled";

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
  const [loading, setLoading] = useState(true);
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
