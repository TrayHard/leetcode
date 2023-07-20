const letterCombinations = require('./17_letter_combinations_of_a_phone_number');

test('17 | Letter combinations of a phone number', () => {
	expect(letterCombinations("23")).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
	expect(letterCombinations("")).toStrictEqual([]);
	expect(letterCombinations("2")).toStrictEqual(["a","b","c"]);
});
