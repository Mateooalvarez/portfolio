<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "mateoalvarezlettieri@gmail.com";
    $asunto = "Nuevo mensaje de formulario de contacto";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Envía el correo electrónico
    mail($destinatario, $asunto, $contenido);

    // Redirige de vuelta a la página de origen
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit;
}
?>
