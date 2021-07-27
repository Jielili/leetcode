/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (!map.has(letter)) {
      map.set(letter, '');
    }
    map.set(letter, map.get(letter) + letter)
  }

  return [...map.values()].sort((a, b) => b.length - a.length).join('');
};

console.log(frequencySort('tree'))