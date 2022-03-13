// navigation

const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const menu = document.querySelector('.menu');
const navItems = document.querySelectorAll('.nav-item');
<<<<<<< HEAD
=======
console.log(navItems);
>>>>>>> 257a5c406f5d6b29c75f8ec83aeec80791d8a674

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
