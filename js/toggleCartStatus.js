function toggleCartStatus() {
  const cartWrapperNode = document.querySelector('.cart-wrapper');
  const dataCartEmptyNode = document.querySelector('[data-cart-empty]');

  const isEmpty = cartWrapperNode.children.length === 0;

  if (isEmpty && !dataCartEmptyNode) {
    cartWrapperNode.insertAdjacentHTML(
      'beforebegin',
      `
      <div data-cart-empty class="alert alert-secondary" role="alert">
        Корзина пуста
      </div>
    `
    );
  }

  if (!isEmpty && dataCartEmptyNode) {
    dataCartEmptyNode.remove();
  }
}
