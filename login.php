<?php

session_start();

if(isset($_POST['login'])){

$user = $_POST['username'];
$pass = $_POST['password'];

if($user=="admin" && $pass=="1234"){

$_SESSION['crm_login']=true;

header("Location: /wordpress");

exit;

}else{

$error = "Wrong Login";

}

}

?>

<link rel="stylesheet" href="style.css">

<div class="login-box">

<h1>CRM LOGIN</h1>

<?php if(isset($error)) echo $error; ?>

<form method="POST">

<input name="username" placeholder="Username">

<input type="password" name="password" placeholder="Password">

<button name="login">LOGIN</button>

</form>

</div>