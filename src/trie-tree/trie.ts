export interface TrieNode {
  [key: string]: TrieNode | boolean | undefined;
  isWord?: boolean;
}

export interface TrieType {
  addLetter: (letter: string) => void;
  addWord: (word: string) => void;
  hasWord: (word: string) => boolean;
}

export class Trie {
  private currentNode: TrieNode;
  private root: TrieNode;

  constructor() {
    this.root = {};
    this.currentNode = this.root;
  }

  addLetter(letter: string) {
    this.currentNode[letter.toLowerCase()] = { isWord: false };
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
}
