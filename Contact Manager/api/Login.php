<?php

	$inData = getRequestInfo();

    $conn = new mysqli("localhost", "root", "26382523Pb", "contact_manager");

    // Error checking
    if($conn->connect_error){
        
        echo("\nFailed to connect to mySQL server.");

    }else{
        
        echo("\nSucceeded to connect to mySQL server.");
    
        // Prepare the stored procedure call
        $stmt = $conn->prepare("CALL log_on(?, ?)");

        // Bind the input variables to the placeholders
        $param1 = $inData["userName"];
        $param2 = $inData["password"];

        $stmt->bind_param("ss", $param1, $param2);

        // Execute the prepared statement
        $stmt->execute();

		// Error checking
        if(!$stmt){
            exit();
        }else{
            $success = "\nUser logged on.";
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