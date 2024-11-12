import { openChat, chatBtn, modalChat, visibleChat } from './variables';

function toggleMobileMenu() {
  if (modalChat.style.display === 'block') {
    modalChat.style.display = 'none';
    visibleChat.style.display = 'none';
    visibleChat.style.opacity = '0';
  } else {
    modalChat.style.display = 'block';
    visibleChat.style.display = 'block';
    visibleChat.style.opacity = '0.9';
  }
}

openChat.addEventListener("click", function(evt) {
  evt.preventDefault();
  toggleMobileMenu();
});

chatBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  toggleMobileMenu();
});