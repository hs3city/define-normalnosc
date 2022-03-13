console.log('hello world');
// navigation

const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const menu = document.querySelector('.menu');
const navItems = document.querySelectorAll('.nav-item');
console.log(navItems);

toggleBtn.addEventListener('click', function () {
  navList.classList.toggle('show-links');
  menu.classList.toggle('menu-mobile');
});

navItems.forEach(function (item) {
  item.addEventListener('click', function () {
    navList.classList.toggle('show-links');
    menu.classList.toggle('menu-mobile');
  });
});
