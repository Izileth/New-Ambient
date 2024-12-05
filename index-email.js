// Primeiro, adicione a biblioteca EmailJS ao seu HTML
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// Inicialize o EmailJS com sua User ID
(function(){
    emailjs.init("H6uZqEWGG1n2GZeoz"); // Obtenha no site do EmailJS
})();

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm()) {
        // Desativa o botão para evitar envios duplicados
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Prepara os parâmetros do e-mail
        const templateParams = {
            from_name: nameInput.value,
            from_email: emailInput.value,
            message: messageInput.value
        };

        // Envia o e-mail
        emailjs.send('service_4l9whkh', 'template_40h51jh"', templateParams)
            .then(() => {
                // Sucesso no envio
                const statusMessage = document.getElementById('status-message');
                statusMessage.textContent = 'Mensagem enviada com sucesso!';
                statusMessage.style.color = 'green';

                // Altera o ícone para check
                const checkboxLabel = document.querySelector('.check');
                checkboxLabel.classList.add('checked');

                // Limpa o formulário
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar';
            }, (error) => {
                // Erro no envio
                const statusMessage = document.getElementById('status-message');
                statusMessage.textContent = 'Erro ao enviar mensagem. Tente novamente.';
                statusMessage.style.color = 'red';

                submitButton.disabled = false;
                submitButton.textContent = 'Enviar';
                console.error('Erro:', error);
            });
    }
});

// Adicione CSS para estilizar o ícone de check