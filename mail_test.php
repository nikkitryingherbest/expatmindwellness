<?php
// Ensure that the script is run from the command line
if (php_sapi_name() !== 'cli') {
    exit("This script should be run from the command line.\n");
}

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include the PHPMailer classes
require 'vendor/autoload.php';

// Include the FormHandler class file
require 'FormHandler.php'; // Adjust the filename if different

// Sample data to test the email sending
$data = [
    'name'    => 'John Doe',
    'email'   => 'john.doe@example.com',
    'message' => 'Iljins Gejs.'
];

// Create an instance of FormHandler
$adminEmail = 'nigarhuseyn17@gmail.com'; // Your admin email address
$formHandler = new \App\FormHandler($adminEmail, $data);

// Validate and send the email
if ($formHandler->validate()) {
    if ($formHandler->sendEmail()) {
        echo "Email sent successfully.\n";
    } else {
        echo "Email could not be sent.\n";
    }
} else {
    echo "Validation failed:\n";
    print_r($formHandler->getErrors());
}
