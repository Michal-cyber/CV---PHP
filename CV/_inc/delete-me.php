


<?php

include_once "_partials/header.php";

require_once 'config.php';


    //find $id
    $id = $_GET['id'] - 1;


	//create "storage" if no exists
    $file = 'storage';
	mk_file( $file );


	//read and decode
	$data = file_get_contents( $file );
    $data = json_decode( $data );

    //decode
    $data = json_decode(json_encode($data), true);

    //delete ID array
    unset($data[$id]);

    //code
    $data = json_decode(json_encode($data), FALSE);

    //write new array
    file_put_contents( $file, json_encode( $data ) );



    //redirect
    header('Location:'.$_SERVER['HTTP_REFERER']);
    die();








?>