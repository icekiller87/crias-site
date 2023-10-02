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

    document.getElementById("agradecimento").style.display = "block";
    return false;
}
/*
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contatoForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = form.email.value;
        const telefone = form.telefone.value;

        fetch('/api/enviar-contato', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, telefone })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                window.location.href = '/agradecimento.html';
            } else {
                alert('Erro ao enviar a mensagem de contato. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar a mensagem de contato. Por favor, tente novamente.');
        });
    });
});*/