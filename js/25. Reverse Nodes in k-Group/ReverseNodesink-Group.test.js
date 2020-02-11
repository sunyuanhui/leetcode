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

test('reverse nodes in k-group 4', () => {
  const l = ArrayToList([1, 2, 3, 4, 5]);
  const k = 5;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([5, 4, 3, 2, 1]);
});

test('reverse nodes in k-group 5', () => {
  const l = ArrayToList([1, 2, 3, 4, 5, 6]);
  const k = 6;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([6, 5, 4, 3, 2, 1]);
});

test('reverse nodes in k-group 6', () => {
  const l = ArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const k = 7;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([7, 6, 5, 4, 3, 2, 1]);
});

test('reverse nodes in k-group 7', () => {
  const l = ArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const k = 5;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([5, 4, 3, 2, 1, 6, 7]);
});

test('reverse nodes in k-group 8', () => {
  const l = ArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const k = 4;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([4, 3, 2, 1, 5, 6, 7]);
});

test('reverse nodes in k-group 9', () => {
  const l = ArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const k = 3;
  expect(ListToArray(reverseKGroup(l, k))).toStrictEqual([3, 2, 1, 6, 5, 4, 7]);
});

