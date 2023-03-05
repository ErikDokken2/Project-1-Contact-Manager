<?php

    $inData = getRequestInfo();

    $conn = new mysqli("localhost", "root", "26382523Pb", "COP4331");

    // Error checking
    if($conn->connect_error){
        
        // If failed, exit
        exit();

    }else{
    
        // Prepare the stored procedure call
        $stmt = $conn->prepare("CALL delete_user(?, ?)");

        //  Bind the input variables to the placeholders
        //  These will be for actual use
        $param1 = $inData["userId"];
        $param2 = $inData["password"];


        //  Bind the input variables to the placeholders
        //  These will be for testing use
        //  $param1 = "ExampleUserName"; # Username
        //  $param2 = "ExamplePassword"; # Password

        $stmt->bind_param("ss", $param1, $param2);

        // Execute the prepared statement
        $stmt->execute();

        // Error checking
        if(!$stmt){

            // If failed, exit
            exit();

        }

        // Close the statement and the database connection
        $stmt->close();
        $conn->close();
    }

?>