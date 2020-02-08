/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let array = [];
    let tmp = head;
    while (tmp) {
        array.push(tmp);
        tmp = tmp.next;
    }

    if (n > array.length || n <= 0) {
        return head;
    } else if (n === array.length) {
        return head.next;
    }

    let pre = array.length - n - 1;
    array[pre].next = array[pre].next === null ? null : array[pre].next.next;
    return head;
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
module.exports = { removeNthFromEnd, ListNode };
