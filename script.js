const botaoMenu = document.getElementById('menu-mobile');
const nav = document.getElementById('nav');

botaoMenu.addEventListener('click', () => {
    nav.classList.toggle('ativo');
    botaoMenu.classList.toggle('aberto');
});