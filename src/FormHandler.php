<?php
namespace Project;
 
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
        $subject = 'New Contact Form Submission';
        $message = "Name: " . htmlspecialchars($this->data['name']) . "\n";
        $message .= "Email: " . htmlspecialchars($this->data['email']) . "\n";
        $message .= "Message: " . htmlspecialchars($this->data['message']) . "\n";

        file_put_contents('//log//' . time() . 'log.log', $message);
 
        return mail($this->adminEmail, $subject, $message, 'From: ' . $this->data['email']);
    }
}
