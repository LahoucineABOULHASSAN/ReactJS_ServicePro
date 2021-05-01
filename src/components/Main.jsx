import ServicesContextProvider from '../contexts/ServicesContext';
import '../stylesheets/main.css';
import About from './main/About';
import Features from './main/Features';
import Services from './main/Services';
import Work from './main/Work';
const Main = () => {
  let isScrolled = false;
  const fixTop = () => {
    const nav = document.getElementById('myTopnav');
    if (
      document.body.scrollTop > 36 ||
      document.documentElement.scrollTop > 36
    ) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  };
  const incEltNbr = (elem) => {
    const endNbr = Number(elem.innerHTML);
    incNbrRec(0, endNbr, elem);
  };
  const incNbrRec = (i, endNbr, elt) => {
    let speed = 2;
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(() => {
        incNbrRec(i + 1, endNbr, elt);
      }, speed);
    }
  };
  const increase = () => {
    const items = document.querySelectorAll('.nbr');
    items.forEach((item) => incEltNbr(item));
    isScrolled = true;
  };
  window.onscroll = () => {
    // fix nav on top
    fixTop();
    // numbers increament
    const item = document.getElementById('nbrs');
    const services = document.getElementById('our-services');
    const btn = document.querySelector('.to-top');
    let shouldAnimate = window.scrollY + window.innerHeight >= item.offsetTop;
    let shouldStick = window.scrollY + window.innerHeight >= services.offsetTop;
    if (shouldAnimate && !isScrolled) {
      increase();
    }
    if (shouldStick) {
      btn.classList.add('fix-to-top');
    } else btn.classList.remove('fix-to-top');
  };
  return (
    <ServicesContextProvider>
      <main className="main-content">
        <Services />
        <Work />
        <About />
        <Features />
      </main>
    </ServicesContextProvider>
  );
};

export default Main;
