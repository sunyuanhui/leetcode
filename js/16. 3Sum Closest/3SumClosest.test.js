const threeSumClosest = require('./3SumClosest');

test('3sum closest 1', () => {
  const nums = [-1, 2, 1, -4];
  const target = 1;
  expect(threeSumClosest(nums, target)).toBe(2);
});

test('3sum closest 2', () => {
  const nums = [1, 1, -1, -1, 3];
  const target = 3;
  expect(threeSumClosest(nums, target)).toBe(3);
});

test('3sum closest 3', () => {
  const nums = [1, 2, 4, 8, 16, 32, 64, 128];
  const target = 82;
  expect(threeSumClosest(nums, target)).toBe(82);
});

test('3sum closest 4', () => {
  const nums = [0, 1, 2];
  const target = 0;
  expect(threeSumClosest(nums, target)).toBe(3);
});

test('3sum closest 5', () => {
  const nums = [0, 2, 1, -3];
  const target = 1;
  expect(threeSumClosest(nums, target)).toBe(0);
});


