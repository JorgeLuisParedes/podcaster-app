import { formatDate } from "../../../podcaster/helpers/formatDate";

describe('formatDate function', () => {
	test('should correctly format a typical date', () => {
		const input = '2023-04-05T12:00:00.000Z';
		const expectedOutput = '05/04/2023';
		expect(formatDate(input)).toBe(expectedOutput);
	});

	test('should correctly format the first day of the year', () => {
		const input = '2023-01-01T00:00:00.000Z';
		const expectedOutput = '01/01/2023';
		expect(formatDate(input)).toBe(expectedOutput);
	});

	test('should correctly format the last day of the year', () => {
		const input = '2023-12-31T23:59:59.000Z';
		const expectedOutput = '31/12/2023';
		expect(formatDate(input)).toBe(expectedOutput);
	});
});