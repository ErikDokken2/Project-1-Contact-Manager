<?php
$connect = mysqli_connect("localhost", "root", "", "test_db");
if(isset($_POST["id"]))
{
 $query = "DELETE FROM register WHERE id = '".$_POST["id"]."'";
 if(mysqli_query($connect, $query))
 {
  echo 'Data Deleted';
 }
}
?>