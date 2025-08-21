function calculateTotalPrice() {
  const listCartNode = document.querySelectorAll('.cart-wrapper > .cart-item');
  const totalPriceNode = document.querySelector('.total-price');

  const sum = Array.from(listCartNode).reduce((sum, item) => {
    return (
      sum +
      parseInt(item.querySelector('.items__current').innerText) *
        parseInt(item.querySelector('.price__currency').innerText)
    );
  }, 0);

  totalPriceNode.innerText = sum;
}
