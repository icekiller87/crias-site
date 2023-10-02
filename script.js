document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    menuButton.addEventListener("click", function() {
        navMenu.classList.toggle("show");
        menuButton.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const headerTitle = document.querySelector(".header-title");

    let lastScrollTop = 0

    // Função para lidar com a rolagem da página
    window.addEventListener("scroll", function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Rolar para baixo
            header.classList.add("scrolled");
            headerTitle.classList.add("scrolled");
        } else {
            // Rolar para cima
            header.classList.remove("scrolled");
            headerTitle.classList.remove("scrolled");
        }
           
        lastScrollTop = scrollTop;
        });
})

function validarForm() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Validar se o nome contém apenas letras
    if (!/^[A-Za-z\s]+$/.test(nome)) {
        alert("Nome deve conter apenas letras.");
        return false;
    }

    // Validar se a idade é maior ou igual a 18
    if (idade < 18) {
        alert("Idade deve ser igual ou maior que 18 anos.");
        return false;
    }

    // Validar o formato do email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Email inválido.");
        return false;
    }

    // Validar o formato do telefone
    if (!/^\d{2}\s\d{9}$/.test(telefone)) {
        alert("Telefone inválido. Use o formato: 99 987654321");
        return false;
    }

    return true;
}

document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do botão enviar

    // Obter os valores dos campos do formulário
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    // Validar os campos do formulário
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Email inválido.");
        return false;
    }

    if (!/^\d{2}\s\d{9}$/.test(telefone)) {
        alert("Telefone inválido. Use o formato: 99 987654321");
        return false;
    }

    // Enviar a mensagem de contato para o servidor usando a função fetch()
    fetch('https://seusite.com/api/enviar-contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            telefone: telefone
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if (data.status === 'success') {
            // Após o envio bem-sucedido da mensagem, redireciona o usuário para a página de agradecimento
            window.location.href = 'agradecimento.html';
        } else {
            alert('Erro ao enviar a mensagem de contato. Por favor, tente novamente.');
        }
    })
    .catch(function(error) {
        console.error('Erro:', error);
        alert('Erro ao enviar a mensagem de contato. Por favor, tente novamente.');
    });
});

//api >>>>> qqq
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/enviar-contato', (req, res) => {
    const email = req.body.email;
    const telefone = req.body.telefone;

    // Aqui você pode adicionar o código para validar os dados e armazená-los em um banco de dados ou enviá-los por e-mail

    res.json({ status: 'success' });
});

app.listen(3000, () => {
    console.log('API em execução na porta 3000');
});