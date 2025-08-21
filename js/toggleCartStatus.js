function toggleCartStatus(status) {
  const dataCartEmptyNode = document.querySelector('[data-cart-empty]');
  const cartWrapperNode = document.querySelector('.cart-wrapper');

  if (status) {
    if (!dataCartEmptyNode) {
      cartWrapperNode.insertAdjacentHTML(
        'beforebegin',
        `<div data-cart-empty="" class="alert alert-secondary" role="alert">
							Корзина пуста
						</div>`
      );
    }
  } else {
    if (dataCartEmptyNode) {
      dataCartEmptyNode.remove();
    }
  }
}
