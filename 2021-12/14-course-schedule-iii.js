// 这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，
// 其中 courses[i] = [durationi, lastDayi] 表示第 i 门课将会 持续 上 durationi 天课，
// 并且必须在不晚于 lastDayi 的时候完成。
// 你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。
// 返回你最多可以修读的课程数目。

// 贪心？动态规划？
// 好吧，是贪心

// 求证贪心 最优解真烦

// js还没有大根堆，得自己搞啊


/**
 * @param {number[][]} courses
 * @return {number}
 */
 var scheduleCourse = function(courses) {
   courses.sort((a, b) => {
     if (a[1] - b[1] === 0) {
       return a[0]-b[1]
     } else {
       return a[1]-b[1]
     }
   })
   const a = new customArr()
   for (let i = 0; i < courses.length; i++){
     const [d, last] = courses[i]
     if (d + a.getTotal() > last) {
       if (d < a.getMaxT()) {
         a.pop()
       } else {
         continue
       }
     }
     a.push(courses[i])
   }
   return a.getLength()
 };

var customArr = function () {
  this.a = []
  this.total = 0;
}

customArr.prototype.push = function (val) {
  let low = 0, high = this.a.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (this.a[mid][0] <= val[0]) {
      low = mid+1
    } else {
      high = mid -1
    }
  }
  this.a.splice(low, 0, val)
  this.total += val[0]
}

customArr.prototype.getMaxT = function () {
  if (this.a.length > 0) {
    return this.a[this.a.length-1][0]
  } else {
    return 0
  }
}

customArr.prototype.pop = function () {
  this.total -= (this.a.pop())[0]
}

customArr.prototype.getTotal = function () {
  return this.total
}

customArr.prototype.getLength = function () {
  return this.a.length
}


console.log(scheduleCourse([[7,11],[1,11],[1,3],[2,6],[5,6],[7,7],[4,8],[2,20],[1,17],[8,11]]))