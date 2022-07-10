<?php
  require_once('ConnectMySQL.php');

  if (empty($_GET['id'])) {
    die('請輸入 id');
  }

  $id = $_GET['id'];
  $sql = sprintf(
    "delete from users where id = %d",
    $id
  );
  echo $sql . '<br>';
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  //這邊是當被影響的列數大於1時，表示有刪除成功   
  if ($conn->affected_rows >= 1) {
    echo '刪除成功';
  } else {
    echo '查無資料';
  }

  header("Location: TestInsertAndDeleteData.php");
?>