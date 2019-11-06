import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.3s linear;
  }
  h2{
    color: ${({ theme }) => theme.headings};
  }
  .blog-content-body{
    background: ${({ theme }) => theme.card};
    transition: all 0.3s linear;
  }
  .character-content-body{
    background: ${({ theme }) => theme.card};
    transition: all 0.3s linear;
  }
  a {
    color: ${({ theme }) => theme.link};
    transition: all 0.3s linear;
  }
  `;