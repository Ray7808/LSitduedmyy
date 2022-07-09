<!-- 輸出 -->
<!-- <?php
echo "<h1>AAA</h1>"
?> -->

<!-- 變數 -->
<!-- <?php
    $a=123;
    echo $a;
?> -->

<!-- 字串(串接) -->
<!-- <?php 
	$a="AAA";
	$b="BBB";
	echo $a . $b; //輸出 AAABBB
?> -->

<!-- if else -->
<!-- <?php 
	$score=60;
	if($score >= 60){
		echo "Pass";
	}
	else{
		echo "Fail";
	}
?> -->

<!-- for loop -->
<!-- <?php 
	for($i=1;$i<=10;$i++){
		echo $i;
	}
?> -->

<!-- for loop 換行 -->
<!-- <?php
  for($i=1;$i<=10;$i++){
  	echo $i . "<br>";
  }
?> -->

<!-- Array -->
<!-- <?php
    $arr = [1,2,3,4,5];
    echo $arr[0] . "<br>";

    echo "length:" . sizeof($arr) . "<br>";
	echo "All information: " . var_dump($arr) . "<br>";
	echo "All information: " . print_r($arr) . "<br>";
?> -->

<!-- function -->
<?php 
	function add($a,$b){
		return $a + $b;
	}
	echo add(3,5);
?>

<!-- 單純抓取網站參數 -->
<!-- <?php
	echo "Hello!";
	print_r($_GET);
?> -->

<!-- 抓取網站參數並經過處理再輸出 -->
<!-- <?php
	echo "Hello! <br>";
	echo "a: " . $_GET['a'] . "<br>";
	echo "b: " . $_GET['b'] . "<br>";
	print_r($_GET);
?> -->

<!-- 使用if來避免沒有網站參數的情形 -->
<!-- <?php
	echo "Hello! <br>";
	if (isset($_GET['a'])){
		echo "a: " . $_GET['a'] . "<br>";
	}
	if (isset($_GET['b'])){
		echo "b: " . $_GET['b'] . "<br>";
	}
	print_r($_GET);
?> -->