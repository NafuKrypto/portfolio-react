const cursor = document.querySelector('.cursor-inner');
const cursorTwo = document.querySelector('.cursor');

// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.pageX - 100 + 'px';
//   cursor.style.top = e.pageY - 100 + 'px';
// });

// document.addEventListener('mouseover', () => {
//   cursor.classList.add('active');
// });

// document.addEventListener('mouseleave', () => {
//   cursor.classList.remove('active');
// });

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;
let delay = 30; // Adjust the delay factor (higher values = more delay)

function animateCursor() {
  const distX = mouseX - posX;
  const distY = mouseY - posY;
  posX = posX + distX / delay;
  posY = posY + distY / delay;

  cursor.style.left = posX + 'px';
  cursor.style.top = posY + 'px';

  requestAnimationFrame(animateCursor);
}

function animateCursorTwo() {
  const distX = mouseX - posX;
  const distY = mouseY - posY;
  posX = posX + distX / delay;
  posY = posY + distY / delay;

  cursorTwo.style.left = posX + 'px';
  cursorTwo.style.top = posY + 'px';

  requestAnimationFrame(animateCursorTwo);
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

animateCursor();
animateCursorTwo();

document.addEventListener('mouseover', () => {
  cursor.classList.add('active');
  cursorTwo.classList.add('active');
});

document.addEventListener('mouseleave', () => {
  cursor.classList.remove('active');
  cursorTwo.classList.remove('active');
});
