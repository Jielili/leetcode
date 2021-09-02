/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let len = 0
  while (head) {
    len++
    head = head.next
  }
  let res = head;
  for (let i = 1; i < len - k + 1; i++){
    res = res.next
  }
  return res
};