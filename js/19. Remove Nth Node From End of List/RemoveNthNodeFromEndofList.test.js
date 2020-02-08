const { removeNthFromEnd, ListNode } = require('./RemoveNthNodeFromEndofList');

var ArrayToList = function(array) {
  const l = new ListNode(array[0]);
  let t = l;
  for (let i = 1; i < array.length; i++) {
    t.next = new ListNode(array[i]);
    t = t.next;
  }
  return l;
}
var ListToArray = function(list) {
  let a = []
  while (list !== null) {
    a.push(list.val);
    list = list.next;
  }
  return a;
}

test('remove nth node from end of list 1', () => {
  const l = ArrayToList([1, 2, 3, 4, 5]);
  const n = 2;
  expect(ListToArray(removeNthFromEnd(l, n))).toEqual([1, 2, 3, 5]);
});

test('remove nth node from end of list 2', () => {
  const l = ArrayToList([1]);
  const n = 1;
  expect(ListToArray(removeNthFromEnd(l, n))).toEqual([]);
});

