import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('CamelCase Function', () => {
    it('should convert strings to camel case', () => {
        const input = ' hello World';
        const result = camelCase(input).trim(); // Remove extra spaces
        console.log(`Input: "${input}", Result: "${result}"`);
        expect(result).to.equal('helloWorld');
    });

    it('should handle empty strings', () => {
        const input = '';
        const result = camelCase(input).trim(); // Handle extra spaces
        console.log(`Input: "${input}", Result: "${result}"`);
        expect(result).to.equal('');
    });

    it('should handle multiple words with special characters', () => {
        const input = '--foo-bar--';
        const result = camelCase(input).trim();
        console.log(`Input: "${input}", Result: "${result}"`);
        expect(result).to.equal('fooBar');
    });
});
