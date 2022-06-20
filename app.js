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