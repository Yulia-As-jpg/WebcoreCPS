import { callBtn, modalCall, visibleCall, openCall } from './variables';

function toggleMobileMenu() {
  if (modalCall.style.display === 'block') {
    modalCall.style.display = 'none';
    visibleCall.style.display = 'none';
    visibleCall.style.opacity = '0';
    document.body.classList.remove('no-scroll'); 
  } else {
    modalCall.style.display = 'block';
    visibleCall.style.display = 'block';
    visibleCall.style.opacity = '0.9';
    document.body.classList.add('no-scroll'); 
  }
}

openCall.addEventListener("click", function(evt) {
  evt.preventDefault();
  toggleMobileMenu();
});

callBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  toggleMobileMenu();
});

const closeCallBtn = document.querySelector('.close-call');
if (closeCallBtn) {
  closeCallBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalCall.style.display = 'none';
    visibleCall.style.display = 'none';
    visibleCall.style.opacity = '0';
    document.body.classList.remove('no-scroll'); 
  });
}
