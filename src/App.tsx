/** @jsxImportSource @emotion/react */
import WordTrie from './components/WordTrie/WordTrie';
import { css } from '@emotion/react';

const appStyles = css`
  display: flex;
  flex-direction: column;
  color: white;
  background: #2e2e2e;
  padding: 1rem;
  font-family: sans-serif;
  line-height: 1.725rem;
  border-radius: 5px;
  max-width: 800px;
`;

export default function App() {
  return (
    <div css={appStyles}>
      <WordTrie />
    </div>
  );
}
