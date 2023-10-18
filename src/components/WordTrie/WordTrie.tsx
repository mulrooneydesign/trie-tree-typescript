import React, { useState } from 'react';
import { Trie } from '../../trie-tree/trie';
import { Input } from '../index';

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
      <Input
        type="text"
        placeholder="..add word here"
        stateSetter={setWord}
        value={word}
      />
      <button onClick={onClickHandler}>Add Word</button>
    </div>
  );
}
