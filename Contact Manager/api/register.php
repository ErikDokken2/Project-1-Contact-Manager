<?php
	$inData = getRequestInfo();
	// Get the inputs from the input field
	$firstName = $inData["firstName"];
	$fullName = $inData["lastName"];
	$userName = $inData["userName"];
	$password = $inData["password"];

    // Establish a connection from the database
	$conn = new mysqli("localhost", "root", "26382523Pb", "contact_manager");

    // Check for errors, if there are error, alert the user
	if ($conn->connect_error)
	{
		returnWithError($conn->connect_error );
	}
	else
	{
		// Will run a query finding all the matching usernames
		$stmt = $conn->prepare("SELECT userName FROM users WHERE userName = ?");
		$stmt->bind_param("s", $userName);
		$stmt->execute();
		$result = $stmt->get_result();

		// Check if the username already exist then alert the user
		if (mysqli_num_rows($result) > 0)
		{
			returnWithError("Username already exists!");
		}
		else
		{
			// If the previous statement passed, then add the user to the database
            $sqlInsert = "INSERT into users (fullName, userName, password) VALUES (?,?,?)";
			$stmt = $conn->prepare($sqlInsert);
			$stmt->bind_param("sss", $fullName, $userName, $password);
			$stmt->execute();

			returnWithError("");
		}

		$stmt->close();
		$conn->close();
	}

	function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}

	function returnWithError( $err )
	{
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
?>