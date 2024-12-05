class ImageCarousel {
    constructor(images) {
        this.carousel = document.getElementById('carrousel');
        this.imgElement = this.carousel.querySelector('img');
        this.images = images;
        this.currentIndex = -1;

        // Configurações de transição
        this.transitionDuration = 1000; // 1 segundo
        this.displayDuration = 3000; // 3 segundos

        // Inicializar o carrossel
        this.init();
    }

    init() {
        // Adicionar event listener para interação manual
        this.carousel.addEventListener('click', () => this.changeImage());

        // Iniciar primeira imagem
        this.changeImage();

        // Configurar mudança automática
        this.autoChangeInterval = setInterval(() => this.changeImage(), this.displayDuration);
    }

    changeImage() {
        // Incrementar índice
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        const currentImage = this.images[this.currentIndex];

        // Adicionar classe de fade out
        this.imgElement.classList.add('fade-out');

        // Transição de imagem e fundo após o fade out
        setTimeout(() => {
            // Atualizar imagem
            this.imgElement.src = currentImage.src;
            
            // Atualizar fundo
            document.body.style.background = currentImage.backgroundColor;

            // Remover classe de fade out
            this.imgElement.classList.remove('fade-out');
        }, this.transitionDuration);
    }

    // Método para parar a mudança automática
    stopAutoChange() {
        if (this.autoChangeInterval) {
            clearInterval(this.autoChangeInterval);
        }
    }
}

// Definição das imagens

const images = [
    {
        src: "/assets/images-shoes/New-under-armpur-shoes-Stephen-Curry-removebg-preview.png",
        backgroundColor: "linear-gradient(to bottom, #8d00c0, #000000)",
    },
    {
        src: "/assets/images-shoes/OIP-removebg-preview.png", 
        backgroundColor: "linear-gradient(to bottom, #8d00c0, #000000)",
    },
    {
        src: "/assets/images-shoes/Under-Armour-Curry-Flow-10-Northern-Lights-3025621-500-04-removebg-preview.png",
        backgroundColor: "linear-gradient(to bottom, #8d00c0, #000000)",
    },
    {
        src: "/assets/images-shoes/under-armour-curry-flow-10-splash-buderfly-removebg-preview.png", 
        backgroundColor: "linear-gradient(to bottom, #8d00c0, #000000)",
    },
    {
        src: "/assets/images-shoes/under-armour-curry-flow-10-splash-party-removebg-preview.png", 
        backgroundColor: "linear-gradient(to bottom, #8d00c0, #000000)", 
    }
];

// Iniciar carrossel
const carousel = new ImageCarousel(images);


// Cofniguração de Javascript

//Duplicação de imagem e criação do carrousel infinito

//var copy = document.querySelector(".logos-slide").cloneNode(true);
//document.querySelector(".logos-carrousel").appendChild(copy)
