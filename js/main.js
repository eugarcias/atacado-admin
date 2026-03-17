

function carregarMenu () {
  fetch ('components/sidebar.html')
  .then(response => response.text())
  .then(data =>{
    document.getElementById ('sidebar-container').innerHTML = data;
  })
  .catch (error => console.error('Erro ao carregar menu: ', error));
}

carregarMenu();