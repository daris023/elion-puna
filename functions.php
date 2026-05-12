<?php

function crm_assets(){

wp_enqueue_style(
'crm-style',
get_stylesheet_uri()
);

wp_enqueue_script(
'crm-js',
get_template_directory_uri().'/app.js',
[],
false,
true
);

}

add_action('wp_enqueue_scripts','crm_assets');

session_start();