document.addEventListener("DOMContentLoaded", function () {

      const h_swiper = new HeroSwiper('.swiper-container');
      h_swiper.start({ delay: 4000, disableOnInteraction: true })
      // setTimeout(() => {
      //       h_swiper.stop();
      // }, 5000)
});


class HeroSwiper {
      constructor(el) {
            this.el = el
            this.swiper = this._initSwiper();


      }
      _initSwiper() {
            return new Swiper(this.el, {
                  // Optional parameters
                  // direction: 'horizontal',
                  // direction: 'horizontal',
                  effect: "coverflow",
                  loop: true,
                  centeredSlides: true,
                  slidesPerView: 1,
                  speed: 2000,
                  breakpoints: {
                        1024: {
                              slidesPerView: 3
                        }
                  },
            });

      }
      start(options = {}) {
            options = Object.assign({
                  delay: 4000,
                  disableOnInteraction: false
            }, options)
            this.swiper.params.autoplay = options;
            this.swiper.autoplay.start();
      }
      stop() {
            this.swiper.autoplay.stop();
      }
}