import { strict as assert } from 'assert';
import add from '../src/add.js';

describe('Add Function', () => {
    it('should add two positive numbers', () => {
        assert.strictEqual(add(6, 4), 10);
    });

    it('should handle negative numbers', () => {
        assert.strictEqual(add(-6, -4), -10);
    });

    it('should handle one undefined value', () => {
        assert.strictEqual(add(undefined, 4), 4);
        assert.strictEqual(add(6, undefined), 6);
    });

    it('should handle both values undefined', () => {
        assert.strictEqual(add(undefined, undefined), 0);
    });
});
