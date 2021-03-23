const filterBlock = document.getElementById('filter-block');
const buttonFilter = document.getElementById('button-filter');

import { startNumbPage, finishNumbPage, stopItem } from './slider-page.js';
import { animationPage } from './animation.js';

export const select = (getUsers) => {
  const selectHeader = document.querySelectorAll('.select-header');
  const selectItem = document.querySelectorAll('.select-item');

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.select');
    let currentText = select.querySelector('.select-current');
    currentText.innerText = text;
    select.classList.remove('is-active');
    (startNumbPage.innerHTML = 0),
      (finishNumbPage.innerHTML = `${stopItem}`),
      animationPage();
    getUsers();
  }
};

function filterSearch() {
  const funcActive = () => {
    filterBlock.classList.toggle('menu-filter-active');
    buttonFilter.classList.toggle('button-back');
  };

  buttonFilter.addEventListener('click', funcActive);
}
filterSearch();
