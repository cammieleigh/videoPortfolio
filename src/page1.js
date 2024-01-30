import { createElement } from './utils';
import garage from './images/garage-medium-wide.jpg';

function Page1() {

  const mainImg = createElement('img', {
    src: garage, className:'mainImg', alt: 'Image of a garage with an electrical box'
  });

  const nameDiv = createElement('h1', {textContent: 'Mountain West Electrical Contractors', className: 'mainHeading'});
  
  const mainSection = createElement('div', {className: 'mainWelcome'}, [nameDiv, mainImg]);
  
  const info1 = createElement('div', {textContent: 'Services', className: 'info__card'} );
  const info2 = createElement('div', {textContent: 'Contact Us!', className: 'info__card'} );

  const infoDiv = createElement('div', {className: 'info'}, [info1, info2])
  return createElement('div', {}, [mainSection, infoDiv]);
}

export default Page1;