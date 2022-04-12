// ascii
// A-Z 65-90
// a-z 97-122
// 0-9 48-57
// 如果记不住ascii，那就 'a'.charCodeAt() yes! tips加一
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let currentWidth = 0, lines = 1;

  for (let i = 0; i < s.length; i++){
    const j = s.charCodeAt(i) - 97;
    currentWidth += widths[j]
    if (currentWidth > 100) {
      lines++
      currentWidth = widths[j]
    }
  }
  return [lines, currentWidth]
};

console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"))
console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa"))