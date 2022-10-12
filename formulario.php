<?php

//conectar al formulario
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

//Mostrar un texto plano
$header .= "Content-Type: text/plain";

//contenido
$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $email . "\r\n";
//$mensaje .= "El asunto es: " . $asunto . "\r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'josecarlos.soliscano@gmail.com'; //email de destino
$asunto = 'Formulario de mi portafolio'; //asunto de los email


mail($para, $asunto, utf8_decode($mensaje), $header);

// Redireccion posterior al envio del formulario
header('Location:exito.html');
?>