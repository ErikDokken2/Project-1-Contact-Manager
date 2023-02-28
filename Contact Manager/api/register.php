<?php

    $inData = getRequestInfo();

    $conn = new mysqli("localhost", "root", "26382523Pb", "contact_manager");

    // Error checking
    if($conn->connect_error){
        
        exit();

    }else{
        
        // Prepare the stored procedure call
        $stmt = $conn->prepare("CALL create_user(?, ?, ?, ?)");

        //  Bind the input variables to the placeholders
        //  These will be for actual use
        $param2 = $inData->firstName;
        $param3 = $inData->lastName;
        $param1 = $inData->userId;
        $param4 = $inData->password;

        //  Bind the input variables to the placeholders
        //  These will be for temporary use
        //  $param1 = "dakota2024";# Username
        //  $param2 = "passwordpassword";# Password
        //  $param3 = "dakota1";# First Name
        //  $param4 = "minnema1";#Last Name

        $stmt->bind_param("ssss", $param1, $param2, $param3, $param4);

        // Execute the prepared statement
        $stmt->execute();

        if(!$stmt){
            
            exit();

        }

        // Close the statement and the database connection
        $stmt->close();
        $conn->close();
    }

    function getRequestInfo(){

		return json_decode(file_get_contents('php://input'), true);
	}
?>