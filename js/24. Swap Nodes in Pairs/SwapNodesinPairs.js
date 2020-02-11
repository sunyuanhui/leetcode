/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const { ListNode } = require('../utils');
var swapPairs = function(head) {
    let dummy = new ListNode();
    dummy.next = head;
    
    let pre = dummy;
    let cur = head;
    while (cur && cur.next) {
        pre.next = cur.next;
        cur.next = cur.next.next;
        pre.next.next = cur;

        pre = pre.next.next;
        cur = cur.next;
    }
    return dummy.next;
};
module.exports = swapPairs;
