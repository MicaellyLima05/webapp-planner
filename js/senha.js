const senha = "2121MICA@@"

document.getElementById("submit").addEventListener("click", () => {
    tentativa = document.getElementById("senha").value

    if (tentativa === senha) {
        document.getElementById("link").style.display = "block"
        document.getElementById("title").innerHTML = ""
    } else {
        document.getElementById("title").innerHTML = "Tente novamente"
    }
})

