function carregarMenu() {
    // O caminho correto conforme a sua imagem:
    fetch('/js/components/sidebar.html') 
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o menu');
            return response.text();
        })
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
        })
        .catch(error => console.error(error));
}

carregarMenu();