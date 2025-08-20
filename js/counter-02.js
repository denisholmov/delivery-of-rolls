window.addEventListener('click', function (event) {
  const cartWrapperNode = event.target.closest('.cart-wrapper');

  let counter;

  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');

    if (event.target.dataset.action === 'plus') {
      counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = counter.innerText - 1;
      } else if (cartWrapperNode && parseInt(counter.innerText) > 0) {
        counter.innerText = counter.innerText - 1;
      }
    }
  }
});
