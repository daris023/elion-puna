<?php
session_start();
include "db.php";

if (!isset($_SESSION['user_id'])) {
  echo "login_required";
  exit;
}

$user_id = $_SESSION['user_id'];
$type = $_POST['type'];
$location = $_POST['location'];
$price = $_POST['price'];

$sql = "INSERT INTO orders (user_id, ad_type, location, price)
VALUES ('$user_id', '$type', '$location', '$price')";

if ($conn->query($sql)) {
  echo "order_success";
} else {
  echo "error";
}
?>