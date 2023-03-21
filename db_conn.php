<?php
//database handler
$sname= "localhost";
$uname= "root";
$password = "26382523Pb";
$db_name = "contact_manager";

$conn = new mysqli($sname, $uname, $password, $db_name);

// Will show an error if unable to connect to the database
if($conn->connect_error){
	echo("\nFailed to connect to mySQL server. \n");
}