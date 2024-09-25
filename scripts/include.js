function include(e) {
    fetch(e)
        .then(response => response.text())
        .then(data => {
            document.getElementById("include").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

// window.onload = () => includepush(e)