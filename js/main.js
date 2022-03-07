console.log('hello world');
// navigation

const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', function () {
  navList.classList.toggle('show-links');
  menu.classList.toggle('menu-mobile');
});
