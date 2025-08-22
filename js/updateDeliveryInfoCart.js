function updateDeliveryInfoCart() {
  const deliveryCostNode = document.querySelector('.delivery-cost');
  const totalPrice = calculateTotalPrice();

  if (totalPrice < 600) {
    deliveryCostNode.innerText = '250 ₽';
    deliveryCostNode.classList.remove('free');
  } else {
    deliveryCostNode.innerText = 'Бесплатно';
    deliveryCostNode.classList.add('free');
  }
}
