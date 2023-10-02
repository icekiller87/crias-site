/*const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/api/enviar-contato', (req, res) => {
    const { email, telefone } = req.body;

    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Mateuscgames5@gmail.com',
            pass: '16Primicias26_'
        }
    });

    const mailOptions = {
        from: 'Mateuscgames5@gmail.com',
        to: 'Mateuscgames5@gmail.com', // Altere para o seu endereço de e-mail
        subject: 'Contato do Site',
        text: `Email: ${email}\nTelefone: ${telefone}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar email');
        } else {
            console.log('Email enviado: ' + info.response);
            // Redireciona para a página de agradecimento após o envio
            res.redirect('agradecimento.html');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
*/