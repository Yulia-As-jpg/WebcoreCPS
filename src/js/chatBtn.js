import { openChat, chatBtn, modalChat, visibleChat } from './variables';

function toggleMobileMenu() {
  if (modalChat.style.display === 'block') {
    modalChat.style.display = 'none';
    visibleChat.style.display = 'none';
    visibleChat.style.opacity = '0';
    document.body.classList.remove('no-scroll'); 
  } else {
    modalChat.style.display = 'block';
    visibleChat.style.display = 'block';
    visibleChat.style.opacity = '0.9';
    document.body.classList.add('no-scroll'); 
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

const closeChatBtn = document.querySelector('.close-chat');
if (closeChatBtn) {
  closeChatBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalChat.style.display = 'none';
    visibleChat.style.display = 'none';
    visibleChat.style.opacity = '0';
    document.body.classList.remove('no-scroll'); 
  });
}
