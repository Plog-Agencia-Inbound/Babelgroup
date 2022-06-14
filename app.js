
/* Modulo Menu*/

const menuContent = document.querySelector("#menu_content");
const menuSearch = document.querySelector("#menu_search");

const btn_close = document.querySelector('#menu_close');
const btn_open = document.querySelector('#menu_open');
const menu = document.querySelector('#navigation_menu');

const busquedaAvanzada = document.querySelector('#search_filter'); 

busquedaAvanzada.addEventListener('click',openSearch);

btn_close.addEventListener('click', closeMenu);
btn_open.addEventListener('click', openMenu);

function openMenu(){
    if(menuContent.getAttribute("class")=="off_select"){
        menuContent.classList.remove("off_select");
        menuContent.classList.add("on_select")
        menuSearch.classList.remove("on_select");
        menuSearch.classList.add("off_select");
    }
    
    
    menu.classList.remove("menu-collapsed");
    menu.classList.add("menu-expanded");
}

function closeMenu(){
    menu.classList.remove("menu-expanded");
    menu.classList.add("menu-collapsed");
}

function openSearch(){
    if(menuSearch.getAttribute("class")=="off_select"){
        menuSearch.classList.remove("off_select");
        menuSearch.classList.add("on_select")
        menuContent.classList.remove("on_select");
        menuContent.classList.add("off_select");
    }
    
    
    menu.classList.remove("menu-collapsed");
    menu.classList.add("menu-expanded");
}




/* Switch */
const btnCompra = document.querySelector("#compra");
const btnRenta = document.querySelector("#renta");
var inputSwith = document.querySelector("#switch");

btnCompra.addEventListener('click', e => {
    
    inputSwith.value = "compra";
    if (btnCompra.getAttribute("class") == "check") {
        console.log(btnCompra.getAttribute("class"));
    }
    else {
        btnCompra.classList.remove("no-check");
        btnCompra.classList.add("check")
        btnRenta.classList.remove("check");
        btnRenta.classList.add("no-check");
    }
});

btnRenta.addEventListener('click', e => {
    inputSwith.value = "Renta";
    if (btnRenta.getAttribute("class") == "check") {
        console.log(btnRenta.getAttribute("class"));
    }
    else {
        btnRenta.classList.remove("no-check");
        btnRenta.classList.add("check")

        btnCompra.classList.remove("check");
        btnCompra.classList.add("no-check");
    }
});

/* Rango de superficie */
var superficie = document.querySelector("#rango-superficie");
var pointer = document.querySelector("#superficie");
superficie.oninput = function() {
    pointer.innerHTML = this.value;
}