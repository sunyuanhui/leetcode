const { removeNthFromEnd } = require('./RemoveNthNodeFromEndofList');
const { ArrayToList, ListToArray } = require('../utils');

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

