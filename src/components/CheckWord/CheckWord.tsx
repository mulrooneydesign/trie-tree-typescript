/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Input } from '../index';
import { css } from '@emotion/react';

import type { TrieType } from '../../trie-tree/trie';

const wrapperStyles = css`
  display: flex;
  gap: 0.5rem;
`;

interface CheckWordProps {
  wordsTrie: TrieType;
}

export default function CheckWord({ wordsTrie }: CheckWordProps) {
  const [word, setWord] = useState<string>('');
  const [doesExist, setDoesExist] = useState<boolean>(false);

  const wordExists = wordsTrie.hasWord(word);

  useEffect(() => {
    setDoesExist(wordExists);
  }, [word, wordExists]);

  return (
    <div css={wrapperStyles}>
      <Input
        type="text"
        placeholder="word to check"
        onChangeCallback={setWord}
        value={word}
      />
      {doesExist && word.length > 0 && word !== ' ' ? (
        <p>{word} exists</p>
      ) : (
        <p>{word} doesn't exist</p>
      )}
    </div>
  );
}
