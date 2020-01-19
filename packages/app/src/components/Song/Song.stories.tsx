import React from "react";
import Song from "./Song";
import withTheme from "../../hoc/withTheme";
import {withKnobs, boolean} from '@storybook/addon-knobs';

export default {
  title: "Song",
  component: Song,
  decorators: [withKnobs]
};

const song = {
  id: 1,
  artist: "Nicolas Jaar",
  name: "Incomprehensible Sun",
  album: "illmatic",
  duration: "02:30",
  cover: "https://images-na.ssl-images-amazon.com/images/I/71l7C7CSJ9L._SL1500_.jpg",
  src: ""
};

export const Default = () => withTheme(<Song isPlaying={boolean('isPlaying', false)} song={song} />);
