document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os itens da lista
    const listItems = document.querySelectorAll('.city-details ul li');

    // Adiciona um evento de clique a cada item da lista
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Obtém o valor do atributo data-img do item clicado
            const imgSrc = item.getAttribute('data-img');
            
            // Seleciona a imagem dentro do contêiner de imagem do item clicado
            const imageContainer = item.querySelector('.image-container img');

            // Verifica se a imagem está visível
            if (imageContainer.style.display === 'block') {
                // Oculta a imagem
                imageContainer.style.display = 'none';
            } else {
                // Atualiza o src da imagem
                imageContainer.src = imgSrc;
                // Mostra a imagem
                imageContainer.style.display = 'block';
            }
        });
    });
});
