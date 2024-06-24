window.addEventListener('scroll', () => {
  let scroll = window.scrollX;
  let itemIntro = document.querySelector(".parallax-intro-item");
  itemIntro.style.transform = `translateX(${scroll * 0.2}px)`;
});

