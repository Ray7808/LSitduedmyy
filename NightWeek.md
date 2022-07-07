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
需要加入<?php (欲輸入的內容) ?>－才行，例如：

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

---

## 目前看到這：

https://lidemy.com/courses/390588/lectures/9653982

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
