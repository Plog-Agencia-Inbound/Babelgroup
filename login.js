const login_babel = document.getElementById("login_babel"); //login
const register_babel = document.getElementById("register_babel"); //register

const buttonlogin = document.getElementById("inciarbabel"); //register
const buttonregister = document.getElementById("registrarbabel"); //login

buttonregister.addEventListener("click", function(){
    console.log("funciona");
    login_babel.style.display = "none";
    register_babel.style.display = "block";
});

buttonlogin.addEventListener("click", function(){
    console.log("funciona");
    register_babel.style.display = "none";
    login_babel.style.display = "block";
});