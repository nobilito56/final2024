window.addEventListener('scroll', () => {
    let scroll = window.scrollX;
    console.log(scroll);
    let items = document.querySelectorAll(".parallax-item");
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.style.transform = `translateX(${scroll * 0.05}px) skewX(-10deg)`;
    }
  });

