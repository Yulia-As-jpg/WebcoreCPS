import { visibleTablet, visibleDesctop, buttonOpenClose, textButton, arrowRotate } from './variables';



buttonOpenClose.addEventListener("click", function(evt){
  evt.preventDefault();
  if(document.documentElement.offsetWidth < 1120) {
    for (let i = 0; i < visibleTablet.length; i++){
      visibleTablet[i].classList.toggle('inactive');
    };
  };
  for (let i = 0; i < visibleDesctop.length; i++){
    visibleDesctop[i].classList.toggle('inactive');
  };
  textButton.textContent = textButton.textContent === "Показать все" ? "Скрыть" : 'Показать все';
    textButton.classList.toggle('rotated'); 

    if (arrowRotate.style.transform === "rotate(0deg)") {
      arrowRotate.style.transform = "rotate(180deg)";
    } else {
      arrowRotate.style.transform = "rotate(0deg)";
    }
});




