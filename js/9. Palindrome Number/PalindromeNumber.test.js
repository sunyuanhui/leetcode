const isPalindrome = require('./PalindromeNumber');

test('palindrome number 1', () => {
  const num = 121;
  expect(isPalindrome(num)).toBe(true);
});

test('palindrome number 2', () => {
  const num = -121;
  expect(isPalindrome(num)).toBe(false);
});

test('palindrome number 3', () => {
  const num = 10;
  expect(isPalindrome(num)).toBe(false);
});
