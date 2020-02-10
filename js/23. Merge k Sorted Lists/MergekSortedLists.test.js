const mergeKLists = require('./MergekSortedLists');
const { ArrayToList, ListToArray } = require('../utils');

test('merge k sorted lists 1', () => {
  const lists = [
    ArrayToList([1, 4, 5]),
    ArrayToList([1, 3, 4]),
    ArrayToList([2, 6]),
  ];
  const list = [1, 1, 2, 3, 4, 4, 5, 6];
  expect(ListToArray(mergeKLists(lists))).toStrictEqual(list);
});

test('merge k sorted lists 2', () => {
  const lists = [];
  const list = [];
  expect(ListToArray(mergeKLists(lists))).toStrictEqual(list);
});

test('merge k sorted lists 3', () => {
  const lists = [[]];
  const list = [];
  expect(ListToArray(mergeKLists(lists))).toStrictEqual(list);
});

