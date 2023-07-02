/*
	https://leetcode.com/problems/remove-letter-to-equalize-frequency/
	You are given a 0-indexed string word, consisting of lowercase English letters.
	You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

	Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

	Note:
	* The frequency of a letter x is the number of times it occurs in the string.
	* You must remove exactly one letter and cannot chose to do nothing.
 */

/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = function(word) {
	if (word.length <= 3) return true;
	const frequencyHashmap = [].reduce.call(word, (hashmap, el) => {
		if (el in hashmap) hashmap[el]++;
		else hashmap[el] = 1;
		return hashmap;
	}, {})

	const values = Object.values(frequencyHashmap);
	const [n1, n2, n3] = [values[0], values[1], values[2]]

	if (values.length === word.length - 1) return true;
	if (values.length === 1) return true;

	if (values.length === 2) {
		if (n1 === 1 || n2 === 1 || Math.abs(n1 - n2) === 1) // e.g. [1,any], [any, 1], [2,3], [11,10] etc.
			return true
	}

	// values.length >= 3
	let basic = n1;
	let deviated = null;
	if (n2 !== basic) {
		// e.g. [2,4,...] or [5,3,...] etc.
		if (n1 > 1 && n2 > 1 && Math.abs(basic - n2) > 1) return false;
		deviated = n2;
	}
	if (n3 !== basic) {
		if (deviated) {
			// e.g. [3,1,2,...]
			if (n3 !== deviated) return false;
			// e.g. [3,1,1,...] or [3,4,4,...] etc.
			if (n3 === 1) return false;
			// e.g. [3,4,4,...] etc.
			if (n3 > basic && basic !== 1) return false;
			basic = n3;
			deviated = n1;
		} else {
			// e.g. [3,3,2,...] or [3,3,5,...]
			if (n3 > 1 && (n3 - basic !== 1)) return false
			// e.g. [3,3,1,...] or [3,3,4,...]
			else deviated = n3;
		}
	}

	for (let i = 3; i < values.length; i++) {
		if (values[i] !== basic) {
			// e.g. [3,3,1,...,1,...] or [1,3,3,...,1,...] or [3,1,3,...,1,...] etc.
			if (deviated) return false;
			// e.g. [3,3,3,...,2,...] or [3,3,3,...,5,...] etc.
			if (values[i] > 1 && (values[i] - basic !== 1)) return false;
			// e.g. [3,3,3,...,1...] or [3,3,3,...,4...] etc.
			deviated = values[i];
		}
	}

	return !!deviated;
};

/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequencyHashmaps = function (word) {
	if (word.length <= 3) return true;

	const frequencyHashmap = new Map();
	[].map.call(word, letter => frequencyHashmap.set(letter, frequencyHashmap.get(letter) + 1 || 1))

	if (frequencyHashmap.size === 1 || frequencyHashmap.size === word.length - 1) return true

	let result = false;
	frequencyHashmap.forEach((value, key) => {
		const newMap = new Map(frequencyHashmap);
		if (value === 1) {
			newMap.delete(key)
		} else {
			newMap.set(key, newMap.get(key) - 1);
		}
		if (new Set([...newMap.values()]).size === 1) result = true;
	})
	return result;
}

module.exports = { equalFrequency, equalFrequencyHashmaps };