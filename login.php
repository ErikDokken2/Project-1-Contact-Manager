<?php 
session_start(); 
include "db_conn.php";

if (isset($_POST['user_id']) && isset($_POST['key_password'])) {
	//validates data
	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$user_id = validate($_POST['user_id']);
	$pass = validate($_POST['key_password']);

	//checks if login input is empty if so then it prints out an error
	if (empty($user_id)) {
		header("Location: index.php?error= Username is required");
	    exit();
	}else if(empty($pass)){
        header("Location: index.php?error=Password is required");
	    exit();
	}else{
		// hashing the key_password
        $pass = md5($pass);

        
		$sql = "SELECT * FROM user_register WHERE user_id='$user_id' AND key_password='$pass'";


		//preforms a query on the database
		$result = mysqli_query($conn, $sql);

		//if the query finds the data it gets the follwing data
		if (mysqli_num_rows($result) === 1) {
			$row = mysqli_fetch_assoc($result);
            if ($row['user_id'] === $user_id && $row['key_password'] === $pass) {
            	$_SESSION['user_id'] = $row['user_id'];
            	$_SESSION['firstname'] = $row['firstname'];
				$_SESSION['lastname'] = $row['lastname'];
            	header("Location: home.php");
		        exit();
            }else{
				header("Location: index.php?error=Incorect User name or key_password");
		        exit();
			}
		}else{
			header("Location: index.php?error=Incorect User name or key_password");
	        exit();
		}
	}
	
}else{
	header("Location: index.php");
	exit();
}