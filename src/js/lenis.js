import Lenis from 'lenis';

const lenis = new Lenis({
    content : document.querySelector('.frame'),
    // Valeur entre 0 et 1
    // Valeur par défaut : 0,1
    // Plus la valeur est faible, plus le scroll sera fluide
    lerp: 0.05, 
    smoothWheel: true,
    orientation: 'horizontal',
    // Valeur par défaut : 1
    // Plus la valeur est haute, plus le défilement sera rapide 
    wheelMultiplier: 0.3, 
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);