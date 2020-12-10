<?php 

require 'functions.php';

	$send_subject = $_POST["subject"];
	$send_mail = $_POST["txtArea"];
	$success = mail('michal.listicka@gmail.com', $send_subject, $send_mail );
	echo '<script type="text/javascript">';
	echo ' alert("JavaScript Alert Box by PHP")';  //not showing an alert box.
	echo '</script>';

	header("Location: $base_url");

	if (!$success) {
			$errorMessage = error_get_last()['message'];
		}
	
