document.getElementById('butao').addEventListener('click', () => {

    const dia = document.getElementById("dia").value

    const dados = {
        dia: dia
    };

    //url de onde tá a api
    fetch('https://planner-h18e.onrender.com/delnotes', {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (!response.ok) {
                throw new Error('Erro na rede.');
            }
        alert("Tudo certo!")
    })
    .then(data => {
        })
    .catch(error => {
        console.error('Erro:', error);
    });
});
