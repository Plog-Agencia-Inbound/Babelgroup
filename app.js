// Funciones de Menu

var openmenu = document.querySelector(".openMenu");
var closemenu = document.querySelector(".closeMenu");

var sidemenu = document.querySelector("#sidemenu");

openmenu.addEventListener('click', openMenu);
closemenu.addEventListener('click', closeMenu);

function openMenu() {
    if(sidemenu.getAttribute("class") == "menu-collapsed"){
        sidemenu.classList.remove("menu-collapsed");
        sidemenu.classList.add("menu-expanded");
    }

  //sidemenu.getAttribute("class") == "menu-collapsed" ? sidemenu.classList.remove("menu-collapsed") : sidemenu.classList.add("menu-expanded");  
}

function closeMenu() {
    if(sidemenu.getAttribute("class") == "menu-expanded"){
        sidemenu.classList.remove("menu-expanded");
        sidemenu.classList.add("menu-collapsed");
    }
    //sidemenu.getAttribute("class") == "menu-expanded" ? sidemenu.classList.remove("menu-expanded") : sidemenu.classList.add("menu-collapsed");  
}

// Funciones de Busqueda (Rango)

/* Rango de precio */
var output = document.getElementById("output");
var range = document.getElementById("range_slider");
output.innerHTML = numeral(range.value).format('$0,0.00');
range.oninput = function() {
    output.innerHTML = numeral(range.value).format('$0,0.00');
}

/* Rango de area */
var output_area = document.getElementById("area_output");
var range_area = document.getElementById("area_slider");
output_area.innerHTML = numeral(range_area.value).format('0,0')+' Mts2';
range_area.oninput = function() {
    output_area.innerHTML = numeral(range_area.value).format('0,0')+' Mts2';
}

// Funciones de Busqueda (Busqueda Avanzada)

const btn_bA = document.getElementById("btn_bA");
const bAswitch = document.getElementById("bAswitch");
const bAContent = document.getElementById("bAContent");

btn_bA.addEventListener('click', function(){
    if(bAswitch.getAttribute("class") == "bA_on"){
        bAswitch.classList.remove("bA_on");
        bAswitch.classList.add("bA_off");

        bAContent.classList.remove("bA_off");
        bAContent.classList.add("bA_on");
    }
});