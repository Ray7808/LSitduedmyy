<?php
    //這邊可以進行資料的讀取
    require_once('ConnectMySQL.php');
    //$result = $conn->query("SELECT * FROM users");
    //下面這個是他會按照這個id大小去排序的意思
    $result = $conn->query("SELECT * FROM users order by id;");
    if (!$result) {
        die($conn->error);
    }

    while ($row = $result->fetch_assoc()) {
        echo "id:" . $row['id'] . '<br>';
        echo "username:" . $row['username'] . '<br>';
    }
?>

<h2>新增資料:</h2>
<form method="POST" action="InsertDataInMySQL.php">
	username: <input name="username" />
	<input type="submit"/>
</form>