<?php


	// include
	require 'config.php';

	// add new stuff
	$id = $database->insert('items', [
		'text' => $_POST['message']
	]);

	if($id) {
		die('success');
	}