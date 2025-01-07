<?php
// Activer l'affichage des erreurs pour déboguer
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {



    // Récupérer les données du formulaire de manière sécurisée
    $nom = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Remplacement des nouvelles lignes par des <br> pour l'email HTML
    $message = nl2br($message);

    // Définir l'adresse email de l'expéditeur
    $from = "mail_php@osouf-livio.fr"; // Utiliser une adresse email valide pour le domaine

    // L'adresse email qui recevra l'email (ton adresse ou celle du service client)
    $to = "livio.sup@gmail.com"; // Remplace par ton adresse de réception

    // Sujet de l'email
    $subject = "Nouveau message de contact de " . $nom;

    // Message HTML
    $body = "
    <html>
    <head>
      <title>Nouveau message de contact</title>
      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' rel='stylesheet'>
      <link rel='stylesheet' href='../CSS/Mail.css'>
      </head>
    <body>
      <div class='container'>
        <h2>Nouveau message de $nom</h2>
        <p><strong>Nom :</strong><br>$nom</p>
        <p><strong>Email :</strong><br>$email</p>
        <p><strong>Message :</strong><br>$message</p>
      </div>
      <div class='footer'>
        <p>Ce message a été envoyé depuis votre site web <a href='https://www.osouf-livio.fr'>osouf-livio.fr</a></p>
      </div>
    </body>
    </html>
    ";

    // Entêtes de l'email pour envoyer un email au format HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Envoyer l'email
    if (mail($to, $subject, $body, $headers)) {
        // Si l'email est envoyé avec succès, renvoyer une popup
        echo "<script>
            alert('Votre message a été envoyé avec succès.');
            window.location.href = 'https://www.osouf-livio.fr'; // Redirige vers la page de base après la popup
        </script>";
    } else {
        // En cas d'échec de l'envoi, afficher un message d'erreur
        echo "<script>
            alert('Une erreur est survenue lors de l\'envoi de l\'email.');
            window.location.href = 'https://www.osouf-livio.fr'; // Redirige vers la page de base après la popup
        </script>";
    }
}
?>
