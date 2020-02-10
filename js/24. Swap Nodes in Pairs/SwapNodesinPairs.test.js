const swapPairs = require('./SwapNodesinPairs');
const { ArrayToList, ListToArray } = require('../utils');

test('swap nodes in pairs 1', () => {
  const l = ArrayToList([1, 2, 3, 4]);
  expect(ListToArray(swapPairs(l))).toStrictEqual([2, 1, 4, 3]);
});

