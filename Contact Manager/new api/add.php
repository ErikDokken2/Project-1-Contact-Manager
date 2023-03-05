<?php

    $inData = getRequestInfo();

    $conn = new mysqli("localhost", "root", "26382523Pb", "contact_manager");

    // Error checking
    if($conn->connect_error){
        
        // If failed, exit
        exit();

    }else{
        
        // Prepare the stored procedure call
        $stmt = $conn->prepare("CALL create_contact(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

        //  Bind the input variables to the placeholders
        //  These will be for actual use
        //  $param1 = $inData["userId"];
        //  $param2 = $inData["firstName"];
        //  $param3 = $inData["lastName"];
        //  $param4 = $inData["phone"];
        //  $param5 = $inData["email"];
        //  $param6 = $inData["bday"];
        //  $param7 = $inData["street"];
        //  $param8 = $inData["town"];
        //  $param9 = $inData["state"];
        //  $param0 = $inData["zip"];

        $param1 = "ExampleUserName";
        $param2 = "firstname";
        $param3 = "lastname";
        $param4 = 1234567890;
        $param5 = "first.last@email.com";
        $param6 = "2000-12-31";
        $param7 = "street";
        $param8 = "city";
        $param9 = "state";
        $param0 = 00000;

        $stmt->bind_param("sssisssssi", $param1, $param2, $param3, $param4, $param5, $param6, $param7, $param8, $param9, $param0);

        // Execute the prepared statement
        $stmt->execute();

        if(!$stmt){
            
            // If failed, exit
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