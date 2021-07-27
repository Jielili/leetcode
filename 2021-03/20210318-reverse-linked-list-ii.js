/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  head = new ListNode('head', head);
  let [p, i] = [head, left];
  while (i > 1) {
    p = p.next;
    i--;
  }
  let q = p.next;
  i = right - left;
  while (i > 0) {
    const cur = q.next;
    q.next=q.next.next;
    cur.next=p.next;
    p.next=cur;
  }

};
function ListNode(val,next){
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}