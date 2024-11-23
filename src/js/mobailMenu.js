import {burgerBtn, mobailMenu, visibleMenu} from './variables';

function toggleMobileMenu() {
  if (mobailMenu.style.display === 'flex') {
    mobailMenu.style.display = 'none';
    visibleMenu.style.display = 'none';
    visibleMenu.style.opacity = '0';
    document.body.classList.remove('no-scroll');
  } else {
    mobailMenu.style.display = 'flex';
    mobailMenu.style.position = 'fixed';
    visibleMenu.style.display = 'block';
    visibleMenu.style.opacity = '0.9';
    document.body.classList.add('no-scroll'); 
  }
}

function closeMobileMenu() {
  mobailMenu.style.display = 'none';
  visibleMenu.style.display = 'none';
  visibleMenu.style.opacity = '0';
  document.body.classList.remove('no-scroll'); 
}

burgerBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  toggleMobileMenu();
});

const closeMenuBtn = document.querySelector('.close-btn');
if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    closeMobileMenu();
  });
}

