<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

function add_user($username, $password){
	$firstname = '';
	$lastname = '';

	$conn = new mysqli("localhost", "root", "26382523Pb", "contact_manager");

	if($conn->connect_error){
		echo("\nFailed to connect to mySQL server. \n");
	}

	else{
		$stmt = $conn->prepare("Call create_user(?, ?, ?, ?)");

		$stmt->bind_param("ssss", $username, $password, $firstname, $lastname);

		$stmt->execute();

		if(!$stmt){
			echo("\nError executing query");
			exit();
		}
		else{
			$success = "User created\n";
			echo($success);
		}

		$stmt->close();
	}
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {


	$username = $_POST['userName'];
	$password = $_POST['password'];

	add_user($username, $password);

}

else {
	echo("\nError getting input\n");	
}


?>
