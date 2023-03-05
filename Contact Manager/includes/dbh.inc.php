<?php

$servername = "localhost";
$dBUsername = "root";
$dBPassword = "26382523Pb";
$dBName = "phpproject01";

$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName);

if (!$conn) {
	die("Connection failed: ".mysqli_connect_error());
}
