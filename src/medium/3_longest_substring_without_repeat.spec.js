const { lengthOfLongestSubstring } = require('./3_longest_substring_without_repeat');

test('3 | Add Two Numbers', () => {
  // expect(lengthOfLongestSubstring('abcabcbb')).toStrictEqual(3);
  expect(lengthOfLongestSubstring('bbbbb')).toStrictEqual(1);
  expect(lengthOfLongestSubstring('pwwkew')).toStrictEqual(3);
});
