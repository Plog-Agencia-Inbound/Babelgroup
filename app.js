// Funciones Scroll
window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  let scrollX = this.scrollX;
  console.log(scrollY);
  console.log(scrollX);
  if(scrollY >= 600){
    console.log("cambio de color");7
    document.getElementById("busquedaAvanzada_scroll").style.opacity = ".2";
    document.getElementById("busquedaAvanzada_scroll").style.transition = ".5s";
  }

  if(scrollY < 600){
    console.log("cambio de color");7
    document.getElementById("busquedaAvanzada_scroll").style.opacity = "1";
    document.getElementById("busquedaAvanzada_scroll").style.transition = ".5s";
  }
});


// Boton de compartir
function shareFunction(url){
  navigator.share({
    title: 'Me encanto esta propiedad de Babelgroup.mx',
    text: 'Me encanto esta propiedad de Babelgroup.mx, Haz click aqui para poder verla',
    url: '/favicon.png'
  })
}


// Funciones de Menu

var openmenu = document.querySelector(".openMenu");
var closemenu = document.querySelector(".closeMenu");
var sidemenu = document.querySelector("#sidemenu");

var busquedaAvanzada_scroll = document.getElementById(
  "busquedaAvanzada_scroll"
);
busquedaAvanzada_scroll.addEventListener("click", openMenuAvanzado);

var btn_bAvanzada_dsk = document.getElementById("busquedaAvanzadaDsk");
var sidemenuHeader = document.getElementById("header_sidemenu");
var sidemenuContent = document.getElementById("contenido_sidemenu");
var sidemenuBusquedaAvanzada = document.getElementById(
  "busquedaAvanzada_sidemenu"
);

openmenu.addEventListener("click", openMenu);
closemenu.addEventListener("click", closeMenu);
btn_bAvanzada_dsk.addEventListener("click", openMenuAvanzado);

function openMenu() {
  if (sidemenuContent.getAttribute("class") == "sidemenu_off") {
    sidemenuHeader.classList.remove("sidemenu_off");
    sidemenuHeader.classList.add("sidemenu_on");

    sidemenuContent.classList.remove("sidemenu_off");
    sidemenuContent.classList.add("sidemenu_on");

    sidemenuBusquedaAvanzada.classList.remove("sidemenu_on");
    sidemenuBusquedaAvanzada.classList.add("sidemenu_off");
    console.log("funciona");
  } else {
    console.log("no funciona");
  }
  sidemenu.classList.remove("menu-collapsed");
  sidemenu.classList.add("menu-expanded");
}

function openMenuAvanzado() {
  if (sidemenuBusquedaAvanzada.getAttribute("class") == "sidemenu_off") {
    sidemenuBusquedaAvanzada.classList.remove("sidemenu_off");
    sidemenuBusquedaAvanzada.classList.add("sidemenu_on");

    sidemenuHeader.classList.remove("sidemenu_on");
    sidemenuHeader.classList.add("sidemenu_off");

    sidemenuContent.classList.remove("sidemenu_on");
    sidemenuContent.classList.add("sidemenu_off");

    console.log("funciona");
  } else {
    console.log("no funciona");
  }
  sidemenu.classList.remove("menu-collapsed");
  sidemenu.classList.add("menu-expanded");
}

function closeMenu() {
  sidemenu.classList.remove("menu-expanded");
  sidemenu.classList.add("menu-collapsed");
}

// Funciones de Busqueda (Busqueda Avanzada) Movil
const btn_bAvanzada = document.getElementById("btn_bAvanzada");
const bAswitch = document.getElementById("bAvanzadaswitch");
const bAContent = document.getElementById("bAvanzadaContent");

btn_bAvanzada.addEventListener("click", function () {
  if (bAswitch.getAttribute("class") == "bAvanzada_on") {
    bAswitch.classList.remove("bAvanzada_on");
    bAswitch.classList.add("bAvanzada_off");

    bAContent.classList.remove("bAvanzada_off");
    bAContent.classList.add("bAvanzada_on");
  }
});

//Funciones Switch Formularios
// Busqueda Avanzada de Escritorio
var bAcomprar = document.getElementById("bAswitch_comprar");
var bArentar = document.getElementById("bAswitch_rentar");
var bAinput = document.getElementById("bAswitch");

bAcomprar.addEventListener("click", function () {
  if (bAcomprar.getAttribute("class") == "item_bA_selector_off") {
    bAcomprar.classList.remove("item_bA_selector_off") &
      bAcomprar.classList.add("item_bA_selector_active");
    bArentar.classList.remove("item_bA_selector_active") &
      bArentar.classList.add("item_bA_selector_off");
    bAinput.value = "comprar";
  }
});

bArentar.addEventListener("click", function () {
  if (bArentar.getAttribute("class") == "item_bA_selector_off") {
    bArentar.classList.remove("item_bA_selector_off") &
      bArentar.classList.add("item_bA_selector_active");
    bAcomprar.classList.remove("item_bA_selector_active") &
      bAcomprar.classList.add("item_bA_selector_off");
    bAinput.value = "rentar";
  }
});

// Busqueda Escritorio
var bComprar = document.getElementById("dsk_comprar_s_section");
var bRentar = document.getElementById("dsk_rentar_s_section");
var binput = document.getElementById("dsk_input_s_section");

bComprar.addEventListener("click", function () {
  if (bComprar.getAttribute("class") == "dsk_switch_search_off") {
    bComprar.classList.remove("dsk_switch_search_off");
    bComprar.classList.add("dsk_switch_search_active");

    bRentar.classList.remove("dsk_switch_search_active");
    bRentar.classList.add("dsk_switch_search_off");
    binput.value = "comprar";
  }
});

bRentar.addEventListener("click", function () {
  if (bRentar.getAttribute("class") == "dsk_switch_search_off") {
    bRentar.classList.remove("dsk_switch_search_off");
    bRentar.classList.add("dsk_switch_search_active");

    bComprar.classList.remove("dsk_switch_search_active");
    bComprar.classList.add("dsk_switch_search_off");
    binput.value = "rentar";
  }
});

//Busqueda Movil
var bMcomprar = document.getElementById("ss_comprar");
var bMrentar = document.getElementById("ss_rentar");
var bMinput = document.getElementById("ss_input");

bMcomprar.addEventListener("click", function () {
  if (bMcomprar.getAttribute("class") == "off_search_second_section") {
    bMcomprar.classList.remove("off_search_second_section");
    bMcomprar.classList.add("active_search_second_section");

    bMrentar.classList.remove("active_search_second_section");
    bMrentar.classList.add("off_search_second_section");
    bMinput.value = "comprar";
  }
});

bMrentar.addEventListener("click", function () {
  if (bMrentar.getAttribute("class") == "off_search_second_section") {
    bMrentar.classList.remove("off_search_second_section");
    bMrentar.classList.add("active_search_second_section");

    bMcomprar.classList.remove("active_search_second_section");
    bMcomprar.classList.add("off_search_second_section");
    bMinput.value = "rentar";
  }
});
