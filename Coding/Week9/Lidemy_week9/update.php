<?php
  require_once('ConnectMySQL.php');

  if (empty($_POST['id']) || empty($_POST['username'])) {
    die('請輸入 id 與 username');
  }

  $id = $_POST['id'];
  $username = $_POST['username'];
  $sql = sprintf(
    "update users set username='%s' where id=%d",
    $username,
    $id
  );
  echo $sql . '<br>';
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  header("Location: TestInsertAndDeleteAndEditData.php");
?>