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

  var glideCategody = new Glide(".categorySlider", {
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
  glideCategody.mount();