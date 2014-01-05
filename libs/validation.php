<?php
class Validation{

	public function contactVal($email,$phone){

		$emailPat = "/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/"; // standard email validation
		$phonePat = "/^[2-9]\d{2}-\d{3}-\d{4}$/"; //845-216-5030 

		if(!preg_match($emailPat, $email)){
			return "Email Invalid";
		}else if(!preg_match($phonePat, $phone)){
			return "Phone Number Invalid";
		}else{
			return "true";
		}
	}// /contactVal

}// Class
?>