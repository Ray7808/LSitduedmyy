# 網頁概論

## 查詢IP位置
>nslookup github.com

即可看到github的IP位置。

---

## 想直接拿到特定網頁的html檔
因為有時想看到該網頁所代表的內容，
這邊可以事先安裝request套件
>npm intsall request

然後輸入這個套件的一些內容(詳細可看GetRequestInformation.js)

之後輸入
>node GetRequestInformation.js > github.html

這邊的github.html可以代換成其他名稱，
上述的程式碼代表將得到的東西輸入到其他檔案裡面，
因此可以透過這個方式將該網頁代表的內容重新創建一個新的檔案來裝它。

---

## Header and Body
這邊可以在GetRequestInformation.js的request裡面輸入
>console.log(response.headers)

可以藉此看到這個Header內部所傳的一些額外資訊，
而Body則是主要的資訊。

---

## 參考各個不同的HTTP請求方法
這邊可以查看

https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods

---
## 實作簡單的 HTTP Server
在nodeJs裡面有個內建的http套件，詳情可以看HTTPServer.js

---
## 網路概論 (TIP/UDP)
HTTP或FTP這種要可靠及穩定的應用層都是建立在TCP這種傳輸層底下的部分，
像是封包什麼的比較少會漏掉，
而且TCP會用三次握手(詳情可查wiki)，
建立多種連接已確定有傳遞成功，
但是假如要播報一些像是NBA即時戰況的話，
可以使用像是UDP這種傳輸層，
雖然會掉比較多封包也較不可靠，
但是因為沒有傳輸什麼特別大的內容以及重要的資訊，
也有速度較快的優點，
因此UDP比較適合使用於這種情況。

## 網路概論總結
| 名稱      |                 功用                  | 
| :--:     | :-------------------------------------: 
| HTTP/FTP |     紙條上的內容                        | 
| TCP/UDP  |     傳紙條時的三次確認/不確認，一直傳紙條   | 
| IP       |     寄紙條，寫收件者跟寄件人              | 
|  實體層   |     郵差幫忙寄信                        |   

---




---
目前看到這：

還沒看：

https://lidemy.com/courses/511271/lectures/9656523

https://github.com/Lidemy/mentor-program-5th-Wangpoching

導師計畫第一期：
https://lidemy.com/courses/enrolled/378582

沒在用：
https://github.com/ClayGao/My-study/tree/master/Lidemy/week1-4/week1-3

---

# git commit

git commit -am "3/15"

git branch -M main
git remote add origin https://github.com/Ray7808/LSitduedmyy.git
git push -u origin main
