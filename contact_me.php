<?php
 
var_dump($_POST);


require_once 'vendor/autoload.php';
 
require 'FormHandler.php'; 


// Create an instance of FormHandler
$adminEmail = 'nigarhuseyn17@gmail.com'; // Your admin email address
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