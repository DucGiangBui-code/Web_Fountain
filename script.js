
const menuIcon = document.getElementById('menuIcon');
const menuList = document.getElementById('menuList');
const scrollBtn = document.getElementById('scrollTopBtn');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('show');

  if (menuIcon.classList.contains('bx-menu')) {
    menuIcon.classList.replace('bx-menu', 'bx-x');
  } else {
    menuIcon.classList.replace('bx-x', 'bx-menu');
  }
});
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
