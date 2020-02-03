const longestCommonPrefix = require('./LongestCommonPrefix');

test('longest common prefix 1', () => {
  const strs = ["flower","flow","flight"];
  expect(longestCommonPrefix(strs)).toBe('fl');
});

test('longest common prefix 2', () => {
  const strs = ["dog","racecar","car"];
  expect(longestCommonPrefix(strs)).toBe('');
});
