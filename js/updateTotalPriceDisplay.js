function updateTotalPriceDisplay() {
  const totalPriceNode = document.querySelector('.total-price');
  const totalPrice = calculateTotalPrice();

  totalPriceNode.innerText = totalPrice;
}
