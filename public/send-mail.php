<?php
// =====================================================
// AnouarLab Contact Form — PHP Mail Handler
// =====================================================

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

// Honeypot check (spam protection)
if (!empty($_POST['bot-field'])) {
    // Bot detected — silently redirect to thank-you page
    header('Location: /merci/');
    exit;
}

// Sanitize inputs
$name    = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email   = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$website = filter_input(INPUT_POST, 'website', FILTER_SANITIZE_URL);
$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    exit('Tous les champs obligatoires doivent être remplis.');
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Adresse email invalide.');
}

// =====================================================
// Configuration — UPDATE THIS EMAIL ADDRESS
// =====================================================
$to = 'contact@anouarlab.fr';  // Change to your actual email

// Build the email
$email_subject = "[AnouarLab Contact] $subject — $name";

$email_body = "Nouveau message depuis le formulaire de contact AnouarLab\n";
$email_body .= "================================================\n\n";
$email_body .= "Nom     : $name\n";
$email_body .= "Email   : $email\n";
$email_body .= "Site    : " . ($website ?: 'Non renseigné') . "\n";
$email_body .= "Sujet   : $subject\n\n";
$email_body .= "Message :\n";
$email_body .= "------------------------------------------------\n";
$email_body .= "$message\n";
$email_body .= "------------------------------------------------\n";

$headers = [
    'From'       => "AnouarLab <noreply@anouarlab.fr>",
    'Reply-To'   => "$name <$email>",
    'X-Mailer'   => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8',
];

// Format headers string
$headers_string = '';
foreach ($headers as $key => $value) {
    $headers_string .= "$key: $value\r\n";
}

// Send the email
$sent = mail($to, $email_subject, $email_body, $headers_string);

if ($sent) {
    // Redirect to thank-you page
    header('Location: /merci/');
    exit;
} else {
    http_response_code(500);
    exit('Erreur lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement par email.');
}
