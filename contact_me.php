<?php
require_once 'vendor/autoload.php';
require 'FormHandler.php';

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    echo json_encode(['success' => false, 'errors' => ['general' => 'Invalid form data.']]);
    exit;
}

// Create an instance of FormHandler
$adminEmail = 'expatmindwellness@gmail.com'; // Your admin email address
$formHandler = new \App\FormHandler($adminEmail, $data);

if ($formHandler->validate()) {
    if ($formHandler->sendEmail()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'errors' => ['general' => 'Failed to send email. Please try again.']]);
    }
} else {
    echo json_encode(['success' => false, 'errors' => $formHandler->getErrors()]);
}

?>