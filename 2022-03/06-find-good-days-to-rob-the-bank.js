// 2100 适合打劫银行的日子


// 适合打劫的日子，前time天，非递增；后time天，非递减
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  const res = [], len = security.length;
  if (time === 0) {
    return new Array(len).fill(0).map((v,i)=>i)
  }
  let firstHalf = 0, secondHalf = 0, i = 0, equal = 0;
  for (let i = 1; i < len ; i++){
    if (security[i] < security[i - 1]) {
      if (security[i - 1] > security[i - 2]) {
        firstHalf = 1
      } else {
        firstHalf++
      }
      secondHalf = 0;
    } else if (security[i] > security[i - 1]) {
      secondHalf++
      if (firstHalf >= time && secondHalf == time) {
        res.push(i - time)
        if (equal > 0) {
          secondHalf--;
          equal--
        } else {
          firstHalf = 0
          secondHalf = 0;
        }
      }
    } else {
      if (firstHalf < time) {
        firstHalf++
      } else if (secondHalf < time) {
        if (equal === secondHalf) {
          equal++
        }
        secondHalf++
      }
      if (firstHalf>=time && secondHalf>=time) {
        res.push(i - time)
        if (equal > 0) {
          secondHalf--;
          equal--
        }else {
          firstHalf = 0
          secondHalf = 0;
        }
      }
    }
  }
  return res
};


// console.log(goodDaysToRobBank([5,3,3,3,5,6,2],2))
// console.log(goodDaysToRobBank([1,1,1,1,1],0))
// console.log(goodDaysToRobBank([1,2,3,4,5,6],2))
// console.log(goodDaysToRobBank([1], 5))
// console.log(goodDaysToRobBank([0, 4, 3, 0, 0], 1))
// console.log(goodDaysToRobBank([2,4,0,5,5],
//   1))
// console.log(goodDaysToRobBank([77, 9, 111, 138, 139, 183, 112, 127, 38, 123, 198, 86, 163, 50, 140, 106, 99, 140, 152, 176, 124, 181, 14, 113, 53, 186, 76, 165, 32, 26, 137, 4, 186, 193, 130, 157, 173, 52, 27, 101, 154, 129, 34, 200, 51, 184, 127, 147, 197, 151, 190, 95, 62, 182, 77, 34, 174, 162, 7, 84, 105, 103, 128], 2))

console.log(goodDaysToRobBank([1,1,1,2,2,0,1,1],
  2))