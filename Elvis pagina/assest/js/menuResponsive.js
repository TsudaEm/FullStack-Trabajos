const botonMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".buttons-container");

if (botonMenu && menu) {
    botonMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-abierto");
    });
}
