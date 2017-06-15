// const hero = document.querySelector('.hero');

// function fadeIn(el) {
//   el.style.opacity = 0;

//   var last = +new Date();
//   var tick = function() {
//     el.style.opacity = +el.style.opacity + (new Date() - last) / 1000 * 3;
//     last = +new Date();

//     if (+el.style.opacity < 1) {
//       (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
//     }
//   };

//   tick();
// }

// fadeIn(document.body);

// headroom.js
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init();