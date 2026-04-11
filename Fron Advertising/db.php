<?php
$conn = new mysqli("localhost", "root", "", "fron_db");

if ($conn->connect_error) {
  die("Connection failed");
}
?>