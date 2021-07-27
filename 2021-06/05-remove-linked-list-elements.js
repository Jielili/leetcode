/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head.val === val){
      head = head.next;
    }
    let p = head;
    while(true){
      if(p.next.val === val){
        p.next = p.next.next;
      }
      p = p.next;
    }
    return head;
};