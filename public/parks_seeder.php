<?php

define('DB_HOST','127.0.0.1');
define('DB_NAME','parks_db');
define('DB_USER','root');
define('DB_PASS','');

require 'db_connect.php';

$national_parks = [
  ['name' => 'Arcadia', 'location' => 'Maine', 'date_established' => 'February 26, 1919','area_in_acres' => '47389'],
  ['name' => 'American Samoa', 'location' => 'American Samoa', 'date_established' => 'October 31, 1988','area_in_acres' => '9000'],
  ['name' => 'Arches', 'location' => 'Utah', 'date_established' => 'April 12, 1929','area_in_acres' => '47389'],
  ['name' => 'Badlands', 'location' => 'South Dakota', 'date_established' => 'November 10, 1978','area_in_acres' => '242756'],
  ['name' => 'Big Bend', 'location' => 'Texas', 'date_established' => 'June 12, 1944','area_in_acres' => '801163'],
  ['name' => 'Biscayne', 'location' => 'Florida', 'date_established' => 'June 28, 1980','area_in_acres' => '172924'],
  ['name' => 'Black Canyon of the Gunnison', 'location' => 'Colorado', 'date_established' => 'October 21, 1999','area_in_acres' => '32950'],
  ['name' => 'Bryce Canyon', 'location' => 'Utah', 'date_established' => 'February 25, 1928','area_in_acres' => '35835'],
  ['name' => 'Canyonlands', 'location' => 'Utah', 'date_established' => 'September 12, 1964','area_in_acres' => '337598'],
  ['name' => 'Capitol Reef', 'location' => 'Utah', 'date_established' => 'December 18, 1971','area_in_acres' => '241904']
];

foreach ($national_parks as $park) {
  $query = "USE parks_db; INSERT INTO national_parks (name,location,date_established,area_in_acres) VALUES ('{$park['name']}','{$park['location']}','{$park['date_established']}','{$park['area_in_acres']}')";

  $dbc->exec($query);

  echo "Inserted ID: " . $dbc->lastInsertId() . PHP_EOL;
}


?>