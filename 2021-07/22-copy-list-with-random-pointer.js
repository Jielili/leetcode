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
var copyRandomList = function (head, cachedNode = new Map()) {
  if (head === null) {
    return null
  }
  let p = head;
  const map = new Map();
  const res = new Node(p.val);
  let q = res;
  map.set(p, q)
  while (p.next) {
    q.next = new Node(p.next.val);
    p = p.next;
    q = q.next;
    map.set(p, q)
  }

  p = head;

  while (p) {
    map.get(p).random = map.get(p.random)
    p = p.next;
  }
  return res;
};