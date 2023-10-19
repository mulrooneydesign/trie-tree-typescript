/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Trie } from '../../trie-tree/trie';
import { Input, Button, CheckWord } from '../index';
import { css } from '@emotion/react';

const wrapperStyles = css`
  display: flex;
  gap: 0.5rem;
`;

const noteStyles = css`
  opacity: 0.5;
`;

export default function WordTrie() {
  const [trie] = useState<Trie>(new Trie());
  const [word, setWord] = useState<string>('');
  const [hasDictionary, setHasDictionary] = useState<boolean>(false);

  function onClickHandler() {
    trie.addWord(word);
    setWord('');
  }

  useEffect(() => {
    async function fetchDictionary() {
      if (hasDictionary) return;

      try {
        const dict = await fetch('/dictionary.txt');
        if (dict.status === 200) {
          const text = await dict.text();
          const words = text.split('\r\n');
          words.forEach((word) => trie.addWord(word));
          setHasDictionary(true);
        }
      } catch (e) {
        console.error('Fetching dictionary error:', e);
      }
    }

    fetchDictionary();
  }, [hasDictionary, trie]);

  return (
    <div>
      <h1>Add a word to the dictionary</h1>
      <p>
        This is an example of using a trie class within React to add words to a
        dictionary. There are easier ways to do what this does but they are not
        always as efficient as a trie will be for this use case.
      </p>
      <h2>Does the word exist?</h2>
      <p>Type a word below to see if it exists in the dictionary.</p>
      <CheckWord wordsTrie={trie} />
      <h2>Add a word that doesn't exist</h2>
      <div css={wrapperStyles}>
        <Input
          type="text"
          placeholder="add word here"
          onChangeCallback={setWord}
          value={word}
        />
        <Button onClickHandler={onClickHandler} text="Add Word" />
      </div>
      <p css={noteStyles}>
        Note: the current dictionary contains acronyms and other non-words. Need
        to find a better source.
      </p>
    </div>
  );
}
