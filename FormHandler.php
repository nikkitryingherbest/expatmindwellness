<?php
namespace App;

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include the PHPMailer classes
require 'vendor/autoload.php';

class FormHandler
{
    private $adminEmail;
    private $data;
    private $errors = [];

    public function __construct($adminEmail, $data)
    {
        $this->adminEmail = $adminEmail;
        $this->data = $data;
    }

    public function validate()
    {
        $this->validateName();
        $this->validateEmail();
        $this->validateMessage();
        return empty($this->errors);
    }

    private function validateName()
    {
        if (empty($this->data['name'])) {
            $this->errors['name'] = 'Name is required.';
        }
    }

    private function validateEmail()
    {
        if (empty($this->data['email'])) {
            $this->errors['email'] = 'Email is required.';
        } elseif (!filter_var($this->data['email'], FILTER_VALIDATE_EMAIL)) {
            $this->errors['email'] = 'Email is not valid.';
        }
    }

    private function validateMessage()
    {
        if (empty($this->data['message'])) {
            $this->errors['message'] = 'Message is required.';
        }
    }

    public function getErrors()
    {
        return $this->errors;
    }

    public function sendEmail()
    {
        $mail = new PHPMailer(true); // Create a new PHPMailer instance

        try {
            // Server settings
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = '';                 // SMTP username (your Gmail address)
            $mail->Password   = '';                    // SMTP password (your Gmail app password)
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 465;                                    // TCP port to connect to (Gmail's port)

            // Recipients
            $mail->setFrom($this->data['email'], $this->data['name']); // Set sender of the email
            $mail->addAddress($this->adminEmail);                       // Add a recipient (your admin email)

            // Content
            $mail->isHTML(false);                                       // Set email format to plain text
            $mail->Subject = 'New Contact Form Submission';
            $mail->Body    = "Name: " . htmlspecialchars($this->data['name']) . "\n" .
                             "Email: " . htmlspecialchars($this->data['email']) . "\n" .
                             "Message: " . htmlspecialchars($this->data['message']) . "\n";

            // Send the email
            $mail->send();

            return true;

        } catch (Exception $e) {
            // Log the error or handle it
            file_put_contents('//log//' . time() . 'error.log', $mail->ErrorInfo);
            return false;
        }
    }
}
