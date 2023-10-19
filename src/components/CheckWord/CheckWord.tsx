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
  const isPrefix = wordsTrie.isWordPrefix(word);

  useEffect(() => {
    setDoesExist(wordExists);
  }, [word, wordExists]);

  return (
    <>
      <div css={wrapperStyles}>
        <Input
          type="text"
          placeholder="word to check"
          onChangeCallback={setWord}
          value={word}
        />
      </div>
      <div>
        <Message word={word} doesExist={doesExist} isPrefix={isPrefix} />
      </div>
    </>
  );
}

interface MessageProps {
  word: string;
  doesExist: boolean;
  isPrefix: boolean;
}

const messageDefault = css`
  opacity: 0.4;
`;

const messageSuccess = css`
  color: #00ff00;
`;

const messageFail = css`
  color: #ff0831c3;
`;

function Message({ word, doesExist, isPrefix }: MessageProps) {
  const prefix = () => {
    return isPrefix ? 'but it is the start of a word' : '';
  };

  const display = (word: string) => {
    switch (true) {
      case doesExist && word.length > 0 && word !== ' ':
        return <p css={messageSuccess}>{word} exists in the dictionary</p>;
      case word === '':
        return <p css={messageDefault}>Type a word to start</p>;
      default:
        return (
          <p css={messageFail}>
            {word} doesn't exist {prefix()}
          </p>
        );
    }
  };

  return <div>{display(word)}</div>;
}
