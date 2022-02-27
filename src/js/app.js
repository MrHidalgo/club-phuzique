import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {
  const _tlMousemove = new TimelineMax({yoyo:true, repeat:-1});

  // COMMON
  Common.initLoad();

  // MACROS
  const initHeaderFixed = () => {
    const getCurrentScroll = () => window.pageYOffset || document.documentElement.scrollTop,
      shrinkHeader = 5;

    window.addEventListener('scroll', () => {
      let scroll = getCurrentScroll();

      (scroll >= shrinkHeader) ? document.querySelector('#header').classList.add('is-fixed') : document.querySelector('#header').classList.remove('is-fixed');
    });
  };

  const smoothScrollAnchor = () => {
    document.querySelectorAll('.header__nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (ev) {
        ev.preventDefault();

        document.querySelector('.header__nav a[href^="#"].is-active').classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  };


  initHeaderFixed();
  smoothScrollAnchor();


}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
