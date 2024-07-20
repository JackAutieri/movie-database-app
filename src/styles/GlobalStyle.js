// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background: #121212;
    color: #ffffff;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    text-align: center;
    margin: 20px 0;
    color: #e50914;
    font-size: 3em;
    font-weight: bold;
  }

  input, button {
    font-size: 1em;
  }
`;

export default GlobalStyle;
