document.getElementById('butao').addEventListener('click', () => {

    const dia = document.getElementById("dia").value;

    async function organizaURL(dia) {

        const url = new URL('http://localhost:3000/shownotes');
        url.searchParams.append('dia', dia);

    try {
        const response = await fetch(url, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json', 
            }
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const objeto = await response.json();
        let texto = objeto.texto
        document.getElementById("title").innerText = texto


    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

organizaURL(dia);

});