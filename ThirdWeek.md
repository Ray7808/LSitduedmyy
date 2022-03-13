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
(上述這個是 windows 才需要使用)

---

介紹了選擇排序法(選最大最小的先放最邊邊)、泡沫排序法(持續一對一調換)、插入排序法(撲克牌)

介紹合併排序法(把全部從中間一直切，然後在兩兩按照大小不斷排序再融合)、
快速排序法(讓左邊都小於一個基準數字、右邊都大於，然後不斷對左右兩邊都重複這個操作)

---
# Node.js 指令 (引入模組)
## require
輸入
>var os = require('os') //引入os模組(模塊)

再輸入

>console.log(os.platform())

就可以得到這個系統的名稱

---
# 引用module 
## (查看ImportMyModule.js, myModule.js)

在A.js輸入
> var obj = {名稱、函式等等}

然後在下方輸入(全部轉出去)
>module.exports = obj

或是輸入(只轉特定名稱或函式)
>exports.想使用的名稱或函式

之後在B.js輸入
> let OAO = require('./A.js')

之後即可使用A.js裡面的東西，例如
>OAO.名稱or函式

---
# npm (Node Package Manager)
當你裝node.js時就已經有內建裝npm了，可以輸入
>npm -v

就可以查看npm的版本號。

## npm 初始化
就像之前git一樣，輸入
>npm init
可以初始化這個資料夾的檔案

## 安裝套件
想要安裝不同套件時
可以使用npm這個網站去找對應的套件並在terminal輸入
>npm install <該套件名稱>
就可以將該資料夾下載下來放在node_modules

## 把使用特定套件的資訊儲存起來
要把整個東西upload給別人其實也可以，只是這樣會讓整體檔案變得很大，
倒不如將使用某種套件的資訊儲存起來，然後告訴別人你有裝什麼套件，
這樣就可以以比較少的容量轉移給別人做使用。

可以輸入
>npm install <該套件名稱> --save

將下載套件的資訊輸入到package.json裡面。

這樣之後要是node_modules刪除後或是把整體檔案給別人時，
可以輸入
>npm install 

將package.json裡面要安裝的資訊安裝下來，
就可以做使用了。

**小提醒：要將檔案上傳到git時，記得排除node_modules，不然這樣檔案會太大

## npm Script
今天假如想用npm執行特定檔案或輸出各式訊息時，
可以打開package.json的Scripts，
在裡面輸入"start":"node ImportMyModule.js"

之後直接在terminal裡面輸入
>npm run start

即可直接執行start代表的指令

---
# Jest 來寫測試
可以先去Jest的官網把它載下來，
輸入
>npm install --save-dev jest

之後當建構好想測試的funciton之後
可以在該檔案下方輸入
>modeule.exports = <該函式名稱>

在這邊是創建sum.js並建立function sum
然後在sum.js下方輸入
>module.exports = sum

然後現在要創建測試的程式，
這邊是創建sum.test.js這個檔案
並寫入相關測試(詳見檔案)
之後可以去package.json的Scripts輸入
>"test":"jest"

然後在terminal輸入
>npm run test

即可看到測試結果。

若要針對單一檔案進行測試，
則可以在package.json的Scripts的test那邊輸入
>"test":"jest <欲測試的檔案名稱>"

這樣就可以單純跑該檔案名稱。

或是假如node版本是較新的話，
也可以在terminal輸入
>npx jest <欲測試的檔案名稱>

一樣可以達到一樣的效果。

---
# TDD (Test-Driven Development)
TDD是測試驅動開發，意思是先把測試寫好再寫function



---
目前看到這：

還沒看：

https://lidemy.com/courses/793973/lectures/14680777

https://github.com/Lidemy/mentor-program-5th-Wangpoching

導師計畫第一期：
https://lidemy.com/courses/enrolled/378582

沒在用：
https://github.com/ClayGao/My-study/tree/master/Lidemy/week1-4/week1-3

---

# git commit

git commit -am "3/13"

git branch -M main
git remote add origin https://github.com/Ray7808/LSitduedmyy.git
git push -u origin main
