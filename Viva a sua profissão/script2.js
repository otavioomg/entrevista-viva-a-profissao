document.addEventListener('DOMContentLoaded', function() {
    // Simula um tempo de carregamento (remova em produção)
    setTimeout(function() {
        const loadingElement = document.getElementById('loading');
        const contentElement = document.querySelector('.content');
        
        // Mostra o conteúdo principal
        contentElement.classList.add('show');
        
        // Esconde o loader com fade out
        loadingElement.style.opacity = '0';
        
        // Remove o loader após a animação
        setTimeout(function() {
            loadingElement.style.display = 'none';
        }, 500); // Corresponde ao tempo da transição
    }, 1500); // Tempo simulado de carregamento (ajuste conforme necessário)
});