import flickity from 'flickity';

var elem = document.querySelector('.main-carousel');
  export const flik = new flickity( elem, {
    //contain: true,
    pageDots: true,
    setGallerySize: false,
    autoPlay: true,
    wrapAround: true
}

);