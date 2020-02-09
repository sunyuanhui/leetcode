const mergeTwoLists = require('./MergeTwoSortedLists');
const { ArrayToList, ListToArray } = require('../utils');

test('merge two sorted lists 1', () => {
  const l1 = ArrayToList([1, 2, 4]);
  const l2 = ArrayToList([1, 3, 4]);
  expect(ListToArray(funcmergeTwoLists(l1, l2))).toStrictEqual([1, 1, 2, 3, 4, 4]);
});

