const cartWrapperNode = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-cart')) {
    // Находим карточку с товаром, внутри которой был совершён клик
    const card = event.target.closest('.card'); // это родитель карточки на которой был клик

    // Собираем данные с этого товара и записываем их в единый объект productInfo после клика на + в корзину
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    };

    // Это проверка нужного нам айдишника в корзине
    const itemInCart = cartWrapperNode.querySelector(`[data-id="${card.dataset.id}"]`);

    if (itemInCart) {
      itemInCart.querySelector('[data-counter]').innerText =
        parseInt(itemInCart.querySelector('[data-counter]').innerText) + parseInt(productInfo.counter);
    } else {
      const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.weight} / ${productInfo.price}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;

      cartWrapperNode.insertAdjacentHTML('beforeEnd', cartItemHTML);
    }

    card.querySelector('[data-counter]').innerText = '1';
  }
});
