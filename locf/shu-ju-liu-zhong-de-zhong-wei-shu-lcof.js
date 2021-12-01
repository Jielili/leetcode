/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
   this.nums = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) { 
  let low = 0, high = this.nums.length
  while (low <= high) {
    const mid = (low + high) / 2
    if (this.nums[mid] <= num) {
      low = mid
    } else {
      high = mid
    }
  }
  this.nums.splice(low+1,0,num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const len = this.nums.length;
  if (len % 2 === 1) {
    return this.nums[Math.floor(len/2)]
  } else {
    return (this.nums[len/2] + this.nums[len/2 -1])/2
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */