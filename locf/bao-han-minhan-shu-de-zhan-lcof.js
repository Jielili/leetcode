/**
 * initialize your data structure here.
 */
 var MinStack = function () {
  this.arr = []
  this.b = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.arr.push(x)
  if (this.b.length === 0 || x <= this.b[this.b.length-1]) {
      this.b.push(x)
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  const e = this.arr.pop()
  if(e===this.b[this.b.length-1]){
      this.b.pop()
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.min = function () {
  return this.b[this.b.length-1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/