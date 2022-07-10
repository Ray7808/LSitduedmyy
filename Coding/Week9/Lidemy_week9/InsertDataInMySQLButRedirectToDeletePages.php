<?php
    //測試能否將apple加入到MySQL裡面
    // require_once('ConnectMySQL.php');
    // $result = $conn ->query("insert into users(username) values('Body')");
    // if(!$result){
    //     die($conn->error);
    // }
    // print_r($result); //輸出1，代表有成功的意思

    //新增資料
    require_once('ConnectMySQL.php');
     if (empty($_POST['username'])) {
        die('請輸入 username');
     }

     $username = $_POST['username'];
     $sql = sprintf(
       "insert into users(username) values('%s')",
        $username
     );
     $result = $conn->query($sql);
      if (!$result) {
       die($conn->error);
     }
     echo "新增成功!" . "<br>";
     echo "username: " . $_POST['username'] . "<br>";

     //以下這個header是回到原本頁面的意思
     header("Location: TestInsertAndDeleteData.php");
?>