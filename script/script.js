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

const form = document.getElementById("formulario");
form.addEventListener("submit", () =>{
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const titulo = document.getElementById("titulo").value
    const texto = document.getElementById("texto").value.replaceAll('\n', '%0a')
    console.log(texto)
    const text = `
Olá, Me Chamo ${nome}. Vim pelo seu portfólio.%0a
Este é meu e-mail de contato ${email}.%0a
%0a
*${titulo}*%0a
${texto}%0a
`
    window.open(`https://wa.me/552297477083?text=${text}%0a`, "_blank").focus();
});
