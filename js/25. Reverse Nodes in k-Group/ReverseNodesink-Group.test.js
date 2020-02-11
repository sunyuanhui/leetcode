const reverseKGroup = require('./ReverseNodesink-Group');
const { ArrayToList, ListToArray } = require('../utils');

test('reverse nodes in k-group 1', () => {
  const l = ArrayToList([1, 2, 3, 4, 5]);
  const k = 2;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([2, 1, 4, 3, 5]);
});

test('reverse nodes in k-group 2', () => {
  const l = ArrayToList([1, 2, 3, 4, 5]);
  const k = 3;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([3, 2, 1, 4, 5]);
});

test('reverse nodes in k-group 3', () => {
  const l = ArrayToList([1, 2, 3, 4, 5]);
  const k = 4;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([4, 3, 2, 1, 5]);
});

test('reverse nodes in k-group 3', () => {
  const l = ArrayToList([1, 2, 3, 4, 5]);
  const k = 5;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([5, 4, 3, 2, 1]);
});

