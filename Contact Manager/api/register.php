<?php

	$inData = getRequestInfo();

    $conn = new mysqli("localhost", "root", "26382523Pb", "contact_manager");

    // Error checking
    if($conn->connect_error){
        
        echo("\nFailed to connect to mySQL server.");

    }else{
        
        echo("\nSucceeded to connect to mySQL server.");
    
        // Prepare the stored procedure call
        $stmt = $conn->prepare("CALL create_user(?, ?, ?, ?)");

        // Bind the input variables to the placeholders
        $param1 = $inData["userName"];
        $param2 = $inData["password"];
        $param3 = $inData["firstName"];
        $param4 = $inData["lastName"];

        $stmt->bind_param("ssss", $param1, $param2, $param3, $param4);

        // Execute the prepared statement
        $stmt->execute();

		// Error checking
        if(!$stmt){
            exit();
        }else{
            $success = "\nUser created.";
        }

        // Close the statement and the database connection
        $stmt->close();
        $conn->close();
    }

    // Conditional Error checking
    if($error == NULL && $success != NULL){
        $status = "No Errors, all Successes.";
    }elseif($error == NULL && $success == NULL){
        $status = "No Errors or Successes";
    }elseif($error != NULL && $success != NULL){
        $status = "Somehow Errors and Successes.";
    }else{
		$status = "Straight Errors.";
	}

    echo($status);
?>