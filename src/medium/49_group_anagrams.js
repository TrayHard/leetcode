/*
	https://leetcode.com/problems/group-anagrams/
	Given an array of strings strs, group the anagrams together. You can return the answer in any order.
	An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all
	the original letters exactly once.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
	function isAnagram(str1, str2) {
		if (str1.length !== str2.length) return false;
		if (str1 === str2) return true;
		return str1.split('').every((char) => {
			if (!str2.includes(char)) return false;
			str2 = str2.replace(char, '')
			return true;
		})
	}

	const result = []
	const setOfAlreadyUsed = new Set();
	for (let i = 0; i < strs.length; i++) {
		const currWord = strs[i];
		if (setOfAlreadyUsed.has(currWord)) continue;
		setOfAlreadyUsed.add(currWord)
		const strsCopy = strs.slice()
		strsCopy.splice(i, 1)
		const currGroup = [
			currWord,
			...strsCopy.filter((wordToCompare, index) => {
				if (isAnagram(currWord, wordToCompare)) {
					setOfAlreadyUsed.add(wordToCompare)
					return true;
				}
			})
		]
		result.push(currGroup);
	}
	return result;
};

module.exports = groupAnagrams;