function calculateTotalPrice() {
  const cartItems = document.querySelectorAll('.cart-item');

  return Array.from(cartItems).reduce((sum, item) => {
    return (
      sum +
      parseInt(item.querySelector('.items__current').innerText) *
        parseInt(item.querySelector('.price__currency').innerText)
    );
  }, 0);
}
