import { expect } from 'chai';
import add from '../src/add.js';

describe('Add Function', () => {
  it('should add two numbers correctly', () => {
    expect(add(5, 7)).to.equal(12);
  });

  it('should handle negative numbers', () => {
    expect(add(-5, -7)).to.equal(-12);
  });
});
