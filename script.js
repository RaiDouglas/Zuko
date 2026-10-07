const botaoMenu = document.getElementById("botao-menu");
const menuOpcoes = document.getElementById("menu-op");

function abrirMenu() {
    menuOpcoes.classList.toggle("abrir");
}

botaoMenu.addEventListener("click", abrirMenu);

const temaClaro = document.getElementById("tema-claro");
const temaEscuro = document.getElementById("tema-escuro");

temaClaro.addEventListener("click", function(){
    document.body.classList.remove("tema-escuro");

    localStorage.setItem("tema", "claro");
});

temaEscuro.addEventListener("click", function() {
    document.body.classList.add("tema-escuro");

    localStorage.setItem("tema", "escuro");
});

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    document.body.classList.add("tema-escuro");
}