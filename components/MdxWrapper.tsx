// components/MdxWrapper.tsx
"use client";

import styled from "styled-components";

const MdxWrapper = styled.div`
  all: initial; /* Clear inherited styles from Tailwind */
  * {
    all: unset;
    display: revert;
    box-sizing: border-box;
  }

  font-family: 'Segoe UI', system-ui, sans-serif;
  color: #222;
  line-height: 1.6;
  font-size: 1rem;

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin: 1.5em 0 0.5em;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }

  p {
    margin-bottom: 1em;
  }

  ul, ol {
    padding-left: 1.5em;
    margin-bottom: 1em;
  }

  li {
    margin-bottom: 0.5em;
  }

  a {
    color: #0070f3;
    text-decoration: underline;
  }

  blockquote {
    border-left: 4px solid #ddd;
    padding-left: 1em;
    color: #666;
    font-style: italic;
  }

  code {
    background: #f3f3f3;
    padding: 0.2em 0.4em;
    font-family: monospace;
    border-radius: 4px;
    font-size: 0.95em;
  }

  pre {
    background: #f6f8fa;
    padding: 1em;
    overflow-x: auto;
    border-radius: 6px;
    font-size: 0.9rem;
    margin-bottom: 1.5em;
  }
    
  /* Add more MDX element styles as needed */
`;

export default MdxWrapper;
