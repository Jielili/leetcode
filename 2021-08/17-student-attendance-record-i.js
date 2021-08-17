/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let test = null
  test =s.match(/A/g)
  if (test && test.length > 2) {
    return false
  }
  test =s.match(/LLL/g)
  if (test && test.length >= 1) {
    return false
  }
  return true
};

console.log(checkRecord("PPA"))