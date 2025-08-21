function toggleOrderButton() {
  console.log('toggleOrderButton');

  const cartWrapperNode = document.querySelector('.cart-wrapper');
  const dataCartEmptyNode = document.querySelector('#order-form');
  const cardBodyNode = cartWrapperNode.closest('.card-body');

  const isEmpty = cartWrapperNode.children.length <= 0;

  if (isEmpty) {
    dataCartEmptyNode.remove();
  }

  if (!isEmpty) {
    cardBodyNode.insertAdjacentHTML(
      'afterend',
      `
      <div id="order-form" class="card-body border-top">
						<h5 class="card-title">Оформить заказ</h5>
						<form>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Ваш номер телефона">
							</div>
							<button type="submit" class="btn btn-primary">Заказать</button>
						</form>
		</div>
    `
    );
  }
}
