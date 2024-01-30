import { createElement } from './utils';
import { initRouter } from './router';
import menuBtn from './images/menu-icon.webp';
import logo from './images/logo-partial.png';

function Header(mainDiv) {

  const menubtn = createElement('img', {src: menuBtn, className:'menuImg'} )
  const hamburger = createElement('button', 
  {
   className: 'btn'}, [menubtn]);
   
  const appTitle = createElement('img', {
    src: logo, className:'logo', alt: 'Mountain West Logo'
  });



  // nav items
  const page1 = createElement('a', {
    href: '/#/page1',
    textContent: 'Page 1',
  });
  const page2 = createElement('a', {
    href: '/#/page2',
    textContent: 'Page 2',
  });
  const page3 = createElement('a', {
    href: '/#/page3',
    textContent: 'Page 3',
  });

  const navDiv = createElement ('div', {className: 'navBar__items'}, [page1, page2, page3]);
  const nav = createElement('nav', {className: 'navBar'}, [navDiv]);

  function show() {
    navDiv.classList.toggle('showMenu');
 
}
hamburger.addEventListener('click', show);

  return createElement('header', {}, [hamburger, appTitle, nav]);
}

function Footer() {
  const copyright = createElement('span', {
    textContent: `Copyright © ${new Date().getFullYear()}`,
  });

  return createElement('footer', {}, [copyright]);
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  return createElement('div', {}, [Header(main), main, Footer()]);
}

export default App;