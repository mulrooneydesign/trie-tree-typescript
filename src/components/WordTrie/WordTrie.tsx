/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Trie } from '../../trie-tree/trie';
import { Input, Button, CheckWord } from '../index';
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
      <p>
        This is an example of using a trie class within React to add words to a
        dictionary. There are easier ways to do what this does but they are not
        always as efficient as a trie will be for this use case.
      </p>
      <div css={wrapperStyles}>
        <Input
          type="text"
          placeholder="add word here"
          onChangeCallback={setWord}
          value={word}
        />
        <Button onClickHandler={onClickHandler} text="Add Word" />
      </div>
      <h2>Does the word exist?</h2>
      <CheckWord wordsTrie={trie} />
    </div>
  );
}
