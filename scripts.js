console.log("hello")

background_menu = document.getElementById("back_menu");

nav = document.getElementById("nav");

modal = document.getElementById("modal")
function mostrar_menu(){
    nav.style.right = "0px"
    back_menu.style.display = "block"
}

function ocultar_menu(){
    nav.style.right = "-500px"
    back_menu.style.display = "none"
}

function mostrar_modal(){
    modal.style.display = "flex"
}

function ocultar_modal(){
    modal.style.display = "none"
}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

document.getElementById("abrir-popup").addEventListener("click", mostrar_modal);

document.getElementById("cerrar-popup").addEventListener("click", ocultar_modal);

document.getElementById("cerrar-popup").addEventListener("onmousedown", ocultar_modal);
