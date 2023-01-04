import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  #root, html {
    height: 100%;
  }
  #root, body, html {
    width: 100%;
  }

  body {
    height: calc(100% - 8rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    background-color: #E1E1E6;
    color: #202024;
  }

  body,
  input,
  textarea,
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
  }
`;
