const { calculateSubtotal, applyDiscount, formatCurrency } = require('../src/cart');

describe('shopping cart helpers', () => {
  test('calculateSubtotal totals price times quantity', () => {
    const items = [
      { name: 'Notebook', price: 5, quantity: 2 },
      { name: 'Pen', price: 1.5, quantity: 4 }
    ];

    expect(calculateSubtotal(items)).toBe(16);
  });

  test('applyDiscount treats percentage values as whole percentages', () => {
    expect(applyDiscount(100, 15)).toBe(85);
  });

  test('formatCurrency returns US dollar display text', () => {
    expect(formatCurrency(16)).toBe('$16.00');
  });
});
