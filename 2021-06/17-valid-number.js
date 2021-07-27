/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let re = /^(\-|\+)?((\d+\.?\d*)|(\.\d+))((e|E)(\+|\-)?\d+)?$/g;

    return re.test(s);
};


console.log(isNumber('2'))
console.log(isNumber('0089'))
console.log(isNumber('-0.1'))
console.log(isNumber('-.9'))
console.log(isNumber('+3.14'))
console.log(isNumber('4.'))
console.log(isNumber('-.9'))
console.log(isNumber('abc'))
console.log(isNumber('1a'))
console.log(isNumber('1e'))
console.log(isNumber('--6'))
console.log(isNumber('-+3'))
console.log(isNumber('2e10'))
console.log(isNumber('-90E3'))
console.log(isNumber('3e+7'))
console.log(isNumber('+6e-1'))
console.log(isNumber('53.5e93'))
console.log(isNumber('-123.456e+789'))