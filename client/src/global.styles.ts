import { css } from "@emotion/core";

export default css`
  :root {
    --primary: #1dff82;
    --grey: #222;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  html {
    background: #000;
    color: #fff;
    font-family: sans-serif;
    font-weight: 400;
  }

  h1 {
    font-weight: 300;
  }

  hr {
    border: none;
    border-bottom: 1px solid var(--grey);
  }
`;
