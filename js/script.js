let burger = document.querySelector('.burger');
let btnCatalog = document.querySelector('.btn__catalog');
let btnModal = document.querySelector('.btn__modal');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    btnCatalog.classList.toggle('btn__catalog--active');

    btnModal.classList.toggle('btn__modal--active');

    document.body.classList.toggle('stop-scroll');
  })

btnCatalog.addEventListener('click', function () {
  burger.classList.remove('burger--active');

  btnCatalog.classList.remove('btn__catalog--active');

  btnModal.classList.remove('btn__modal--active');

  document.body.classList.remove('stop-scroll');
})

btnModal.addEventListener('click', function () {
  burger.classList.remove('burger--active');

  btnCatalog.classList.remove('btn__catalog--active');

  btnModal.classList.remove('btn__modal--active');

  document.body.classList.remove('stop-scroll');
})
