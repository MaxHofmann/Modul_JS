const burgerButton = document.getElementById('navigationToggle');
const navActive = document.getElementById('nav-menu');

const burgerMenu = () => {
  burgerButton.classList.toggle('burger-active');
  navActive.classList.toggle('nav-active');
};

burgerButton.addEventListener('click', burgerMenu);
