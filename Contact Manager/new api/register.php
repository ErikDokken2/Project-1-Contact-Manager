<?php

    echo("Beggining run to collect list of all users\n");
    date_default_timezone_set('US/Eastern');
    $time = date('Y-m-d H:i:s');
    echo($time);

    $conn = new mysqli("localhost", "root", "26382523Pb", "COP4331");

    // Error checking
    if($conn->connect_error){
        
        echo("\nFailed to connect to mySQL server. \n");

    }else{
        
        echo("\nSucceeded to connect to mySQL server. \n");
    
        // Prepare the stored procedure call
        $stmt = $conn->prepare("CALL create_user(?, ?, ?, ?)");

        // Bind the input variables to the placeholders
        $param1 = "dakota2024";# Username
        $param2 = "passwordpassword";# Password
        $param3 = "dakota1";# First Name
        $param4 = "minnema1";#Last Name

        $stmt->bind_param("ssss", $param1, $param2, $param3, $param4);

        // Execute the prepared statement
        $stmt->execute();

        if(!$stmt){
            
            echo "Error executing query";
            exit();

        }else{
            
            $success = "\nUser created. \n";
            
            echo($success);
        }

        // Close the statement and the database connection
        $stmt->close();
        $conn->close();
    }

    // Error checking
    if($error == NULL && $success != NULL){

        $status = "\nEverything went right. \n";

    }elseif($error != NULL && $success != NULL){

        $status = "\nSomething went right and something went wrong. \n";

    }else{

        $status = "\nEverything went wrong. \n";
    }

    echo($status);
?>