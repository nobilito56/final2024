window.addEventListener('scroll', () => {
    let scroll = window.scrollX;
    console.log(scroll);
    let item = document.querySelector(".parallax-item");
    item.style.transform = `translateX(${scroll * 0.05}px) skewX(-10deg)`;
  });

