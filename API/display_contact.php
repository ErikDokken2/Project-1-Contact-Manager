<?php
	$inData = getRequestInfo();

	// Get the data from frontend and store the inputs here
	$search = trim($inData["search"]);

	// Keeps track of the resultArray index
	$searchCount = 0;
	$searchResults = "";

    // Connect to the database
	$conn = new mysqli("localhost", "root", "26382523Pb", "databaseTemp");
	if ($conn->connect_error)
	{
		returnWithError($conn->connect_error );
	}
	else
	{
		// Find contact using their first name or last name (must match their userId)
		$query = "SELECT * FROM contacts where userId = ?";
		// Prepare the query
		$stmt = $conn->prepare($query);
		$stmt->bind_param("i",$inData["userId"]);
		// Run the query
        $stmt->execute();

        // Gets the result form the query
		$result = $stmt->get_result();
		while($row = $result->fetch_assoc())
		{
			if ($searchCount > 0) 
			{
				$searchResults .= ",";
			}
			// Increment search count
			$searchCount++;
			// Add each query into a 2d array to be shown to the user
			//$searchResults .= '"' . $row["firstName"] . ' '. $row["lastName"] . ', '.'PhoneNumber: '. $row["phoneNumber"] .', '. 'Email: '. $row["email"]. '"';
			$searchResults .= json_encode($row);
		}
        
        // No records found
		if( $searchCount == 0 )
		{
			returnWithError("No Records Found" );
		}
        // Show the results
		else
		{
			returnWithInfo($searchResults);
		}

        // Close the database connection
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

	function returnWithInfo( $searchResults )
	{
		$retValue = '{"results":[' . $searchResults . '],"error":""}';
		sendResultInfoAsJson( $retValue );
	}
?>