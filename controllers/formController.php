<?php

if(file_exists('libs/'.$_GET["controller"].'.php')){
	require 'libs/'.$_GET["controller"].'.php';
}

?>