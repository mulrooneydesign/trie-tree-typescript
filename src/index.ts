interface TrieNode {
  [key: string]: TrieNode | boolean;
  isWord?: boolean;
}

class Trie {
  private currentNode: TrieNode;
  private root: TrieNode;

  constructor() {
    this.root = {};
    this.currentNode = this.root;
  }

  addLetter(letter: string) {
    this.currentNode[letter] = { isWord: false };
  }

  addWord(word: string) {
    const letters = word.split('');

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
    const letters = word.split('');

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

    if (word === result && this.currentNode.isWord) {
      return true;
    }

    return false;
  }
}

const trie = new Trie();

['hello', 'goodbye', 'goodness', 'gracious'].forEach((word) => {
  trie.addWord(word);
});
