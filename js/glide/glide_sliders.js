var glidePropiedades = new Glide(".propiedadesSlider", {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  breakpoints: {
    840: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
});
glidePropiedades.mount();

var glidePropiedadesTwo = new Glide(".propiedadesSliderTwo", {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  breakpoints: {
    840: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
});
glidePropiedadesTwo.mount();

var glidePropiedadesGolden = new Glide(".propiedadesSliderGolden", {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  breakpoints: {
    840: {
      perView: 2,
    },
    780: {
      perView: 1,
    },
  },
});
glidePropiedadesGolden.mount();


