const arrowPriv = document.getElementById('arrow-priv');
const arrowNext = document.getElementById('arrow-next');
const startNumbPage = document.getElementById('start-page');
const finishNumbPage = document.getElementById('finish-page');
const wrapperItemClass = document.getElementsByClassName('wrapper-item');
const numberPage = document.getElementsByClassName('number');
const dotSlide = document.getElementsByClassName('dot-slide');

import { animationPage, animateLeft, animateRight } from './animation.js';
import { getUsers } from './script.js';
export { startNumbPage, finishNumbPage, stopItem };

let stopItem = 9;

for (let item of numberPage) {
  item.addEventListener('click', quantityItems);

  if (stopItem === +item.innerHTML) {
    item.className = 'number active';
  }
}

function quantityItems(event) {
  stopItem = +event.target.innerHTML;
  finishNumbPage.innerHTML = `${stopItem}`;
  let numberItem = stopItem;

  for (let item of numberPage) {
    item.addEventListener('click', quantityItems);

    animationPage();
    if (numberItem === +item.innerHTML) {
      item.className = 'number active';
    } else {
      item.className = 'number';
    }
  }
  return (
    (startNumbPage.innerHTML = 0),
    (finishNumbPage.innerHTML = `${stopItem}`),
    getUsers()
  );
}

arrowPriv.addEventListener('click', pagePriv);

function pagePriv() {
  arrowPriv.classList.add('fas');
  if ((arrowNext.classList = 'fas')) {
    arrowNext.className = 'far fa-arrow-alt-circle-right arrow-page';
  }

  startNumbPage.innerHTML = +startNumbPage.innerHTML - stopItem;
  finishNumbPage.innerHTML = +finishNumbPage.innerHTML - stopItem;
  if (startNumbPage.innerHTML < 0) {
    return (startNumbPage.innerHTML = 0), (finishNumbPage.innerHTML = 9);
  }

  getUsers();
  animateLeft();
}

arrowNext.addEventListener('click', pageNext);

function pageNext() {
  arrowNext.classList.add('fas');
  if ((arrowPriv.classList = 'fas')) {
    arrowPriv.className = 'far fa-arrow-alt-circle-left arrow-page';
  }

  startNumbPage.innerHTML = +startNumbPage.innerHTML + stopItem;
  finishNumbPage.innerHTML = +finishNumbPage.innerHTML + stopItem;
  if (wrapperItemClass.length <= 1) {
    (function () {
      return (startNumbPage.innerHTML = 0), (finishNumbPage.innerHTML = 9);
    })();
  }

  getUsers();
  animateRight();
}

export const slidePage = (data, distanceBlock, pageLine) => {
  dataList = data.length;
  distanceBlock.style.marginLeft = `${+startNumbPage.innerHTML}` + 'px';
  pageLine.style.width = `${data.length + 15}` + 'px';
  return data.slice(+startNumbPage.innerHTML, +finishNumbPage.innerHTML);
};

export const start = () => {
  (startNumbPage.innerHTML = 0),
    (finishNumbPage.innerHTML = `${stopItem}`),
    animationPage();
};

for (let item of dotSlide) {
  item.addEventListener('click', slidePageDot);
}

let dataList = 0;

function slidePageDot(event) {
  let dotItem = event.target.classList.value;
  if (dotItem === 'dot-slide dot-1') {
    startNumbPage.innerHTML = 0;
    finishNumbPage.innerHTML = stopItem;
    getUsers();
    animateLeft();
  } else if (dotItem === 'dot-slide dot-2') {
    startNumbPage.innerHTML = dataList / 2 - stopItem;
    finishNumbPage.innerHTML = dataList / 2;
    getUsers();
    animationPage();
  } else {
    startNumbPage.innerHTML = dataList - stopItem;
    finishNumbPage.innerHTML = dataList;
    getUsers();
    animateRight();
  }
}
