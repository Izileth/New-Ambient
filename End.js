contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm()) {
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        fetch('/seu-endpoint-de-envio-de-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            })
        })
        .then(response => response.json())
        .then(data => {
            // Lógica de sucesso similar ao exemplo anterior
        })
        .catch(error => {
            // Lógica de erro
        });
    }
});