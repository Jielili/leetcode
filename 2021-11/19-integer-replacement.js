/**
 * @param {number} n
 * @return {number}
 */
 var integerReplacement = function(n) {
  if (n === 1) {
    return 0;
}
if (n % 2 === 0) {
    return 1 + integerReplacement(Math.floor(n / 2));
}
return 2 + Math.min(integerReplacement((n -1)/ 2), integerReplacement((n +1)/ 2));

   
 };

 console.log(integerReplacement(7))