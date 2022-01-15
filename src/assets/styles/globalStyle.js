import { createGlobalStyle } from 'styled-components';

export const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
