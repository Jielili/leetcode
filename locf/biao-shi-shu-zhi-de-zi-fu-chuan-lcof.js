/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
   s = s.trim()
   const re = /^(\+|\-)?((\d+\.?\d*)|(\.\d+))((e|E)(\+|\-)?\d+)?$/g

  return re.test(s);


 };

 console.log(isNumber(`0`))