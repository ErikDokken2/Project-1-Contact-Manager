<?php
//database handler
$sname= "localhost";
$unmae= "root";
$password = "";

$db_name = "test_db";
$conn = mysqli_connect($sname, $unmae, $password, $db_name);

// Will show an error if unable to connect to the database
if($conn->connect_error){
	echo("\nFailed to connect to mySQL server. \n");
}