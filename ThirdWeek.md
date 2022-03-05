# Week3

## 安裝 node.js

可以直接去官網下載即可，之後可以使用 terminal 輸入

> node -v

可以查看當前版本。

---

## Mac 使用 Google Chrome 查看錯誤訊息

使用 option + command + i 即可查看錯誤訊息。

---

## VScode 快速建置 html

輸入

> !

然後等它跳出補充訊息，再輸入 enter 即可直接建構最簡單的 html 範例。

---

## 使用 node 輸出 console.log 訊息

在將 html 跟 js 建構好之後，可以在 javascript 檔案裡面輸入

> console.log('hello, world')

之後在 terminal 裡輸入

> node <該 javascript 檔案>

它就會印出 hello, world

---

## 使用 node 在 terminal 進行加減乘除

可以在 terminal 輸入

> node

即可進入該環境，之後可以輸入各個數值進行簡單運算，
然後想要跳出只要按下 ^c 或是輸入

> .exit

即可跳出該 node。

---

## 利用 console.log 內部的框框計算

在 javascript 這個檔案裡輸入

> console.log(1+1+1)

然後存檔，之後在 terminal 輸入

> node <該 javascript 名稱>

即可在 terminal 看到計算結果

---

## ||與＆＆的短路性質

假如在 node 情形裡面輸入

> 3 || 10

會輸出 3。

但是輸入

> false || 10

會回傳 10。

假如輸入

> 0 || 10

會輸出 10。

---

假如創造一個 txt

> touch test.txt

然後使用

> cat test.txt | node myScript.js

cat 意味著把檔案內容印出來，而 | 則是把前一個的輸出變成後一個的輸入。

---

介紹了選擇排序法(選最大最小的先放最邊邊)、泡沫排序法(持續一對一調換)、插入排序法(撲克牌)

介紹合併排序法(把全部從中間一直切，然後在兩兩按照大小不斷排序再融合)、
快速排序法(讓左邊都小於一個基準數字、右邊都大於，然後不斷對左右兩邊都重複這個操作)

---

目前看到這：

還沒看：

https://lidemy.com/courses/389485/lectures/5943010
現在要寫作業二

https://github.com/Lidemy/mentor-program-5th-Wangpoching

https://lidemy.com/courses/enrolled/378582

沒在用：
https://github.com/ClayGao/My-study/tree/master/Lidemy/week1-4/week1-3

---

# git commit

git commit -am "3/5"

git branch -M main
git remote add origin https://github.com/Ray7808/LSitduedmyy.git
git push -u origin main
