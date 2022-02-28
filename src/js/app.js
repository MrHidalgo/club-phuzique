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

    let scroll = getCurrentScroll();

    (scroll >= shrinkHeader) ? document.querySelector('#header').classList.add('is-fixed') : document.querySelector('#header').classList.remove('is-fixed');

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

  const gaspAnimation = () => {
    $(".main").mousemove(function(e) {
      parallaxIt(e, "#welcome", "#welcomeAnimationImg1", -5);
      parallaxIt(e, "#welcome", "#welcomeAnimationImg2", 5);
      parallaxIt(e, "#welcome", "#welcomeAnimationImg3", -5);
      parallaxIt(e, "#welcome", "#welcomeAnimationImg4", 5);

      parallaxIt(e, "#togetherAnimation", "#togetherAnimationImg4", -6);
      parallaxIt(e, "#togetherAnimation", "#togetherAnimationImg5", 10);
    });

    function parallaxIt(e, currentEl, target, movement) {
      const $this = $(currentEl);
      const relX = e.pageX - $this.offset().left;
      const relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }
  };

  const wowScrollAnimation = () => {
    new WOW().init();
  };


  initHeaderFixed();
  smoothScrollAnchor();
  gaspAnimation();
  wowScrollAnimation();


}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
