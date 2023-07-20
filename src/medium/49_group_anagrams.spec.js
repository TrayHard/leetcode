const groupAnagrams = require('./49_group_anagrams');

test('49 | Group anagrams', () => {
	expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
		.toStrictEqual([["eat","tea","ate"], ["tan","nat"],["bat"],]);
	expect(groupAnagrams([""])).toStrictEqual([[""]]);
	expect(groupAnagrams(["a"])).toStrictEqual([["a"]]);
	expect(groupAnagrams(["","b",""])).toStrictEqual([["",""],["b"]]);
	expect(groupAnagrams(["ddddddddddg","dgggggggggg"])).toStrictEqual([["ddddddddddg"],["dgggggggggg"]]);
});
