const botaoMenu = document.getElementById("botao-menu");
const menuOpcoes = document.getElementById("menu-op");

function abrirMenu() {
    menuOpcoes.classList.toggle("abrir");
}

botaoMenu.addEventListener("click", abrirMenu);
