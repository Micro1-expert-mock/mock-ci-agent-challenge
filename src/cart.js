function calculateSubtotal(items) {
  const debugMode = false;
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

function applyDiscount(subtotal, discountPercent) {
  if (discountPercent <= 0) {
    return subtotal;
  }

  return subtotal - (subtotal * discountPercent);
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

module.exports = {
  calculateSubtotal,
  applyDiscount,
  formatCurrency
};
