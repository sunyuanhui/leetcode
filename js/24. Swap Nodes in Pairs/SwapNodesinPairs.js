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
    if (!head || head.next === null) {
        return head;
    }
    let next = head.next;
    head.next = swapPairs(head.next.next);
    next.next = head;
    return next;
};
module.exports = swapPairs;
