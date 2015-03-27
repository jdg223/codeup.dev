<?php
require_once "Auth.php"; 
 class log{
 		public $handle = '';
 		public $filename = '';

function __construct(){}

// will open and write to filename the messgae that is inputted, then will close the file
public static function logMessage($logLevel,$message)
{
		$filename = 'log'.'-'.date("Y-m-d-s").'-'.'.log';
		$handle = fopen($filename,'a+');	
		$string = date("Y-m-d-s").'-'.$logLevel.'-'.$message;
		fwrite($handle,$string.PHP_EOL);
		fclose($handle);
	}

// when called will log INFO then message associated with info()
public static function info($message)
{
		self::logMessage("INFO",$message);
	}

// when called will log ERROR then message associated with error()
public static function error($message)
{

		self::logMessage("ERROR",$message);
	}

 	function __destruct(){
 		echo PHP_EOL."The file has ended and the script has closed".PHP_EOL;
	}


}
 ?>
