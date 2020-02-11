const swapPairs = require('./SwapNodesinPairs');
const { ArrayToList, ListToArray } = require('../utils');

test('swap nodes in pairs 1', () => {
  const l = ArrayToList([1, 2, 3, 4]);
  expect(ListToArray(swapPairs(l))).toStrictEqual([2, 1, 4, 3]);
});

test('swap nodes in pairs 2', () => {
  const l = ArrayToList([1, 2, 3]);
  expect(ListToArray(swapPairs(l))).toStrictEqual([2, 1, 3]);
});

test('swap nodes in pairs 3', () => {
  const l = ArrayToList([1]);
  expect(ListToArray(swapPairs(l))).toStrictEqual([1]);
});

test('swap nodes in pairs 4', () => {
  const l = ArrayToList([]);
  expect(ListToArray(swapPairs(l))).toStrictEqual([]);
});

