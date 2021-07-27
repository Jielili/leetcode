/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let res = 0;
  const len = citations.length;
  for (let i = 0; i < len; i++) {
    res = Math.max(res, Math.min(citations[i], len - i))
  }
  return res;
};