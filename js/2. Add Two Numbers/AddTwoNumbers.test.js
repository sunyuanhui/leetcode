const { addTwoNumbers } = require('./AddTwoNumbers');
const { ArrayToList, ListToArray } = require('../utils');

test('add two numbers 1', () => {
    const a1 = [2, 4, 3];
    let l1 = ArrayToList(a1);

    const a2 = [5, 6, 4];
    let l2 = ArrayToList(a2);

    let l3 = addTwoNumbers(l1, l2);
    expect(ListToArray(l3)).toStrictEqual([7, 0, 8]);
});

test('add two numbers 2', () => {
    const a1 = [0];
    let l1 = ArrayToList(a1);

    const a2 = [5, 6, 4];
    let l2 = ArrayToList(a2);

    let l3 = addTwoNumbers(l1, l2);
    expect(ListToArray(l3)).toStrictEqual([5, 6, 4]);
});

test('add two numbers 3', () => {
    const a1 = [2, 4, 3];
    let l1 = ArrayToList(a1);

    const a2 = [0];
    let l2 = ArrayToList(a2);

    let l3 = addTwoNumbers(l1, l2);
    expect(ListToArray(l3)).toStrictEqual([2, 4, 3]);
});

test('add two numbers 4', () => {
    const a1 = [2, 4, 5];
    let l1 = ArrayToList(a1);

    const a2 = [5, 6, 4];
    let l2 = ArrayToList(a2);

    let l3 = addTwoNumbers(l1, l2);
    expect(ListToArray(l3)).toStrictEqual([7, 0, 0, 1]);
});