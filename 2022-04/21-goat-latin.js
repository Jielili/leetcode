//  没用库函数哎，yes

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let wordsuffix = 'a', word = '', res = '';
  const len = sentence.length, yuanyin = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i <= len; i++){
    if (sentence[i] === ' ' || !sentence[i]) {
      if (word !== '') {
        if (!yuanyin.includes(word[0].toLowerCase())) {
          word = word.substring(1) + word[0]
        }
        word += 'ma'
        word += wordsuffix
        wordsuffix += 'a'
      }
      res += word
      word = ''
      res += (sentence[i]||'')
    } else {
      word += sentence[i]
    }
  }
  return res
};

console.log(toGoatLatin("I speak Goat Latin"))