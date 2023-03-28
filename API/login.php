<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

function login_user($username, $password){

	$conn = new mysqli("localhost", "root", "26382523Pb", "contact_manager");

	if($conn->connect_error){
		echo("\nFailed to connect to mySQL server. \n");
	}

	else{

		$stmt = $conn->prepare("Call log_on(?, ?)");

		$stmt->bind_param("ss", $username, $password);

		$stmt->execute();

		if(!$stmt){
			echo("\nError executing query");
			exit();
		}
		else{
			$success = "User logged in\n";
			echo($success);
		}

		$stmt->close();
	}

}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	$username = $_POST['userName'];
	$password = $_POST['password'];

	$result = login_user($username, $password);

	echo json_encode(array('success' => $result));	
}

else {
	echo("\nError grabbing inputted data\n");
}

?>
