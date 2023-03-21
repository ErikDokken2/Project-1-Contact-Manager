<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {
     //after loging in this is where the main page will be (Contact Manager)
     header("Location: Main Page/index.html");
 ?>

<?php 
}
else{
     header("Location: index.php");
     exit();
}
 ?>