<?php

if(isset($_GET["controller"])){

	if(file_exists('libs/'.$_GET["controller"].'.php')){
		require 'libs/'.$_GET["controller"].'.php';
	}// /file_exists
} // /isset