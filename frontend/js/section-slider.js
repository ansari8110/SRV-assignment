const highlightSlider = document.querySelector('.highlights__slider');

let isDown = false;
let startX;

highlightSlider.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX;
});

highlightSlider.addEventListener('mouseup', () => {
  isDown = false;
});

highlightSlider.addEventListener('mousemove', e => {
  if (!isDown) return;
  highlightSlider.scrollLeft += startX - e.pageX;
});
