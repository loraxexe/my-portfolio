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


    const code = document.getElementById('card-one')

    code.innerHTML = `
<div class="card-one">
<pre>
<span class="card-cont">.container </span><span class="card-key">&lcub;</span>
  display: <span class="card-tags">flex;</span>
  align-items: <span class="card-tags">center;</span>
  justify-content: <span class="card-tags">center;</span>
  flex-direction: <span class="card-tags">column;</span>
<span class="card-key">&rcub;</span></pre>
</div>
`

const code2 = document.getElementById('card-two')

code2.innerHTML = `
<div class="card-item">
<pre>
<span class="card-cont">.card </span><span class="card-key">&lcub;</span>
  width: <span class="card-tags">100%;</span>
  background: <span class="card-tags">#00ffb3;</span>
  box-shadow: <span class="card-tags">2px -4px 2px;</span>
<span class="card-key">&rcub;</span></pre>
</div>
`

const code3 = document.getElementById('card-three')

code3.innerHTML = `
<div class="card-three">
<pre>
<span class="card-cont">.menu </span><span class="card-key">&lcub;</span>
  width: <span class="card-tags">100%;</span>
  padding: <span class="card-tags">2rem;</span>
  cursor: <span class="card-tags">pointer;</span>
<span class="card-key">&rcub;</span></pre>
</div>
`