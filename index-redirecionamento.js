// Configuração para o redirecionamento entre abas e telas do projeto

// Mapeamento de botões para suas respectivas páginas

const pageRedirects = {
    'btn-explore-one': 'index-beta.html',
    'btn-explore-two': 'index-gamma.html',
    'btn-explore-twere': 'index-alpha.html'
};

// Função de redirecionamento única
function redirectToPage(buttonId) {
    const targetPage = pageRedirects[buttonId];
    if (targetPage) {
        window.location.href = targetPage;
    } else {
        console.error(`Página não encontrada para o botão: ${buttonId}`);
    }
}

// Adiciona evento de clique a todos os botões
Object.keys(pageRedirects).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => redirectToPage(buttonId));
    }
});