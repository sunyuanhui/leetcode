/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const { ListNode } = require('../utils');
var mergeKLists = function(lists) {
    let list = new ListNode();
    let head = list;
    let length = 0;
    for (let i = 0; i < lists.length; i++) {
        let l = lists[i];
        while (l) {
            l = l.next;
            length++;
        }
    }

    while (length !== 0) {
        let minList;
        let minValue;
        for (let i = 0; i < lists.length; i++) {
            let l = lists[i];
            if (l === null) {
                continue;
            }
            if (minValue === undefined || l.val < minValue) {
                minList = i;
                minValue = l.val;
            }
        }
        if (minValue !== undefined) {
            list.next = new ListNode(minValue);
            list = list.next;
            lists[minList] = lists[minList].next;
        }
        length--;
    }
    return head.next;
};
module.exports = mergeKLists;
