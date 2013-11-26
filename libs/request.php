<?php
require 'validation.php';
$val = new Validation();

$valid = $val->contactVal($_POST['email'],$_POST['phone']);

	if($valid == "true"){

		$to = 'adam.gedney@gmail.com';
		$subject = 'Adamgedney.com Contact Form';

		$header  = 'MIME-Version: 1.0' . "\r\n";
		$header .= "Reply-To: adam@adamgedney.com\r\n";
		$header .= "Return-Path: adam@adamgedney.com\r\n";
		$header .= 'From: ' . $_POST['name'] . ' <'.$_POST['email'].'>' . "\r\n";
		$header .=  'Cc: ' . $_POST['email'];

		$message = 'From: '.$_POST['name']."\r\n".'Email: '.$_POST['email']."\r\n".'Phone: '.$_POST['phone']."\r\n \r\n" .  $_POST['message'];

		// $message = wordwrap($_POST['message'], 70, "\r\n");

		//email me the message from the form
		$success = mail($to,$subject,$message,$header);

		if($success){
			header('location: index.php');
		}
	}else{

		echo $valid;
	}// /pvalid
?>