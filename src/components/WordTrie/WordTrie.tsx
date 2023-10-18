/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Trie } from '../../trie-tree/trie';
import { Input, Button } from '../index';
import { css } from '@emotion/react';

const wrapperStyles = css`
  display: flex;
  gap: 0.5rem;
`;

export default function WordTrie() {
  const [trie] = useState<Trie>(new Trie());
  const [word, setWord] = useState<string>('');

  function onClickHandler() {
    trie.addWord(word);
    setWord('');
  }

  return (
    <div>
      <h1>Add a word to the dictionary</h1>
      <div css={wrapperStyles}>
        <Input
          type="text"
          placeholder="..add word here"
          stateSetter={setWord}
          value={word}
        />
        <Button onClickHandler={onClickHandler} text="Add Word" />
      </div>
    </div>
  );
}
