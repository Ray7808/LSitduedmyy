<?php

    // 這邊是可以顯示現在的時間
    // require_once('ConnectMySQL.php');
    // $result = $conn->query("SELECT now();");
    // if (!$result) {
    //     die($conn->error);
    // }
    // $row = $result->fetch_assoc();
    // echo "Now is " . $row['now()'];
    
    //這邊可以進行資料的讀取
    require_once('ConnectMySQL.php');
    $result = $conn->query("SELECT * FROM users");
    if (!$result) {
        die($conn->error);
    }

    while ($row = $result->fetch_assoc()) {
        echo "id:" . $row['id'] . '<br>';
        echo "username:" . $row['username'] . '<br>';
    }
?>