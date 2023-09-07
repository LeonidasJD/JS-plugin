<?php
/*
Plugin name: JS-plugin
Description: Myu first js plugin
Version: 1.0
By: Milan
*/

class myJsPlugin
{

    function __construct()
    {
        add_action('enqueue_block_editor_assets', array($this, 'importJS')); //kreiramo add action funkciju u kojoj kreiramo funkciju za importovanje JS fajla 
    }

    function importJS()
    {
        wp_enqueue_script('myJsScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        //imorpotujemo JS u php fajl kako bi ih povezali 
        //1.argument proizvoljni naziv nase skirpte
        //2.argument jeste putanja do naseg js fajla
        //3. argument jeste dependency ili biblioteka, kao sto smo za temu koristili jquery ovde koristimo wp-blocks
    }
}

$myJsPlugin = new myJsPlugin();

?>