const letterCombinations = require('./LetterCombinationsofaPhoneNumber');

test('letter combinations of a phone number 1', () => {
  const digits = "23";
  expect(letterCombinations(digits).sort()).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].sort());
});

