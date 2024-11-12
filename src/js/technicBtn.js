import {technicBtn, technicDesctop, visibleTablet, technicTextButton, technicArrowRotate} from './variables';


technicBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  if(document.documentElement.offsetWidth < 1120) {
    for (let i = 0; i < visibleTablet.length; i++){
      visibleTablet[i].classList.toggle('inactive');
    };
  };
  for (let i = 0; i < technicDesctop.length; i++){
    technicDesctop[i].classList.toggle('inactive');
  };
  technicTextButton.textContent = technicTextButton.textContent === "Показать все" ? "Скрыть" : 'Показать все';
  technicTextButton.classList.toggle('rotated'); 

    if (technicArrowRotate.style.transform === "rotate(0deg)") {
      technicArrowRotate.style.transform = "rotate(180deg)";
    } else {
      technicArrowRotate.style.transform = "rotate(0deg)";
    }
});





/*document.addEventListener('DOMContentLoaded', () => {
  const hideButton = document.querySelector('.technic-open');
  const hiddenSlides = document.querySelector('.technic-wrapper');

  if (!hideButton || !hiddenSlides) {
    console.error('Элементы не найдены');
    return;
  }

  let isHidden = true;

  const showList = () => {
    hiddenSlides.classList.add('visible');
    isHidden = false;
    hideButton.innerHTML = 'Скрыть';
    hideButton.classList.add('rotate');
  }

  const hideList = () => {
    hiddenSlides.classList.remove('visible');
    isHidden = true;
    hideButton.innerHTML = 'Показать все';
    hideButton.classList.remove('rotate');
  }

  hideButton.addEventListener('click', () => {
    if (isHidden) {
      showList();
    } else {
      hideList();
    }
  });
});
*/