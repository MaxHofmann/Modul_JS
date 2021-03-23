const burgerButton = document.getElementById('navigationToggle');
const navActive = document.getElementById('nav-menu');

import { moviesContent } from './script.js';

export const animationPage = () => {
  let count = -800;

  const animateLeft = () => {
    moviesContent.style.bottom = count + 'px';
    count = count + 20;

    if (count <= 0) {
      requestAnimationFrame(animateLeft);
    }
  };
  requestAnimationFrame(animateLeft);
};

export const animateLeft = () => {
  let count = -150;

  const animateLeft = () => {
    moviesContent.style.left = count + '%';
    count = count + 3;

    if (count <= 0) {
      requestAnimationFrame(animateLeft);
    }
  };
  requestAnimationFrame(animateLeft);
};

export const animateRight = () => {
  let count = -150;

  const animateRight = () => {
    moviesContent.style.right = count + '%';
    moviesContent.style.left = null;
    count = count + 3;

    if (count <= 0) {
      requestAnimationFrame(animateRight);
    }
  };
  requestAnimationFrame(animateRight);
};

const burgerMenu = () => {
  burgerButton.classList.toggle('burger-active');
  navActive.classList.toggle('nav-active');
};

burgerButton.addEventListener('click', burgerMenu);
