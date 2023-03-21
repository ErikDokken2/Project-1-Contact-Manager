<?php 
session_start(); 
include "db_conn.php";

if (isset($_POST['user_id']) && isset($_POST['key_password'])
    && isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['re_password'])) {

	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$user_id = validate($_POST['user_id']);
	$key_password = validate($_POST['key_password']);
	$re_password = validate($_POST['re_password']);
	$first_name = validate($_POST['first_name']);
	$last_name = validate($_POST['last_name']);

	$user_data = 'user_id='. $user_id. '&first_name='. $first_name. '&last_name='. $last_name;

	//Checks if the code imput is empty if so sends an error
	if (empty($user_id)) {
		header("Location: signup.php?error=User Name is required&$user_id");
	    exit();
	}else if(empty($key_password)){
        header("Location: signup.php?error=Password is required&$user_data");
	    exit();
	}
	else if(empty($re_password)){
        header("Location: signup.php?error=Re Password is required&$user_data");
	    exit();
	}

	else if(empty($first_name)){
        header("Location: signup.php?error=firstname is required&$user_data");
	    exit();
	}

	else if(empty($last_name)){
        header("Location: signup.php?error=last_name is required&$user_data");
	    exit();
	}
	else if($key_password !== $re_password){
        header("Location: signup.php?error=The confirmation password  does not match&$user_data");
	    exit();
	}

	else{

		//More Errors

		//hashing the password for user security!
        $key_password = md5($key_password);

	    $sql = "SELECT * FROM user_register WHERE user_id='$user_id' ";

		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) > 0) {
			header("Location: signup.php?error=The username is taken try another&$user_data");
	        exit();
		}else {
           $sql2 = "INSERT INTO user_register(user_id, key_password, first_name, last_name) VALUES('$user_id', '$key_password', '$first_name','$last_name')";
           $result2 = mysqli_query($conn, $sql2);
           if ($result2) {
           	 header("Location: signup.php?success=Your account has been created successfully");
	         exit();
           }else {
	           	header("Location: signup.php?error=unknown error occurred&$user_data");
		        exit();
           }
		}
	}
	
}else{
	header("Location: signup.php");
	exit();
}