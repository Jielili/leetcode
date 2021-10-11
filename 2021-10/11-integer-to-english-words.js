/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  //   //9876543210
  //   //0010010010
  //   //0210210210
  //   //3222111000
  if (num === 0) {
    return 'Zero'
  }
  let ans = '';
  const numToStr = ['',' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine', ' Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen']
  const numToStr1 = ['','',' Twenty',' Thirty',' Forty',' Fifty',' Sixty',' Seventy',' Eighty',' Ninety']
  const level = ['', ' Thousand', ' Million', ' Billion']
  while (num / 1000 >0 ) {
    let str = ''
    let num1 = num % 1000;
    num = Math.floor(num / 1000)  
    const percentile = Math.floor(num1 / 100);
    str += numToStr[percentile]
    if (str !== '') {
      str += ' Hundred'
    }
    num1 = num1 % 100;
    if (num1 < 20) {
      str += numToStr[num1]
    } else {
      const tenths = Math.floor(num1 / 10);
      num1 = num1 % 10
      str += numToStr1[tenths];
      str += numToStr[num1]
    }
    const unit = level.splice(0, 1)[0]
    if (str.length > 0) {
      ans = str + unit + ans;
    }
  }
  return ans.substring(1);
};

console.log(numberToWords(1000000))