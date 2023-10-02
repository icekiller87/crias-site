document.getElementById('contatoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário
   
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        // Código para lidar com a submissão do formulário aqui
    });
    

    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const formData = {
        email: email,
        telefone: telefone
    };

    // Envia o objeto JSON para o servidor
    axios.post('enviar_email.php', JSON.stringify(formData), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        if (response.data.status === 'success') {
            // Redireciona para a página de agradecimento após o envio bem-sucedido
            window.location.href = 'agradecimento.html';
        } else {
            alert('Ocorreu um erro ao enviar o e-mail.');
        }
    })
    .catch(function (error) {
        console.error(error);
        alert('Ocorreu um erro ao enviar o e-mail.');
    });
});
