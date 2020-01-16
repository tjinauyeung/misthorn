import React from "react";
import { Waveform } from "./Waveform";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Waveform",
  component: Waveform,
  decorators: [withKnobs]
};

export const Default = () => <Waveform playing={boolean("Playing", false)} />;
