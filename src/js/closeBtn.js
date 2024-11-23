import {sideBar, modalCall, modalChat, visibleCall, visibleChat, visibleMenu} from './variables';

document.addEventListener('DOMContentLoaded', () => {
  function closeElement(element) {
    if (element) {
      element.classList.add('modal-hide');
      element.classList.remove('modal-show');
      element.style.display = 'none';
    }
  }

  function clickCross(evt) {
    evt.preventDefault();

    const isSmallScreen = window.matchMedia('(max-width: 1119px)').matches;

    if (isSmallScreen) {
      closeElement(sideBar);
    }

    closeElement(modalCall);
    closeElement(modalChat);
    closeElement(visibleCall);
    closeElement(visibleChat);
    closeElement(visibleMenu);
  }

  const closeBtns = document.querySelectorAll('.close-btn, .close-chat, .close-call');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', clickCross);
  });
});