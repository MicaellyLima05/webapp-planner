function openNote() {
    location.replace("http://127.0.0.1:5500/frontend/menu.html")
}

function configurarEventos() {
    const botoes = document.querySelectorAll('.button');
    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            openNote();       
        });
    });
}

configurarEventos();