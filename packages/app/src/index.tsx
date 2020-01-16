import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Global } from "@emotion/core";
import global from "./global.styles";

ReactDOM.render(
  <Fragment>
    <Global styles={global} />
    <App />
  </Fragment>,
  document.getElementById("root")
);
