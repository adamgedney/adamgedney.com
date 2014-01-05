<?php
//©2013 MadServ
//all rights reserved
//version 1.1
//
//
//This file is a model file. It handles the get requests and return data
//from the MadServ API for user authentication requests.
//
//You only need to edit your key and app id. Everything else has been handled for you.
//Happy Sailing!


//=======================================Edit This===================================
//Just replace the key and app id with the ones 
//you received when you registered with MadServ
$key = '58c712713bda048ac50e20e99ed9111c';
$app_id = 'df91512a';




//=============================Don't edit anything below here========================

//built url, properly formatted for API
$url = 'http://localhost:8887/ASL/index.php';
$url .= '/api_request/validate_client/';
$url .= $key;
$url .= "/";
$url .= $app_id;

// 1. makes a REQUEST to the API to authenticate your app
$request = file_get_contents($url);

// 2. decodes the JSON REPLY from the API for use
$decoded = json_decode(stripslashes($request), TRUE);

$apiSecret = $decoded['secret'];
$redirectURL = $decoded['redirect'];

//hashes your key & app_id to build your secret
//for API identification verification
$appSecret = md5($key);
$appSecret .= md5($app_id);


// 3. checks secret key to be sure response was from the API
//and not from some evil hacker named Mike
if($apiSecret == $appSecret){

	// 4. upon success, the user is redirected to the API for authentication
	header("Location: " . $redirectURL . "/" . $app_id);

}else{
	if(!$decoded){ 
		$r = "NULL. Get from API failed.";
	}else{
		$r = " Secrets don't match. Beware! Someone may be trying to impersonate the MadServ API.";
	}

	echo "Server response: " . $r;
}