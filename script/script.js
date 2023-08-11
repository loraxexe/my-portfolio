let isVisibleMenu = false;

const buttonMenu = document.getElementById('button-menu');

const toggleMenu = () => {
  const menu = document.getElementById('menu');
  if (isVisibleMenu) {
    menu.classList.remove('visible');
  } else if (isVisibleMenu === false){
    menu.classList.add('visible')
  }
  isVisibleMenu = !isVisibleMenu 
}


buttonMenu.addEventListener('click', toggleMenu)