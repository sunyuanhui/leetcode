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
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode();
    let head = list;
    while(l1 || l2) {
        if (l1 && !l2) {
            list.next = new ListNode(l1.val);
            l1 = l1.next;
            list = list.next;
        } else if (!l1 && l2) {
            list.next = new ListNode(l2.val);
            l2 = l2.next;
            list = list.next;
        } else {
            if (l1.val < l2.val) {
                list.next = new ListNode(l1.val);
                l1 = l1.next;
                list = list.next;
            } else {
                list.next = new ListNode(l2.val);
                l2 = l2.next;
                list = list.next;
            }
        }
    }
    return head.next;
};
module.exports = mergeTwoLists;
