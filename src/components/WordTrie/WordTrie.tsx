import React, { useState, useEffect } from 'react';
import { Trie } from '../../trie-tree/trie';

export default function WordTrie() {
  const [trie, setTrie] = useState<Trie>(new Trie());
  const [hasWord, setHasWord] = useState<boolean>(false);

  useEffect(() => {
    trie.addWord('hello');
    setHasWord(trie.hasWord('hello'));
  }, []);

  return (
    <div className="WordTrie">Word that exists: {hasWord ? 'hello' : ''}</div>
  );
}
