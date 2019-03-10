<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$id = strip_tags(htmlspecialchars($_POST['id']));
$loc = strip_tags(htmlspecialchars($_POST['loc']));
$emp_num = strip_tags(htmlspecialchars($_POST['emp_num']));
$note = strip_tags(htmlspecialchars($_POST['note']));

// Create the email and send the message
$to = "kalaay1111@gmail.com"; // Add your email address inbetween the "" replacing yourname@yourdomain.com - This is where the form will send a message to.
$subject = "Plant Saviour Report:  $id";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nPhone: $phone\n\nMessage:\n$message";
$header = "From: noreply@plantsaviour.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
