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
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let p = headA,
    q = headB;
  let can1 = true,
    can2 = true;
  while (p != q) {
    if (p.next === null && can1) {
      p = headB;
      can1 = false
    } else {
      p = p.next;
    }
    if (q.next === null && can2) {
      q = headA;
      can2 = false
    } else {
      q = q.next;
    }
  }
  return p;
};