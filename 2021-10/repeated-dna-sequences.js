/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const len = s.length
  const res = []
  // const cnt = new Map();
  const cnt = {};
  for (let i = 0; i <= len - 10; i++){
    const l = s.substring(i, i + 10)
    // if (s.lastIndexOf(l) !== i && !res.includes(l)) {
    //   res.push(l)
    // }
    // cnt.set(l, (cnt.get(l) || 0) + 1)
    if (l in cnt) {
      cnt[l]++
    } else {
      cnt[l] = 1
    }
    // if (cnt.get(l) === 2) {
    if(cnt[l]===2){
      res.push(l)
    }
  }
  return res;
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAA"))