/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let res = [], arr = []
  for (let i = 0; i < s.length; i++){
    if (res.includes(s[i])) {
      arr.push(res.splice(res.indexOf(s[i]),1)[0])
    }else if(!arr.includes(s[i])){
      res.push(s[i])
    }
  }
  return res[0] || ' '
};

console.log(firstUniqChar("aadadaad"))