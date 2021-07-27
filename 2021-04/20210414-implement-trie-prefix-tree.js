/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.tree = {
    children: new Map(),
    end: 0
  }
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.tree;
  for (let i = 0; i < word.length; i++) {
    if (!node.children.has(word[i])) {
      node.children.set(word[i], {
        children: new Map(),
        end: 0
      });
    }
    node = node.get(word[i]);
  }
  node.end++;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.tree;
  for (let i = 0; i < word.length; i++) {
    if (!node.children.has(word[i])) {
      return false
    } else {
      node = node.get(word[i])
    }
  }
  if (node.end > 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.tree;
  for (let i = 0; i < prefix.length; i++) {
    if (!node.children.has(prefix[i])) {
      return false
    } else {
      node = node.get(prefix[i])
    }
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
