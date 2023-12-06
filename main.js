const hamburgerMenu = document.querySelector('.container-header-hamburger-menu');
const menu = document.querySelector('.container-menu');
const closeBtn = document.querySelector('.container-menu-close-btn');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});