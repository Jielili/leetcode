// 两个链表的第一个公共节点
// 浪漫相遇 走过你来时的路

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
  if (!headA || !headB) {
    return null
  }
  let p = headA, q = headB; fan1 = true, fan2 = true
  while (p !== q) {
    if (p.next || !fan1) {
      p = p.next
    } else {
      p = headB
      fan1 = false
    }
    if (q.next || !fan2) {
      q = q.next
    } else {
      q = headA
      fan2 = false
    }
  }
  return p
};