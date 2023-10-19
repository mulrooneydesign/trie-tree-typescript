/** @jsxImportSource @emotion/react */
import WordTrie from './components/WordTrie/WordTrie';
import { css } from '@emotion/react';

const appStyles = css`
  display: flex;
  color: white;
  background: #2e2e2e;
  padding: 1rem;
  font-family: sans-serif;
  line-height: 1.725rem;
  border-radius: 5px;
`;

export default function App() {
  return (
    <div css={appStyles}>
      <WordTrie />
    </div>
  );
}
