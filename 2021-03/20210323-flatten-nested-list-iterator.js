/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  function flat(arr) {
    return arr.reduce((res, item) => {
      return res.concat(Array.isArray(item) ? (flat(item)) : item)
    }, [])
  }
  this.list = flat(nestedList);
  console.log(nestedList);
  console.log(this.list);
  this.i = 0;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  if (this.list.length > this.i) {
    return true;
  } else {
    return false;
  }
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  let a = this.list[this.i]
  this.i++;
  return a;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

let i = new NestedIterator([
  [1, 1], 2, [1, 1]
])
let a = [];
while (i.hasNext()) a.push(i.next())
console.log(a);



Promise.resolve().then(() => {
  console.log(0)
  return Promise.resolve(4);
}).then((res) => {
  console.log(res)
})


Promise.resolve().then(() => {
  console.log(1)
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})