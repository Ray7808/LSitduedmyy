<!-- 以下都是針對GTE method所做的處理 -->
<!-- 針對form回傳資料進行處理並輸出 -->
<!-- <?php
	echo "Hello! <br>";
	if (isset($_GET['a'])){
		echo "a: " . $_GET['a'] . "<br>";
	}
	if (isset($_GET['age'])){
		echo "age: " . $_GET['age'] . "<br>";
	}
	print_r($_GET);
?> -->

<!-- 假如form資料有缺的error handling -->
<!-- <?php
	echo "Hello! <br>";
	if(!isset($_GET['a']) || !isset($_GET['age'])){
		echo "資料有缺，請再次填寫<br>";
		// exit(); //要小心使用
	}
	else{
		echo "Hello! Your name is " . $_GET['a'] . "<br>";
		echo "Your age is " . $_GET['age'] . "<br>";
	}

	print_r($_GET);
?> -->

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