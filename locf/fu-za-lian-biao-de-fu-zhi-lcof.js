/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
   let p = head
   let ans = new Node()
   while (p) {
     ans.next = new Node(p.val)
     p.copy = ans.next
     p = p.next
   }
   ans = ans.next
   p = head,q=ans;
   while (p) {
     q.random = p.random.copy
     p = p.next
     q = q.next
   }
   return ans
};