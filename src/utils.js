const bgImgs = [
  '/assets/imgs/bg-1.png',
  '/assets/imgs/bg-2.png',
  '/assets/imgs/bg-3.png',
  '/assets/imgs/bg-4.png'
];

let lastIndex = parseInt(localStorage.getItem('lastBgIndex'));
let newIndex;

do {
  newIndex = Math.floor(Math.random() * bgImgs.length);
} while (newIndex === lastIndex && bgImgs.length > 1);

localStorage.setItem('lastBgIndex', newIndex);

const randomImg = `${bgImgs[newIndex]}?t=${Date.now()}`;

document.body.style.backgroundImage = `url("${randomImg}")`;
