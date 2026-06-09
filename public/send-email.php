<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$company = trim($input['company'] ?? '');
$message = trim($input['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, email, and message are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

$to = 'info@venturispartners.com';
$subject = 'New Contact Form Message - Venturis Partners';

$body = "
<html>
<body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">
    <h2 style=\"color: #af693f;\">New Contact Form Submission</h2>
    <table style=\"border-collapse: collapse; width: 100%; max-width: 600px;\">
        <tr>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 600; width: 120px;\">Name</td>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee;\">$name</td>
        </tr>
        <tr>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 600;\">Email</td>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee;\">$email</td>
        </tr>
        " . ($phone ? "
        <tr>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 600;\">Phone</td>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee;\">$phone</td>
        </tr>" : "") . "
        " . ($company ? "
        <tr>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 600;\">Company</td>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee;\">$company</td>
        </tr>" : "") . "
        <tr>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;\">Message</td>
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee;\">" . nl2br(htmlspecialchars($message)) . "</td>
        </tr>
    </table>
    <p style=\"margin-top: 24px; font-size: 13px; color: #888;\">Sent from venturispartners.com contact form</p>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you! We will get back to you within 24 hours.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}
