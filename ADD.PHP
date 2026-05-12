<?php
/* Template Name: Add Client */
get_header(); 
?>

<div class="wrapper">
    <div class="form-container">
        <h2>Shto Klient të Ri</h2>
        <form action="process-client.php" method="POST" class="crm-form">
            <div class="input-group">
                <label>Emri i Klientit</label>
                <input type="text" name="client_name" required placeholder="Psh. Filan Fisteku">
            </div>
            
            <div class="input-group">
                <label>Email Adresa</label>
                <input type="email" name="client_email" required placeholder="email@shembull.com">
            </div>

            <div class="input-group">
                <label>Statusi</label>
                <select name="status">
                    <option value="Active">Active</option>
                    <option value="Lead">Lead</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>

            <div class="input-group">
                <label>Projekti</label>
                <input type="text" name="project" placeholder="Emri i projektit">
            </div>

            <button type="submit" class="btn-save">Ruaj Klientin</button>
            <a href="index.php" class="btn-back">Anulo</a>
        </form>
    </div>
</div>

<?php get_footer(); ?>