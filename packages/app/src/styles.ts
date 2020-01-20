import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary: #1dff82;
    --grey: #666;
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
  }

  body {
    margin: 0;
  }
`;
