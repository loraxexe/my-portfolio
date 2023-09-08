let isVisibleMenu = false;

    const buttonMenu = document.getElementById('button-menu');
    const menu = document.getElementById('menu');
    const menuItems = menu.querySelectorAll('.items');

    const toggleMenu = () => {
      if (isVisibleMenu) {
        menu.classList.remove('visible');
      } else {
        menu.classList.add('visible');
      }
      isVisibleMenu = !isVisibleMenu;
    };

    const closeMenu = () => {
      menu.classList.remove('visible');
      isVisibleMenu = false;
    };

    buttonMenu.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });

/* POP-UP*/ 

const openContactButton = document.getElementById('pen-contact');
const contactPopup = document.getElementById('contact-popup');
const closeContactButton = document.getElementById('close-contact');

openContactButton.addEventListener('click', () => {
    contactPopup.style.display = 'block';
});

closeContactButton.addEventListener('click', () => {
    contactPopup.style.display = 'none';
});

