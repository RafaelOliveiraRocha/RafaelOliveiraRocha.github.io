import { SlideNav } from './slide.js';
import IniciaScrollSuave from './scroll-suave.js';
import IniciaMenuMobile from './menu-mobile.js';
IniciaScrollSuave();
IniciaMenuMobile();

const slide = new SlideNav('.slide', '.slide-projeto');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl();

new SimpleSlide({
  slide: 'principal',
  nav: false,
  auto: true,
  time: 3000,
});
