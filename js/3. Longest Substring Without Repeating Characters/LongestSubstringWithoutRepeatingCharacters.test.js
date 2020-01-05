const lengthOfLongestSubstring = require('./LongestSubstringWithoutRepeatingCharacters');

test('Longest Substring Without Repeating Characters 1', () => {
  const s = 'abcabcbb';
  expect(lengthOfLongestSubstring(s)).toBe(3);
});

test('Longest Substring Without Repeating Characters 2', () => {
  const s = 'bbbbb';
  expect(lengthOfLongestSubstring(s)).toBe(1);
});

test('Longest Substring Without Repeating Characters 3', () => {
  const s = 'pwwkew';
  expect(lengthOfLongestSubstring(s)).toBe(3);
});

test('Longest Substring Without Repeating Characters 4', () => {
  const s = '';
  expect(lengthOfLongestSubstring(s)).toBe(0);
});

test('Longest Substring Without Repeating Characters 5', () => {
  const s = 'au';
  expect(lengthOfLongestSubstring(s)).toBe(2);
});

test('Longest Substring Without Repeating Characters 6', () => {
  const s = 'cdd';
  expect(lengthOfLongestSubstring(s)).toBe(2);
});
