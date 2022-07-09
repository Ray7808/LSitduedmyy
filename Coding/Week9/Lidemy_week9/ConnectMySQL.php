
<?php
  echo "Now you are entering the SQL...";
  $server_name = 'localhost';
  $username = 'YuWang';
  $password = '1234';
  $db_name = 'YuWang';

  $conn = new mysqli($server_name, $username, $password, $db_name);

  if ($conn->connect_error) {
    die('資料庫連線錯誤:' . $conn->connect_error);
    // 這個die是執行完這段後，底下的都不會執行。
  }

  $conn->query('SET NAMES UTF8');
  $conn->query('SET time_zone = "+8:00"');
?>