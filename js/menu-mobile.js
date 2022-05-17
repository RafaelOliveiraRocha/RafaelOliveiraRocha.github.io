import outsideEvent from './outside-click.js';

export default function IniciaMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideEvent(menuList, ['click', 'touchstart'], () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }

  menuButton.addEventListener('click', openMenu);
}
