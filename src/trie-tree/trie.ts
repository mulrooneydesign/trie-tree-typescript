export interface TrieNode {
  [key: string]: TrieNode | boolean | undefined;
  isWord?: boolean;
}

export interface TrieType {
  addLetter: (letter: string) => void;
  addWord: (word: string) => void;
  hasWord: (word: string) => boolean;
  isWordPrefix: (word: string) => boolean;
  getAllWords: (node: TrieNode, prefix: string) => string[];
  getPotentialWordsForPrefix: (prefix: string) => string[];
}

export class Trie {
  private currentNode: TrieNode;
  private root: TrieNode;

  constructor() {
    this.root = {};
    this.currentNode = this.root;
  }

  addLetter(letter: string) {
    const lowerCaseLetter = letter.toLowerCase();
    if (!this.currentNode[lowerCaseLetter]) {
      this.currentNode[lowerCaseLetter] = { isWord: false };
    }
  }

  addWord(word: string) {
    const letters = word.toLowerCase().split('');

    this.currentNode = this.root;

    letters.forEach((letter) => {
      if (this.currentNode[letter] === undefined) {
        this.addLetter(letter);
      }

      this.currentNode = this.currentNode[letter] as TrieNode;
    });

    this.currentNode.isWord = true;
  }

  hasWord(word: string) {
    const letters = word.toLowerCase().split('');
    this.currentNode = this.root;

    let result: string = '';

    letters.forEach((letter) => {
      if (this.currentNode[letter]) {
        result += letter;
        this.currentNode = this.currentNode[letter] as TrieNode;
      } else {
        return false;
      }
    });

    if (word.toLowerCase() === result && this.currentNode.isWord) {
      return true;
    }

    return false;
  }

  isWordPrefix(word: string) {
    const letters = word.toLowerCase().split('');
    this.currentNode = this.root;

    let result: string = '';

    letters.forEach((letter) => {
      if (this.currentNode[letter]) {
        result += letter;
        this.currentNode = this.currentNode[letter] as TrieNode;
      } else {
        return false;
      }
    });

    if (word.toLowerCase() === result) {
      return true;
    }

    return false;
  }

  getAllWords(node: TrieNode, prefix: string) {
    let words: string[] = [];

    if (node.isWord) {
      words.push(prefix);
    }

    for (const letter in node) {
      if (letter !== 'isWord') {
        words = words.concat(
          this.getAllWords(node[letter] as TrieNode, prefix + letter)
        );
      }
    }

    return words;
  }

  getPotentialWordsForPrefix(prefix: string) {
    const letters = prefix.toLowerCase().split('');
    this.currentNode = this.root;

    let result: string = '';

    letters.forEach((letter) => {
      if (this.currentNode[letter]) {
        result += letter;
        this.currentNode = this.currentNode[letter] as TrieNode;
      } else {
        return false;
      }
    });

    if (prefix.toLowerCase() === result) {
      return this.getAllWords(this.currentNode, prefix);
    }

    return [];
  }
}
