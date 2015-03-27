<?php 
require_once "Auth.php";
require_once "input.php";

// start the session (or resume an existing one)
// this function must be called before trying to set of get any session data!
session_start();
$session_id = session_id();
$message = '';

	//runs Auth attempt()
	Auth::attempt(Input::get('username'),Input::get('password'));
?>

<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
	<body>


<form method="POST" action = "login.php">

	<!-- will take in username and pass it to Auth attempt() -->
	<label for="username">Username</label>
		<input type = "text" name = "username">
			<br>
	<!-- will take in password and pass it to Auth attempt() -->
	<label for="password">Password</label>
		<input type = "password" name = "password">
			<br>
	<!-- submit the form  -->
	<input type="submit">

</form>
	</body>
</html>