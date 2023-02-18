<?php

    echo("Beggining run to collect list of all users\n");
    date_default_timezone_set('US/Eastern');
    $time = date('Y-m-d H:i:s');
    echo($time);
    
    $inData = getRequestInfo();
    
    $user_id = $inData["userName"];
	$password = $inData["password"];
    $fullName = "";
	$email = "";

    $conn = new mysqli("localhost", "root", "26382523Pb", "contact_manager");

    if($conn->connect_error){
        
        echo("\nFailed to connect to mySQL server. \n");

    }else{
        
        echo("\nSucceeded to connect to mySQL server. \n");

        $stmt = $conn->prepare("CALL create_user(?,?,?,?)");
        $stmt->bind_param(1, $user_id); 
        $stmt->bind_param(2, $password);
        $stmt->bind_param(3, $fullName);
        $stmt->bind_param(4, $email);
        $stmt->execute();

        if(!$stmt){
            
            echo "Error executing query";
            exit();

        }else{
            
            $success = "\nUser(s) existence confirmed. \n";
            echo($success);
        }

        $stmt->close();
        $conn->close();
    }

    if($error == NULL && $success != NULL){

        $status = "\nEverything went right. \n";

    }elseif($error != NULL && $success != NULL){

        $status = "\nSomething went right and something went wrong. \n";

    }else{

        $status = "\nEverything went wrong. \n";
    }

    echo($status);
?>