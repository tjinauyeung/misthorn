import React, { useEffect, useRef, useState, Fragment } from "react";
import {
  Loader,
  Container,
  Title,
  List,
  Shadow,
  Background
} from "./App.styled";
import Song from "./components/Song";
import { ISong } from "./declarations";
import Player from "./components/Player";

function makeSongs() {
  return [
    {
      id: 1,
      artist: "Nicolas Jaar",
      name: "Time for us",
      album: "Time for us",
      duration: "07:38",
      cover: "/static/nicolas-jaar-time-for-us.jpg",
      src: "/static/nicolas-jaar-time-for-us.mp3"
    },
    {
      id: 2,
      artist: "First Aid Kit",
      name: "Winter is all over you",
      album: "Winter is all over you",
      duration: "02:33",
      cover: "/static/first-aid-kit-winter-is-all-over-you-baauer-remix.jpg",
      src: "/static/first-aid-kit-winter-is-all-over-you-baauer-remix.mp3"
    },
    {
      id: 3,
      artist: "Chet Faker",
      name: "Talk is cheap",
      album: "Built on glass",
      duration: "03:39",
      cover: "/static/chet-faker-talk-is-cheap.jpg",
      src: "/static/chet-faker-talk-is-cheap.mp3"
    },
    {
      id: 4,
      artist: "Darkside",
      name: "Paper trails",
      album: "Psychic",
      duration: "04:50",
      cover: "/static/darkside-paper-trails.jpg",
      src: "/static/darkside-paper-trails.mp3"
    },
    {
      id: 5,
      artist: "Nicolas Jaar",
      name: "With just one glance",
      album: "Space is only noise",
      duration: "03:50",
      cover: "/static/nicolas-jaar-with-just-one-glance.jpg",
      src: "/static/nicolas-jaar-with-just-one-glance.mp3"
    },
    {
      id: 6,
      artist: "Weval",
      name: "Gimme some",
      album: "Easier",
      duration: "05:08",
      cover: "/static/weval-gimme-some.jpg",
      src: "/static/weval-gimme-some.mp3"
    }
  ];
}

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [songs, setSongs] = useState([] as ISong[]);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSong, setActiveSong] = useState({} as ISong);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Promise.resolve()
      .then(() => makeSongs())
      .then(songs => setSongs(songs))
      .finally(() => setLoading(false));
  }, []);

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      const y = window.scrollY;
      const opacity = (100 - (y / 150) * 100) * 0.01;
      setOpacity(opacity);
    });
  };

  const toggleSong = (song: ISong) => e => {
    if (activeSong.id === song.id) {
      if (isPlaying) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    } else {
      setActiveSong(song);
      setIsPlaying(true);
      setSeconds(0);
    }
  };

  const tick = secs => {
    setSeconds(secs);
  };

  const play = () => {
    setActiveSong(activeSong);
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const next = () => {
    const idx = songs.findIndex(song => song.id === activeSong.id);
    const nextSong = songs[idx + 1];
    if (nextSong) {
      setActiveSong(nextSong);
      setIsPlaying(true);
      setSeconds(0);
    }
  };

  const prev = () => {
    const idx = songs.findIndex(song => song.id === activeSong.id);
    const prevSong = songs[idx - 1];
    if (prevSong) {
      setActiveSong(prevSong);
      setIsPlaying(true);
      setSeconds(0);
    }
  };

  if (loading) {
    return <Loader>loading...</Loader>;
  }

  return (
    <Fragment>
      <Container>
        <Title opacity={opacity}>
          Misthørn
        </Title>
        <List>
          {songs.length > 0 &&
            songs.map((song: ISong) => (
              <Song
                key={song.id}
                onClick={toggleSong(song)}
                isActive={song.id === activeSong.id}
                isPlaying={song.id === activeSong.id && isPlaying}
                seconds={seconds}
                song={song}
              />
            ))}
        </List>
      </Container>
      <Background image={activeSong.cover} />
      <Shadow />
      <Player
        active={!!activeSong.src}
        isPlaying={isPlaying}
        onTick={tick}
        onPlay={play}
        onPause={pause}
        onPrev={prev}
        onNext={next}
        activeSong={activeSong}
      />
    </Fragment>
  );
};

export default App;
