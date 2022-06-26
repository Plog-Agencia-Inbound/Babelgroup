// Funciones de Menu

var openmenu = document.querySelector(".openMenu");
var closemenu = document.querySelector(".closeMenu");
var sidemenu = document.querySelector("#sidemenu");

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

// Funciones de Busqueda (Rango)
/* Rango de precio */
var output = document.getElementById("output");
var range = document.getElementById("range_slider");
output.innerHTML = numeral(range.value).format("$0,0.00");
range.oninput = function () {
  output.innerHTML = numeral(range.value).format("$0,0.00");
};

/* Rango de area */
var output_area = document.getElementById("area_output");
var range_area = document.getElementById("area_slider");
output_area.innerHTML = numeral(range_area.value).format("0,0") + " Mts2";
range_area.oninput = function () {
  output_area.innerHTML = numeral(range_area.value).format("0,0") + " Mts2";
};

/* Rango de area Desktop */
var output_area_dsk = document.getElementById("area_output_bAvanzada");
var range_area_dsk = document.getElementById("area_slider_bAvanzada");
output_area_dsk.innerHTML = numeral(range_area_dsk.value).format("0,0") + " Mts2";
range_area_dsk.oninput = function () {
  output_area_dsk.innerHTML = numeral(range_area_dsk.value).format("0,0") + " Mts2";
};

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
