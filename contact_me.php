<?php
 
var_dump($_POST);


require_once '../vendor/autoload.php';
 
use Project\FormHandler;
$adminEmail = 'txt79747@zccck.com';
$data = json_decode(file_get_contents('php://input'), true);
$formHandler = new FormHandler($adminEmail, $data);
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