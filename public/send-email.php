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

$type = trim($input['type'] ?? 'contact');

// --- Career form ---
if ($type === 'career') {
    $to = 'careers@venturispartners.com';
    $subject = 'New Job Application - Venturis Partners';

    $fullName = htmlspecialchars(trim($input['fullName'] ?? ''));
    $email = trim($input['email'] ?? '');
    $phone = htmlspecialchars(trim($input['phone'] ?? ''));
    $address = htmlspecialchars(trim($input['address'] ?? ''));
    $position = htmlspecialchars(trim($input['position'] ?? ''));
    $division = htmlspecialchars(trim($input['division'] ?? ''));
    $employmentType = htmlspecialchars(trim($input['employmentType'] ?? ''));
    $startDate = htmlspecialchars(trim($input['startDate'] ?? ''));
    $experience = htmlspecialchars(trim($input['experience'] ?? ''));
    $currentCompany = htmlspecialchars(trim($input['currentCompany'] ?? ''));
    $currentRole = htmlspecialchars(trim($input['currentRole'] ?? ''));
    $qualification = htmlspecialchars(trim($input['qualification'] ?? ''));
    $fieldOfStudy = htmlspecialchars(trim($input['fieldOfStudy'] ?? ''));
    $institution = htmlspecialchars(trim($input['institution'] ?? ''));
    $linkedinUrl = htmlspecialchars(trim($input['linkedinUrl'] ?? ''));
    $portfolioUrl = htmlspecialchars(trim($input['portfolioUrl'] ?? ''));
    $coverLetter = htmlspecialchars(trim($input['coverLetter'] ?? ''));
    $hearAbout = htmlspecialchars(trim($input['hearAbout'] ?? ''));
    $resumeFileName = htmlspecialchars(trim($input['resumeFileName'] ?? ''));
    $resumeData = $input['resumeData'] ?? '';

    if (!$fullName || !$email) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Name and email are required.']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
        exit;
    }

    $rows = '';
    $fields = [
        'Full Name' => $fullName,
        'Email' => $email,
        'Phone' => $phone,
        'Address' => $address,
        'Position Applying For' => $position,
        'Division / Department' => $division,
        'Employment Type' => $employmentType,
        'Available Start Date' => $startDate,
        'Years of Experience' => $experience,
        'Current / Last Company' => $currentCompany,
        'Current / Last Job Title' => $currentRole,
        'Highest Qualification' => $qualification,
        'Field of Study' => $fieldOfStudy,
        'Institution' => $institution,
        'LinkedIn Profile' => $linkedinUrl,
        'Portfolio / Website' => $portfolioUrl,
        'How did you hear about us' => $hearAbout,
    ];

    foreach ($fields as $label => $value) {
        if ($value !== '') {
            $rows .= "
            <tr>
                <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 600; width: 200px; vertical-align: top;\">$label</td>
                <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee;\">$value</td>
            </tr>";
        }
    }

    $body = "
    <html>
    <body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">
        <h2 style=\"color: #af693f;\">New Job Application</h2>
        <table style=\"border-collapse: collapse; width: 100%; max-width: 700px;\">
            $rows
        </table>";

    if ($coverLetter) {
        $body .= "
        <h3 style=\"color: #af693f; margin-top: 24px;\">Cover Letter</h3>
        <p style=\"background: #f9f9f9; padding: 16px; border-radius: 8px; border-left: 4px solid #af693f;\">" . nl2br($coverLetter) . "</p>";
    }

    if ($resumeFileName) {
        $body .= "
        <p style=\"margin-top: 16px;\"><strong>Resume:</strong> $resumeFileName</p>";
    }

    $body .= "
        <p style=\"margin-top: 24px; font-size: 13px; color: #888;\">Sent from venturispartners.com careers form</p>
    </body>
    </html>";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $fullName <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Thank you for your application! We will review it shortly.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to send application. Please try again later.']);
    }
    exit;
}

// --- Contact form ---
$name = htmlspecialchars(trim($input['name'] ?? ''));
$email = trim($input['email'] ?? '');
$phone = htmlspecialchars(trim($input['phone'] ?? ''));
$company = htmlspecialchars(trim($input['company'] ?? ''));
$message = htmlspecialchars(trim($input['message'] ?? ''));

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
            <td style=\"padding: 10px 12px; border-bottom: 1px solid #eee;\">" . nl2br($message) . "</td>
        </tr>
    </table>
    <p style=\"margin-top: 24px; font-size: 13px; color: #888;\">Sent from venturispartners.com contact form</p>
</body>
</html>";

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
