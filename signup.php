<!DOCTYPE html>
<html>
<head>
	<title>SIGN UP</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
     <form action="signup-check.php" method="post">
     	<h2>SIGN UP</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>

          <?php if (isset($_GET['success'])) { ?>
               <p class="success"><?php echo $_GET['success']; ?></p>
          <?php } ?>

          <label>First Name</label>
          <?php if (isset($_GET['first_name'])) { ?>
               <input type="text" 
                    name="first_name" 
                    placeholder="firstname"
                    value="<?php echo $_GET['first_name']; ?>"><br>
          <?php }else{ ?>
               <input type="text" name="first_name" placeholder="First Name"><br>
          <?php }?>

          <label>Last Name</label>
          <?php if (isset($_GET['last_name'])) { ?>
               <input type="text" 
                    name="last_name" 
                    placeholder="lastname"
                    value="<?php echo $_GET['last_name']; ?>"><br>
          <?php }else{ ?>
               <input type="text" name="last_name" placeholder="Last Name"><br>
          <?php }?>

          <label>User Name</label>
          <?php if (isset($_GET['user_id'])) { ?>
               <input type="text" 
                      name="user_id" 
                      placeholder="User Name"
                      value="<?php echo $_GET['user_id']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="user_id" 
                      placeholder="Username"><br>
          <?php }?>


     	<label>Password</label>
     	<input type="password" 
                 name="key_password" 
                 placeholder="Password"><br>

          <label>Re Password</label>
          <input type="password" 
                 name="re_password" 
                 placeholder="Re_Password"><br>

     	<button type="submit">Sign Up</button>
          <a href="index.php" class="ca">Already have an account?</a>
     </form>
</body>
</html>