<?php
require_once  "Auth.php";
require_once  "input.php";

//session will start and if not logged in will return tio login.php page
session_start();
$name = $_SESSION['LOGGED_IN_USER'];
 	if($name !== "guest" && $password !== "password"){ 
 		header('Location: login.php');
	}
// runs Auth check()
Auth::check();
?>

<!DOCTYPE html>
<html>
<head>
    <title>POST Example</title>
</head>
	<body>
    	<h1><?php echo "Hello ".$name; ?></h1>
    		<h2>AUTHORIZED</h2>
   				<a href="logout.php">Log Out</a>
	</body>
</html>