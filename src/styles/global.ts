import { createGlobalStyle } from 'styled-components';

const GithubImage = "https://xesque.rocketseat.dev/platform/1587379725719-attachment.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    background: #f0f0f5 url(${GithubImage}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;