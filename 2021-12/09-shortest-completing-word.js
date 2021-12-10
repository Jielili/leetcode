/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const letters = licensePlate.replace(/[^A-Za-z]/g, '').toLocaleLowerCase().split('')
  console.log(letters)

  const words_ = words.sort((a, b) => {
    if (a.length < b.length) {
      return -1
    } else if (a.length > b.length) {
      return 1
    } else {
      return 0
    }
  })

  for (let i = 0; i < words_.length; i++){
    const compare = words_[i].toLocaleLowerCase().split('')
    for (let j = 0; j < letters.length; j++){
      if (compare.includes(letters[j])) {
        compare.splice(compare.indexOf(letters[j]), 1)
        if (j === letters.length - 1) {
          return words_[i]
        }
      } else {
        break;
      }
    }
  }
};

console.log(shortestCompletingWord("OgEu755",["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]))