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
const { ListNode } = require('../utils');
var addTwoNumbers = function(l1, l2) {
    let fl;
    let l = null;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let val = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry;
        carry = parseInt(val / 10);
        val = val % 10;

        if (l === null) {
            l = new ListNode(val);
            fl = l;
        } else {
            l.next = new ListNode(val);
            l = l.next;
        }

        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }

    if (carry === 1) {
        l.next = new ListNode(1);
        l = l.next;
    }
    return fl;
};

module.exports = { addTwoNumbers };
