import { expect } from 'chai';
import add from '../src/add.js'; // Ensure the path to the source file is correct

describe('Add Function', () => {
    it('should add two positive numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('should handle negative numbers', () => {
        expect(add(-5, -3)).to.equal(-8);
    });

    it('should return 0 if both arguments are undefined', () => {
        expect(add(undefined, undefined)).to.equal(0);
    });
});
