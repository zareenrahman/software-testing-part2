import { expect } from 'chai';
import filter from '../src/filter.js'; // Adjust the path based on your project structure.

describe('Filter Utility Tests', () => {
    it('should filter products by category', () => {
        const products = [
            { id: 1, name: 'Apple', category: 'Fruits' },
            { id: 2, name: 'Carrot', category: 'Vegetables' }
        ];
        const result = filter(products, (item) => item.category === 'Fruits');
        expect(result).to.deep.equal([{ id: 1, name: 'Apple', category: 'Fruits' }]);
    });
});