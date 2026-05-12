<?php

session_start();

if(!isset($_SESSION['crm_login'])){

header("Location: /wordpress/wp-content/themes/crm-pro-ultra/login.php");

exit;

}


get_header();

?>

<div class="wrapper">

<?php get_sidebar(); ?>

<div class="main">

<div class="topbar">

<h1>CRM Dashboard</h1>

<button>+ Add Client</button>

</div>

<div class="cards">

<div class="card blue">
<h2>Total Clients</h2>
<h1>350</h1>
</div>

<div class="card green">
<h2>Revenue</h2>
<h1>$24K</h1>
</div>

<div class="card orange">
<h2>Projects</h2>
<h1>18</h1>
</div>

<div class="card red">
<h2>Tasks</h2>
<h1>42</h1>
</div>

</div>

<table class="table">

<tr>
<th>Client</th>
<th>Email</th>
<th>Status</th>
<th>Project</th>
</tr>

<tr>
<td>John Smith</td>
<td>john@email.com</td>
<td>
<span class="status active">Active</span>
</td>
<td>Website</td>
</tr>

<tr>
<td>Sarah Doe</td>
<td>sarah@email.com</td>
<td>
<span class="status lead">Lead</span>
</td>
<td>Marketing</td>
</tr>

<tr>
<td>Mike Ross</td>
<td>mike@email.com</td>
<td>
<span class="status inactive">Inactive</span>
</td>
<td>CRM System</td>
</tr>

</table>

</div>

</div>

<?php get_footer(); ?>