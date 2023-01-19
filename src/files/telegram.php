<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "5459721711:AAGSkD0UpSky6aa4zzS3pTYtQ8KZREuSyHA";
$chat_id = "-1001573806104";
$arr = array(
  'Ваше имя: ' => $name,
  'Ваш телефон: ' => $phone,
  'Почта:' => $email,
  'Комментарий:' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  return false;
} else {
  return true;
}
?>
