/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b)
  const len = citations.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    // if (citations[i] <= (len - i)) {
    //   res = citations[i]
    // } else {
    //   res = Math.max(res, len - i)
    // }
    res = Math.max(res, Math.min(citations[i], len - i))
  }
  return res;
};

console.log(hIndex([0,0,6,1,5]))