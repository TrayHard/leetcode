const { equalFrequency, equalFrequencyHashmaps } = require('./2423_remove_letter_to_equalize_frequency');

const fixtures = new Map(Object.entries({
	aa: true,
	ab: true,
	aba: true,
	bba: true,
	aaab: true,
	bbaa: false,
	cccaa: true,
	cbccca: false,
	aabbbccc: false,
	abbcc: true,
}))

test('2423 | Remove Letter To Equalize Frequency', () => {
	fixtures.forEach((value, key) => {
		expect(equalFrequency(key)).toEqual(value)
		expect(equalFrequencyHashmaps(key)).toEqual(value)
	});
});
