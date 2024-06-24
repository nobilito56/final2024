window.addEventListener('scroll', () => {
    let scroll = window.scrollX;
    let objects = document.querySelectorAll(".js-parallax-object");
    let objectsReverse = document.querySelectorAll(".js-parallax-object-reverse")
    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        object.style.transform = `translateX(${-scroll * 0.05}px)`;
    }
    for (let i = 0; i < objectsReverse.length; i++) {
        let objectReverse = objectsReverse[i];
        objectReverse.style.transform = `translateX(${scroll * 0.03}px)`;
    }
  });
  