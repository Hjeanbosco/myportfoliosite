<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $receiving_email_address = 'hatejeanbosco2@gmail.com'; // Replace with your email address
    $from_name = $_POST['name'];
    $from_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Basic validation (you should implement more robust validation)
    if (empty($from_name) || empty($from_email) || empty($message)) {
        echo "Please fill in all required fields.";
        exit;
    }

    $headers = "From: $from_name <$from_email>";
    $sent = mail($receiving_email_address, $subject, $message, $headers);

    if ($sent) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Form not submitted.";
}
?>
