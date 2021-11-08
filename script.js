const modalOpen = document.querySelector('.button-reserve');
const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close-button');
const popups = document.querySelector('.popup');
const popup = document.querySelector('.popover');

function handler1() {
  popup.classList.toggle('popover-disable');
}

popups.addEventListener('click', handler1);

modalOpen.addEventListener('click', function () {
  modal.classList.remove('modal-closed');
})

modalClose.addEventListener('click', function () {
  modal.classList.add('modal-closed');
})
