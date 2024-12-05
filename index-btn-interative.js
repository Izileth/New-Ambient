//Ajutes no span para dar suporte em diferentes telas


// Suporte da interação de aparencimento das informações dos jogadores pelo span

const tooltipItems = document.querySelectorAll('.beta .container .box >div .item ul li i');

tooltipItems.forEach(item => {
    item.addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.classList.add('active');
    });

    item.addEventListener('touchend', function() {
        this.classList.remove('active');
    });
});