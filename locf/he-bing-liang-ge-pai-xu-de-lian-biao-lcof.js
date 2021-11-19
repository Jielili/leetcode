/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const l = new ListNode()
  while (l1 && l2) {
    const cur1 = l1.val
    const cur2 = l2.val
    if (cur1 < cur2) {
      l.next = l1
      l1 = l1.next
    } else {
      l.next = l2
      l2 = l2.next
    }
  }
  if (l1) {
    l.next = l1
  }
  if (l2) {
    l.next = l2
  }
  return l
};

console.log(mergeTwoLists())