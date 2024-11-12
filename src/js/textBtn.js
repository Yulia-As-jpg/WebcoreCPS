import {link, desc} from './variables';

document.addEventListener('DOMContentLoaded', () => {


  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (desc.style.display === 'block') {
      desc.style.display = 'none';
      link.textContent = 'Читать далее';
    } else {
      desc.style.display = 'block';
      link.textContent = 'Скрыть';
    }
  });

  // Проверка разрешения экрана при загрузке страницы
  function checkScreenSize() {
    if (window.innerWidth <= 320) {
      desc.style.display = 'none';
    } else if (window.innerWidth <= 768) {
      desc.style.display = 'block';
      desc.style.overflow = 'hidden';
      desc.style.display = '-webkit-box';
      desc.style.webkitLineClamp = '2';
      desc.style.webkitBoxOrient = 'vertical';
    } else {
      desc.style.display = 'block';
    }
  }

  checkScreenSize();

  // Проверка разрешения экрана при изменении размера окна
  window.addEventListener('resize', checkScreenSize);
});