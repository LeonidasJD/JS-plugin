<?php
/*
Plugin name: JS-plugin
Description: Myu first js plugin
Version: 1.0
By: Milan
*/

class myJsPlugin
{
    //PHP FAJ U KOME SMO REGISTROVALI BLOK ZA GUTENBERG I IMPORTOVALI JS FAJL U KOME KREIRAMO NAS BLOK
    function __construct()
    {
        add_action('init', array($this, 'importJS')); //kreiramo add action funkciju u kojoj kreiramo funkciju za importovanje JS fajla 
    }

    function importJS()
    {
        wp_register_script('myJsScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        //imorpotujemo JS u php fajl kako bi ih povezali 
        //1.argument proizvoljni naziv nase skirpte
        //2.argument jeste putanja do naseg js fajla
        //3. argument jeste dependency ili biblioteka, kao sto smo za temu koristili jquery ovde koristimo wp-blocks


        register_block_type(
            "ourplugin/are-you-paying-attention", //naziv bloka koji koristimo i u js fajlu
            array(
                "editor_script" => "myJsScript",
                // skripta koja se koristi za kreiranje bloka
                "render_callback" => array($this, "saveHTML") //html koji je zapravo SAVE tj ono sto ispisujemo u frontu
            )
        ); // funckija za registraciju bloka ili widgeta za gutenberg
        //1.argument jeste nazvi naseg bloka koji upisujemo u JS fajl unutar "wp.blocks.registerBlockType("ourplugin/are-you-paying-attention" "
        //2.argument jeste niz opcija
    }

    function saveHTML($attributes)
    {
        return " <p>Today sky is" . $attributes['skyColor'] . "and grass is " . $attributes['grassColor'] . "</p>";
        //funkcija koja nam ispisuje vrednosti iz bloka na front naseg posta umesto save metode koju smo kreirali u js fajlu
    }
}

$myJsPlugin = new myJsPlugin();

?>