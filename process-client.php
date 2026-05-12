<?php
session_start();
if(!isset($_SESSION['crm_login'])){ exit; }

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['client_name'];
    $email = $_POST['client_email'];
    $status = $_POST['status'];
    $project = $_POST['project'];

    // Këtu mund të përdorësh wpdb për t'i futur në database:
    // global $wpdb;
    // $wpdb->insert('wp_crm_clients', array('name' => $name, ...));

    // Ose për test, kthehu te dashboard
    header("Location: index.php?success=1");
}