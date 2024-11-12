import { callBtn, modalCall, visibleCall, openCall } from './variables';

function toggleMobileMenu() {
  if (modalCall.style.display === 'block') {
    modalCall.style.display = 'none';
    visibleCall.style.display = 'none';
    visibleCall.style.opacity = '0';
  } else {
    modalCall.style.display = 'block';
    visibleCall.style.display = 'block';
    visibleCall.style.opacity = '0.9';
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