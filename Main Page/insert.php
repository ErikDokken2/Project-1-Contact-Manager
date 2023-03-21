<?php
$connect = mysqli_connect("localhost", "root", "", "test_db");
if(isset($_POST["first_name"], $_POST["last_name"]))
{
 $first_name = mysqli_real_escape_string($connect, $_POST["first_name"]);
 $last_name = mysqli_real_escape_string($connect, $_POST["last_name"]);
 $nic = mysqli_real_escape_string($connect, $_POST["nic"]);
 $email = mysqli_real_escape_string($connect, $_POST["email"]);
 $home_address = mysqli_real_escape_string($connect, $_POST["home_address"]);
 $contact_num = mysqli_real_escape_string($connect, $_POST["contact_num"]);
 


 $query = "INSERT INTO register (first_name, last_name, nic, home_address, contact_num, email) VALUES('$first_name', '$last_name', '$nic', '$home_address', '$contact_num', '$email')";
 if(mysqli_query($connect, $query))
 {
  echo 'Data Inserted';
 }
}
?>