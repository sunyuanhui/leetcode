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

test('3sum closest 6', () => {
  const nums = [96,-52,73,25,-95,-5,74,-72,-81,77,-68,-14,12,-35,75,23,-98,41,-56,1,-69,77,86,63,-78,2,65,-67,46,-23,32,90,-19,32,-63,92,-73,7,-82,-57,41,3,-74,14,-3,73,-16,98,59,-77,61,86,-1,-25,-95,-75,74,-39,81,-100,57,86,0,-40,44,-13,-16,-72,24,-100,10,53,-85,-64,11,50,1,39,51,-60,-95,32,-4,-27,32,-79,66,93,56,16,52,-67,67,-54,83,79,53,-54,-81,-51,73,-21,94,-89,2,-82,-2,-74,-52,-53,7,11,-75,-84,78,-100,-31,89,1,-40,-14,24,69,18,-57,21,35,-92,-30,63,76,-24,84,64,-22,-20,57,85,40,-79,-7,95,99,-85,-93,3,76,-41,-73,76];
  const target = -271;
  expect(threeSumClosest(nums, target)).toBe(-271);
});

test('3sum closest 7', () => {
  const nums = [-55,-24,-18,-11,-7,-3,4,5,6,9,11,23,33];
  const target = 0;
  expect(threeSumClosest(nums, target)).toBe(0);
});
