// 一年中的第几天

// 给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。请你计算并返回该日期是当年的第几天。
// 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，
// 依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。

// 1,3,5,7,8,10,12 月都是31天
// 平年2月是28天，闰年是29天
// 是否是闰年
// 能被4整除且不能被100 整除 或者 能被400整除

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const daysOfMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const [year, month, day] = date.split('-').map(item=>Number(item))
  if (month > 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      daysOfMonth[1] = 29
    }
  }
  let days = 0;
  for (let i = 0; i < month-1; i++){
    days += daysOfMonth[i]
  }
  days += day;
  return days
};

console.log(dayOfYear("2003-03-01"))