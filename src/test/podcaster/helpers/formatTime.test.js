import { formatTime } from '../../../podcaster/helpers/formatTime';

describe('formatTime function', () => {
	test('should correctly format exactly one minute', () => {
		const milliseconds = 60000;
		const expectedOutput = '01:00';
		expect(formatTime(milliseconds)).toBe(expectedOutput);
	});

	test('should round down to the nearest second', () => {
		const milliseconds = 59999;
		const expectedOutput = '00:59';
		expect(formatTime(milliseconds)).toBe(expectedOutput);
	});

	test('should correctly format arbitrary minutes and seconds', () => {
		const milliseconds = 123456;
		const expectedOutput = '02:03';
		expect(formatTime(milliseconds)).toBe(expectedOutput);
	});
});
