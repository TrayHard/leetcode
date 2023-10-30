/*
	https://leetcode.com/problems/longest-substring-without-repeating-characters/
	Given a string s, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
	let result = 0;
	let currentSubstring = '';
	let fast = 0, slow = 0;
	console.log('----------------------------------')
	// 'pwwkew'
	// 'dddabcboef
	// fast 4 slow 2 curr 4
	// slow 5 fast 2
	// 'bbbbb'
	// s 0 f 1 c 0 => f 0 s 1
	while ((slow + fast) < s.length) {
		console.log('start')
		const currentChar = s[slow + fast];
		const currCharIndex = currentSubstring.indexOf(currentChar)
		console.log({ fast, slow, currCharIndex })
		if (currCharIndex === -1) {
			currentSubstring += currentChar;
			fast++;
			console.log('currentChar+', currentChar);
			console.log({ fast, slow })
			console.log('end')
			console.log('--------------')
		} else {
			console.log('currentChar', currentChar);
			if (currentSubstring.length > result.length) {
				result = currentSubstring;
				console.log('new result:', result);
			}
			fast = slow + fast - currCharIndex;
			slow += currCharIndex + 1;
			currentSubstring = s.slice(slow, slow + fast - 1);
			console.log('new current substring:', currentSubstring);
			console.log({ fast, slow, currCharIndex });
			console.log('end');
			console.log('--------------');
		}
	}
	return result.length;
};

module.exports = {
	lengthOfLongestSubstring,
};
