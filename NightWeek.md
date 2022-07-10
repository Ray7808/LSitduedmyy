# MySQL and PHP

這邊可以使用以下連結下載：

> https://www.apachefriends.org/zh_tw/index.html

XMAPP 代表的是`Apache`、`MariaDB`、`PHP`、`Perl`。
其中`MariaDB`是很像`MySQL`的一種資料庫。

這邊若要撰寫`php`的話，
macbook 通常要去以下路徑：

> /Applications/XAMPP/xamppfiles/htdocs

然後在裡面撰寫對應的 php 檔案，
之後只要確定有開啟 XMAPP，
裡面一些設定也有開，
就可以直接在瀏覽器網址裡輸入自己寫的 php 檔，例如：

> http://localhost/YuWang/index.php

就可以使用了。

---

# PHP 語法介紹

`以下介紹都會在路徑Lidemy_week9裡面進行`

通常要執行 php 程式，單純在裡面寫東西是沒有用的，例如：

```
wpofwpef
wfowjfowef

wefowfow
<h1>AAAA</h1>
```

以上這些都是不行的，
需要加入`<?php (欲輸入的內容) ?>`－才行，例如：

```
<?php
echo 124
?>
```

以上是簡單 php 的輸出方式。

---

- echo

  `echo`就是告訴 php，這個是要輸出的部分，
  例如：

        ```
        <?php
        echo "<h1>AAA</h1>";
        ?>
        ```

  就會輸出`<h1>AAA</h1>`(這邊是大寫粗體的 AAA(如同 html 的 h1 標籤)，查看原始碼是左邊這串)，

  另外 php 程式碼的尾端都要加一個`;`代表句子的結束。

- 變數

  這邊使用`$`代表接下來的是變數名稱，例如：

  ```
      <?php
        $a=123
         echo a;
      ?>
  ```

- 字串

  這邊假如想使用字串串接，例如

  ```
    <?php
  	$a="AAA";
  	$b="BBB";
  	echo $a . $b; //輸出 AAABBB
  ?>
  ```

- if else

      假如想要寫if else可以輸入

      ```
      <?php
        $score=60;
        if($score >= 60){
         	echo "Pass";
        }
        else{
      	  echo "Fail";
        }
      ?>
      ```

- for 迴圈

  ```
  <?php
  for($i=1;$i<=10;$i++){
  	echo $i . "<br>";
  }
  ?>
  ```

  這邊要注意的是，for loop 裡面的 i 也是變數(要加`$`)，
  另外要注意的是因為這個是在瀏覽器解析底下，
  因此若要使用換行要使用

- 陣列(array)

  想要在 php 裡面使用 arr 也是可以的，例如：

  ```
    <?php
    $arr = [1,2,3,4,5];
    echo $arr[0];

    echo "length:" . sizeof($arr) . "<br>";
    ?>
  ```

  這邊稍微提到，假如想知道 array 得大小，
  可以使用`sizeof`來得知。

  另外 array 裡面不只可以存變數也可以存字串，也可以混著用。

  還有一種額外的用法是使用`var_dump`或是`print_r`(較為簡潔)，
  這個可以知道 array 裡面個有什麼參數，例如：

  ```
  <?php
    $arr = [1,2,3,4,5];
    echo $arr[0] . "<br>";

    echo "length:" . sizeof($arr) . "<br>";
    echo "All information: " . var_dump($arr) . "<br>";
    echo "All information: " . print_r($arr) . "<br>";
  ?>
  ```

- 函式(function)

      在php裡面要寫function也是可以的，例如：
      ```
      <?php
        function add($a,$b){
      	    return $a + $b;
        }
        echo add(3,5);
      ?>
      ```

---

# Apache(Server)

基本使用`Apache`的流程是：

request => apache => php => output(這邊是 html) => apache => response

這邊因為預設都是在

> /Applications/XAMPP/xamppfiles/htdocs

這裡面進行 php 的撰寫，
但其實在

> /Applications/XAMPP/xamppfiles/apache2/conf/httpd.conf

這邊可以進行路徑的修改，
這樣就不會只能在原先那邊做使用。

而 windows 的預設是

> C:\xampp\htdocs

---

# phpadmin

可以使用這個進行資料庫的撰寫。

---

# php 帶資料進來

假如開啟 server 然後在網址的 php 後面輸入字串，
可以利用 php 的內建函式抓取出來，例如:

> http://localhost/YuWang/index.php?a=1&b=2

上面的`?a=1&b=2`就是輸入給 php 的字串，
這時在 php 檔案裡可以寫:

> print_r($\_GET);

就可以得到該輸入的字串，下方式網頁輸出結果:
![image](Coding\Week9\Lidemy_week9\phpObtainInformationFromAddress.PNG)

但是這邊還是單純輸出字串，
這時假如只想使用輸入的參數，
可以這樣寫:

```
<?php
	echo "Hello! <br>";
	echo "a: " . $_GET['a'] . "<br>";
	echo "b: " . $_GET['b'] . "<br>";
	print_r($_GET);
?>
```

這樣就可以根據傳回的資料稍加處理後再輸出出去。

但因為有時我們並沒有輸入參數，
而這樣會導致 php 無法辨識而產生 error(如下圖)
![image](Coding\Week9\Lidemy_week9\NoInputAndError.PNG)

因此要使用一個 if funciton(`isset`)

```
<?php
	echo "Hello! <br>";
	if (isset($_GET['a'])){
		echo "a: " . $_GET['a'] . "<br>";
	}
	if (isset($_GET['b'])){
		echo "b: " . $_GET['b'] . "<br>";
	}
	print_r($_GET);
?>
```

---

# 從前端傳資料給後端 (GET and POST)

- ## GET method

  一般來說，前端會使用`form`進行表單資料的傳遞，例如在`getDataUsingGETMethod.php`以及`DataBase.php`中:

  程式描述:
  位於`getDataUsingGETMethod.php`的 form 表單會回傳 a 跟 age 的資料給`DataBase.php`這隻程式碼，之後`DataBase.php`會整理並輸出頁面給使用者查看輸入的資料。

  `getDataUsingGETMethod.php` 的程式碼:

  ```
  <?php
    echo "I am YuWang! Yo!"
  ?>

  <form method="GET" action="DataBase.php">
    a: <input name="a" />
    age: <input name="age">
    <input type="submit"/>
  </form>
  ```

  `DataBase.php` 的程式碼:

  ```
  <?php
    echo "Hello! <br>";
    if (isset($_GET['a'])){
      echo "a: " . $_GET['a'] . "<br>";
    }
    if (isset($_GET['age'])){
      echo "age: " . $_GET['age'] . "<br>";
    }
    print_r($_GET);
  ?>
  ```

  透過這樣的方式，就可以處理前端回傳的資料並進行處理。另外若想針對沒有資料回傳的情況進行 error handling 時，可以在`DataBase.php`這樣寫:

  ```
  <!-- 假如form資料有缺的error handling -->
  <?php
    echo "Hello! <br>";
    if(!isset($_GET['a']) || !isset($_GET['age'])){
      echo "資料有缺，請再次填寫<br>";
      exit();
    }
    else{
      echo "Hello! Your name is " . $_GET['a'] . "<br>";
      echo "Your age is " . $_GET['age'] . "<br>";
    }

    print_r($_GET);
  ?>
  ```

  這邊的`exit();`是表示當執行完上述程式，之後的程式就不再執行的意思，像是假如沒有寫 else 的話，就可以使用剛剛那個方式來停止後續程式的執行。
  只是要小心如果有後續的撰寫的話，他還是會包進去。

- ## POST method

  相比於上述的`GET method`，`POST method`在後續的網址的處理上，就不會顯示輸入的內容，相較之下比較具有安全性，

  這邊除了使用上述的`DataBase.php`(需要針對`POST method`進行對應的撰寫)之外，我們使用另外一個`getDataUsingPOSTMethod.php`，這樣在回傳表單時，就不會帶入輸入的個個資料:

  `getDataUsingGETMethod.php` 的程式碼:

  ```
  <?php
  	echo "I am YuWang! Yo!"
  ?>


  <form method="POST" action="DataBase.php">
    a: <input name="a" />
  	age: <input name="age">
    <input type="submit"/>
  </form>
  ```

  `DataBase.php` 的程式碼:

  ```
  <!-- 這邊使用POST method進行撰寫 -->
  <?php
  	echo "Hello! <br>";
  	if(empty($_POST['a']) || empty($_POST['age'])){
  		echo "資料有缺，請再次填寫<br>";
  		exit();
  	}
  	else{
  		echo "Hello! Your name is " . $_POST['a'] . "<br>";
  		echo "Your age is " . $_POST['age'] . "<br>";
  	}

  	print_r($_POST);
  ?>
  ```

  這邊要注意的是我們有使用`empty`這個函式，主要是當`form`回傳的資料是空的時候，就輸出資料有缺的資訊。

  另外`GET`跟`POST`原則上不能混用，因為當表單送出就會直接定義它的型態，但是假如你原本用 POST 然後在 action 的路徑後面加入`?(後面輸入GET形式的資料型態)`，例如:

  ```
  action="DataBase.php?school=blablabla"
  ```

  這樣還是可以將此筆資料傳入後續的檔案裏面。

- ## 連接 MySQL

  這邊可以利用 phpMyAdmin 使用創建使用者帳號
  ![image](Coding\Week9\Lidemy_week9\AddUserAccount.PNG)

  ![image](Coding\Week9\Lidemy_week9\NewUserAccount.PNG)

  這編稍微要注意的是主機名稱要設定成`localhost`或其他記得的名稱。(Mac 是設定成 localhost)

  之後可以直接去看`ConnectMySQL.php`的程式碼:

  ```
  <?php
    echo "Now you are entering the SQL...";
    $server_name = 'localhost';
    $username = 'HEHEHE';
    $password = 'HEHEHE';
    $db_name = 'HEHEHE';

    $conn = new mysqli($server_name, $username, $password, $db_name);

    if ($conn->connect_error) {
      die('資料庫連線錯誤:' . $conn->connect_error);
      // 這個die是執行完這段後，底下的都不會執行。
    }

    $conn->query('SET NAMES UTF8');
    $conn->query('SET time_zone = "+8:00"');
  ?>
  ```

  ### <mark>引用不同 php 檔案的方式</mark>

  這邊要提到的是，通常 php 裡面，
  不同功能會分開寫在不同的 php 檔案，
  因此連線的部分會寫在`ConnectMySQL.php`或`conn.php`裡面，之後在`DataBase.php`裡面進行引用，輸入:

  ```
  require_once('ConnectMySQL.php');
  ```

  之後若要修改程式碼只要去`ConnectMySQL.php`裡面進行修改就好。
  另外記得因為這支 php 裡面有包含密碼，因此不要推上 github，不然會有點麻煩。

---

- # php 從資料庫讀取資料

  這個部分是從`ReadDataInMySQL.php`開始

  這邊是先從資料庫讀取現在時間:

  ```
  <?php
    // 這邊是可以顯示現在的時間
    require_once('ConnectMySQL.php');
    $result = $conn->query("SELECT now();");
    if (!$result) {
        die($conn->error);
    }
    $row = $result->fetch_assoc();
    echo "Now is " . $row['now()'];
  ?>
  ```

  而這個則是從資料庫讀取資料:

  ```
  <?php
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
  ```

  要注意的是，若要進行資料庫的讀取，可以先用`phpMyAdmin`新增資料後，再進行確認。

---

- # php 從資料庫讀取資料

  這邊可以看`InsertDataInMySQL.php`跟`TestInsertData.php`，
  以下是他們的程式碼:

  程式說明:
  透過`InsertDataInMySQL.php`得到 POST 回傳的表單，之後搭配 SQL 語法將之加入資料庫，然後使用`header`回到`TestInsertData.php`的頁面。
  而`TestInsertData.php`則是除了利用`while`將資料庫裡的`username`跟`id`顯示出來外，也加入一個表單(POST method)用來將資料輸入傳到`InsertDataInMySQL.php`進行寫入資料庫的動作。

  `InsertDataInMySQL.php`的程式碼:

  ```
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
     header("Location: TestInsertData.php");
  ?>
  ```

`TestInsertData.php`的程式碼:

```

  <?php
    //這邊可以進行資料的讀取
    require_once('ConnectMySQL.php');
    //$result = $conn->query("SELECT * FROM users");
    //下面這個是他會按照這個id大小去排序的意思
    //分別有ASC(小到大)跟DESC(大到小)
    $result = $conn->query("SELECT * FROM users order by id DESC;");
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
```

- # php 從資料庫刪除資料

  這邊是刪除資料，透過`TestInsertAndDeleteData.php`新增一個刪除的按鈕，但是裡面是刪除資料的網址後面加入`?id=(欲刪除的id名稱)`，這樣使用`GET method`就可以將網址帶入刪除的資訊並進行刪除，若要使用`POST method`則要帶整個`form`進去，會比較麻煩。

  以下是刪除資料的流程說明：
  `TestInsertAndDeleteData.php`跟之前`TestInsertData.php`幾乎一樣，只是每個欄位後面加入 a 標籤，並在`href`後面帶入要刪除的 id 連結，之後在`delete.php`利用`GET method`輸入 id，再代入 SQL 語法來將該筆資料刪除，後續再導回到原先的`TestInsertAndDeleteData.php`。另外要注意的是因為這個之前有連接`InsertDataInMySQL.php`而這邊則是導入`InsertDataInMySQLButRedirectToDeletePages.php`。

  `TestInsertAndDeleteData.php`的程式碼：

  ```
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
        echo "id:" . $row['id'];
        echo "<a href='delete.php?id=" . $row['id'] . "'>刪除</a>";
        echo "<br>";
        echo "username:" . $row['username'] . '<br>';
    }
  ?>


  <h2>新增資料:</h2>
  <form method="POST"     action="InsertDataInMySQLButRedirectToDeletePages.php">
  username: <input name="username" />
    <input type="submit"/>
  </form>
  ```

  `delete.php`的程式碼：

  ```
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
  ```

  `InsertDataInMySQLButRedirectToDeletePages.php`的程式碼：

  ```
  <?php
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
  ```

這邊要注意的是，當輸入 id ＝(未使用的數字)，
並且刪除成功時，不代表有刪除任何資料，
只有當指令輸入錯誤時才會跳 error。

---

- # php 從資料庫更新資料

---

## 目前看到這：

https://lidemy.com/courses/390611/lectures/16659561

下週可以回到 udemy 看最後的部分
https://www.udemy.com/course/chrome-devtools/learn/lecture/5402028#overview

之後等教 jQuery 再回去看金魚腦後續的部分。

https://www.coderbridge.com/@oliver841025?utm_source=coderbridge-io&utm_medium=blog_author_info_author_name&utm_campaign=小小碼農_一些後端相關的名詞_@oliver841025

https://hackmd.io/@benben6515

https://www.evernote.com/shard/s358/client/snv?noteGuid=cb7acfa7-1450-377d-efe3-831387b100fe&noteKey=8e365929e4b9dfb2554d26355b672e04&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs358%2Fsh%2Fcb7acfa7-1450-377d-efe3-831387b100fe%2F8e365929e4b9dfb2554d26355b672e04

還沒看：

導師計畫第一期：
https://lidemy.com/courses/enrolled/378582

沒在用：
https://github.com/ClayGao/My-study/tree/master/Lidemy/week1-4/week1-3

等這一切結束，記得把每週要知道的部分再重新整理在這裡。
以及可以再來玩 HTTPGame 後續的部分

---

# git commit

OK

git commit -am "7/4\_\_AJAXOAO"

git branch -M main
git remote add origin https://github.com/Ray7808/LSitduedmyy.git
git push -u origin main

vscode 開啟 terminal：control + ~(左上角)

vscode 開啟 markdown(md 檔)：command + shift + v

查看隱藏資料夾快捷鍵：Command + shift + .

開啟 Google Chrome 的 Devtool 快捷鍵 : command + option + i

OAO

```

```
