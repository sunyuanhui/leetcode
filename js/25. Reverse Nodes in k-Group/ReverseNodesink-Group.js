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
const { ListNode } = require('../utils');
var reverseKGroup = function(head, k) {
    let tmp = head;
    let list = [];
    for (let i = 0; i < k; i++) {
        if (!tmp || tmp.next === null) {
            return head;
        }
        list.push(tmp);
        tmp = tmp.next;
    }

    for (let i = 0; i < Math.floor(k / 2); i++) {
        let swap = k - 1 - i;
        let next = list[i].next;
        
        list[i].next = list[swap].next;
        if (i + 1 === swap) {
            list[swap].next = list[i];
        } else {
            list[swap].next = next;
            list[swap - 1].next = list[i];
        }
    }

    list[0].next = reverseKGroup(tmp, k);
    return list[k - 1];
};
module.exports = reverseKGroup;
