function openNote() {
    location.replace("https://webappplanner.vercel.app/menu.html")
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
