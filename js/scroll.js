

document.addEventListener("DOMContentLoaded", function () {

      const cb = function (el, isIntersecting) {
            if (isIntersecting) {
                  const ta = new TextAnimation(el);
                  ta.animate();
            }
      };
      const sar = new ScrollObserver(".main-explane", cb);



});


class ScrollObserver {
      constructor(els, cb, options) {
            this.els = document.querySelectorAll(els);
            this.cb = cb;
            const defaultOptions = {
                  root: null,
                  rootMargin: "0px 0px",
            };
            this.option = Object.assign(defaultOptions, options);
            this._init();
      }
      _init() {
            const callback = function (entries, observer) {
                  entries.forEach(entry => {
                        if (entry.isIntersecting) {
                              // console.log("inview");
                              entry.target.classList.toggle("inviewaaaaaaaa");
                              this.cb(entry.target, true);
                              observer.unobserve(entry.target);
                        }
                        else {
                              // console.log("outview");
                              this.cb(entry.target, false);
                        }

                  });
            };
            const io = new IntersectionObserver(callback.bind(this), this.option);
            this.els.forEach(el => io.observe(el));
      }
}


// 一文字ごとに分割する
class TextAnimation {
      constructor(el) {
            this.DOM = {};

            if (el instanceof HTMLElement) {
                  this.DOM.el = el;
            }
            else {
                  this.DOM.el = document.querySelector(el);
            }

            this.chars = this.DOM.el.innerHTML.trim().split("");
            this.DOM.el.innerHTML = this._splitText();
            console.log(this.DOM.el.innerHTML);
            // alert("this.el");
      }
      _splitText() {
            return this.chars.reduce((acc, curr) => {
                  curr = curr.replace(" ", "&nbsp;");
                  // console.log(`${acc}<span class="char">${curr}</span>`);
                  return `${acc}<span class="char">${curr}</span>`;

            }, "");
      }

      animate() {
            this.DOM.el.classList.toggle("inview");
      }
}

