<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $email = $data["email"];
    $telefone = $data["telefone"];

    $to = "Mateuscgames5@gmail.com"; // Altere para o seu endereço de e-mail
    $subject = "Contato do Site";
    $message = "Email: $email\nTelefone: $telefone";
    
    echo json_encode(array("status" => "success"));
} else {
    echo json_encode(array("status" => "error"));
}
?>