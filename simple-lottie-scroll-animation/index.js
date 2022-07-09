import './smoothScroll';

import lottie from 'lottie-web/build/player/lottie';

function setUp(containerDom, assetPublicURL) {
  // https://codepen.io/mertmayda/pen/zYvPQQo
  // https://codepen.io/crioco/pen/wzLWEN
  // https://codesandbox.io/s/47xog
  const lottieProgress = lottie.loadAnimation({
    container: containerDom,
    // renderer: 'svg',
    renderer: 'canvas',
    loop: false,
    autoplay: false,
    path: assetPublicURL,
  });
  return lottieProgress;
}

const rows = document.querySelectorAll('.sticky');
const html = document.documentElement;

const progressDomList = [
  ...document.querySelectorAll('.indicator ul li .progress'),
];

const animDuration = window.innerHeight * 4;

const anim = setUp(
  document.querySelector('.sticky'),
  'https://assets10.lottiefiles.com/packages/lf20_w0cYJr.json'
);

function animatebodymovin(duration, animObject) {
  console.log(duration, animObject);
  const scrollPosition = window.scrollY;
  const maxFrames = animObject.totalFrames;
  const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

  animObject.goToAndStop(frame, true);
}

window.addEventListener('scroll', function () {
  animatebodymovin(animDuration, anim);
});

// document.addEventListener('scroll', (e) => {
//   const scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight);

//   const total = 1 / rows.length;

//   for (let [index, row] of rows.entries()) {
//     const start = total * index;
//     const end = total * (index + 1);

//     let progress = (scrolled - start) / (end - start);

//     if (progress !== 1) {
//       row.classList.remove('finish');
//     }

//     if (progress >= 1) {
//       row.classList.add('finish');
//       progress = 1;
//     }
//     if (progress <= 0) {
//       row.classList.remove('finish');
//       progress = 0;
//     }

//     setUp(
//       row,
//       'https://assets10.lottiefiles.com/packages/lf20_w0cYJr.json'
//     ).goToAndPlay(progress * 100, true);

//     const progressDom = progressDomList[index];
//     progressDom.style.width = `${progress * 100}%`;
//     row.style.setProperty('--percentage', `${progress * 100}%`);
//   }
// });
