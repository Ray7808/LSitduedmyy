# Week3
## 安裝node.js
可以直接去官網下載即可，之後可以使用terminal輸入
> node -v

可以查看當前版本。

---
## Mac使用Google Chrome查看錯誤訊息
使用 option + command + i 即可查看錯誤訊息。

---

## VScode快速建置html
輸入
> !

然後等它跳出補充訊息，再輸入enter即可直接建構最簡單的html範例。

---
## 使用node輸出console.log訊息
在將html跟js建構好之後，可以在javascript檔案裡面輸入
> console.log('hello, world')

之後在terminal裡輸入
>node <該javascript檔案>

它就會印出hello, world

---
## 使用node在terminal進行加減乘除
可以在terminal輸入
> node

即可進入該環境，之後可以輸入各個數值進行簡單運算，
然後想要跳出只要按下 ^c 或是輸入
> .exit

即可跳出該node。

---

## 利用console.log內部的框框計算
在javascript這個檔案裡輸入
> console.log(1+1+1)

然後存檔，之後在terminal輸入
> node <該javascript名稱>

即可在terminal看到計算結果

---

## ||與＆＆的短路性質
假如在node情形裡面輸入
> 3 || 10

會輸出3。

但是輸入
> false || 10

會回傳10。

假如輸入
> 0 || 10

會輸出10。

---

假如創造一個txt

> touch test.txt

然後使用

> cat test.txt | node myScript.js

cat 意味著把檔案內容印出來，而 | 則是把前一個的輸出變成後一個的輸入。


---

目前看到這：

還沒看：

https://lidemy.com/courses/793973/lectures/14756775

https://github.com/ClayGao/My-study/tree/master/Lidemy/week1-4/week1-3

https://github.com/Lidemy/mentor-program-5th-Wangpoching  


---

# git commit


git commit -am "3/1"

git branch -M main
git remote add origin https://github.com/Ray7808/LSitduedmyy.git
git push -u origin main