<?php 
// normally would not be in public folder, but for showcasing reason it is included

require_once "input.php";
require_once "log.php";
class Auth{

//hashed password 
public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';

//takes input of username and password and if correct logs user in and starts session
public static function attempt($username,$password)
{
	if(password_verify($password,self::$password) && $username){
		$_SESSION['LOGGED_IN_USER'] = $username;
		header('Location: authorized.php');
		exit();
		echo "$username has logged in successfully";
		}else{
			echo "$username login failed";
		}

	}
//checks if user is logged in and logs message depending in they are logged in or not
public static function check()
{	
		if (!empty(Input::has('username'))) {
			$message =  "is logged in";
			Log::info($message);
		}else{
			$message =  "is not logged in";
			Log::error($message);
		}
}

// returns the username of the user logged in
public static function user()
{
	return Input::has('username');

}	

//logs out user by ending session and redirects to login page 
public static function logout()
{

$_SESSION = array();
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    session_destroy();

header('location: login.php');
}

}
