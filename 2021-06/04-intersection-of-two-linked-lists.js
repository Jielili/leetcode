/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
//     let currA = headA,currB = headB;
//     while(currA != null){
//       while(currB !== null){
//         if(currA === currB){
//           return currA;
//         }
//         currB = currB.next;
//       }
//       currB = headB;
//       currA = currA.next;
//     }
//     return null;
// };

// var getIntersectionNode = function(headA, headB) {
//   let set = new Set();
//   while(headA !== null){
//     set.add(headA);
//     headA = headA.next;
//   }
//   while(headB !== null){
//     if(set.has(headB)){
//       return headB;
//     }
//     headB = headB.next;
//   }
//   return null;
// };
var getIntersectionNode = function (headA, headB) {
  let pa = headA,
    pb = headB;
  while (pa !== pb) {
    pa = pa === null ? headB : pa.next;
    pb = pb === null ? headA : pb.next;
  }
  return pa;
};

const c = {
  val: 8,
  next: {
    val: 4,
    next: {
      val: 5,
      next: null
    }
  }
}

const a = {
  val: 4,
  next: {
    val: 1,
    next: c
  }
}

const b = {
  val: 5,
  next: {
    val: 0,
    next: {
      val: 1,
      next: c
    }
  }
}

console.log(getIntersectionNode(a, b))