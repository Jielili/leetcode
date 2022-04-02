/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function (password) {
  let capitalLetter = false, smallLetter = false, number = false // 大写，小写
  const originLen = password.length;
  let continuousNumber = 1;
  let tempLength = 0;
  for (let i = 0; i < password.length; i++){
    if (!capitalLetter && 65 <= password.charCodeAt(i) && password.charCodeAt(i) <= 90) {
      capitalLetter = true
    }
    if (!smallLetter && 97 <= password.charCodeAt(i) && password.charCodeAt(i) <= 122) {
      smallLetter = true
    } 
    if (!number && 48 <= password.charCodeAt(i) && password.charCodeAt(i) <= 57) {
      number = true
    } 
    if (password[i] !== password[i - 1]) {
      continuousNumber = Math.max(continuousNumber,tempLength)
      tempLength = 1
    } else {
      tempLength++
    }
  }
  

};