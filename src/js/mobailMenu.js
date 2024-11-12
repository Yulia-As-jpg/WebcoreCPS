import {burgerBtn, mobailMenu, visibleMenu} from './variables';

function toggleMobileMenu() {
  if (mobailMenu.style.display === 'block') {
    mobailMenu.style.display = 'none';
    visibleMenu.style.display = 'none';
    visibleMenu.style.opacity = '0';
  } else {
    mobailMenu.style.display = 'block';
    visibleMenu.style.display = 'block';
    visibleMenu.style.opacity = '0.9';
  }
}

burgerBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  toggleMobileMenu();
});

