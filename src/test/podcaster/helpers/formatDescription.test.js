import { formatDescription } from "../../../podcaster/helpers/formatDescription";

describe('formatDescription function', () => {
	it('should wrap text without URLs into paragraphs', () => {
		const description = 'This is a simple description.';
		const expectedOutput = '<p class="mb-2">This is a simple description.</p>';
		expect(formatDescription(description)).toBe(expectedOutput);
	});

	it('should convert a single URL into a clickable link', () => {
		const description = 'Check this out: https://example.com';
		const expectedOutput =
			'<p class="mb-2">Check this out: <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="text-blue-700">https://example.com</a></p>';
		expect(formatDescription(description)).toBe(expectedOutput);
	});

	it('should convert multiple URLs into clickable links', () => {
		const description = 'Visit https://example.com and https://another-site.net for more info.';
		const expectedOutput =
			'<p class="mb-2">Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="text-blue-700">https://example.com</a> and <a href="https://another-site.net" target="_blank" rel="noopener noreferrer" class="text-blue-700">https://another-site.net</a> for more info.</p>';
		expect(formatDescription(description)).toBe(expectedOutput);
	});

	it('should convert line breaks into paragraphs', () => {
		const description = 'First paragraph.\nSecond paragraph.';
		const expectedOutput =
			'<p class="mb-2">First paragraph.</p><p class="mb-2">Second paragraph.</p>';
		expect(formatDescription(description)).toBe(expectedOutput);
	});

	it('should handle a mix of URLs and line breaks correctly', () => {
		const description = 'First paragraph.\nCheck https://example.com\nSecond paragraph.';
		const expectedOutput =
			'<p class="mb-2">First paragraph.</p><p class="mb-2">Check <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="text-blue-700">https://example.com</a></p><p class="mb-2">Second paragraph.</p>';
		expect(formatDescription(description)).toBe(expectedOutput);
	});
});
