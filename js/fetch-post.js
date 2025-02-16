document.getElementById('elements').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const texto = document.getElementById("texto").value;
    const dia = document.getElementById("dia").value

    const dados = {
        texto: texto,
        dia: dia
    };

    //url de onde tá a api
    fetch('http://localhost:3000/makenotes', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (!response.ok) {
                throw new Error('Erro na rede.');
            }
        alert("Tudo certo!");
    })
    .then(data => {
        })
    .catch(error => {
        console.error('Erro:', error);
    });
});