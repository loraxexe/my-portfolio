const menu = document.querySelector('.menu');
const toggleMenuButton = document.getElementById('toggleMenu');

toggleMenuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});