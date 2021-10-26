var WordDictionary = function () {
  this.words = new Map()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  const len = word.length;
  let map = this.words
  for (let i = 0; i < len; i++){
    const letter = word[i]
    if (!map.has(letter)) {
      map.set(letter, {
        value: new Map(),
        tail: i === len - 1 ? true : false
      })
    } 
    map = map.get(letter).value
  }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const searchFromMap = function (word, map) {
    const len = word.length;
    for (let i = 0; i < len; i++){
      const letter = word[i]
      if (map.has(letter)) {
        const node = map.get(letter)
        map = node.value
        if (node.tail && i === len -1) {
          return true
        }
      } else if (letter === '.') {
        const last = word.substring(i + 1)
        if (i === len - 1) {
          for (let node of map.values()) {
            if (node.tail) {
              return true
            }
          }
        } else {
          for (let node of map.values()) {
            if (searchFromMap(last, node.value)) {
              return true
            }
          }
        }
        return false
      } else {
        return false
      }
    }
    return false;
  }
  return searchFromMap(word, this.words)
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const ins = new WordDictionary()
ins.addWord("bad");
ins.addWord("dad");
ins.addWord("mad");
ins.search("pad"); // return False
ins.search("bad"); // return True
ins.search(".ad"); // return True
ins.search("b.."); // return True
