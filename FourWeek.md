# 網頁概論

## 查詢IP位置
>nslookup github.com

即可看到github的IP位置。

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

## Header and Body
這邊可以在GetRequestInformation.js的request裡面輸入
>console.log(response.headers)

可以藉此看到這個Header內部所傳的一些額外資訊，
而Body則是主要的資訊。

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

## 什麼是API?
API是Application Programming Interface(應用程式介面)



## 簡易串接API
詳情可以查看TestAPI.js這個檔案。

或是可以使用reqres.in這個網站，有一些專門給別人測試不同API的程式。

## 資料格式的選擇
- XML (Extensible Markup Language)

  XML跟HTML是相似的語言，例如：
  <?xml version = "1.0", encoding = "UTF-8"?>
  <note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend</body>
  </note>

- JSON (JavaScript Object Notation)
   回到TestAPI.js上面，
   可以看到最新版回傳的資訊是一個JSON格式的字串，
   因此需要新增一行來將它轉回JSON的資料型態

---
## 透過網路交換的另外一種方式SOAP
SOAP (Simple Object Access Protocol)
其資料交換都透過XML，詳細資料可以查詢SoapUI或是github soap

---
## Restful究竟是什麼？
它不是一個協定，只是一種風格，像是以下這樣：
| 名稱      | 指令    |     指向內容     | 
| :------: | :--:   | :--------------:|
| 新增使用者 | POST   |     /users      |
| 刪除使用者 | DELETE |     /users/:id  |
| 查詢使用者 | GET    |     /users/:id  |
| 使用者列表 | GET    |     /users      |
| 更改使用者 | PATCH  |     /users/:id  |

目的是提高可讀性以及更加直觀地表示要做的部分。

---
## 簡易串接API NO.2
詳情可以看TestAPINo2.js

---

## 跟網路相關的一些重要指令

- curl
   只要安裝好並在terminal輸入
   >curl <欲get的網站名稱>
   
   即可得到該網站回傳的response。
   這邊可以透過輸入
   >curl <欲get的檔案名稱> > <欲放入資料的檔案名稱(通常是html)>

   即可將回傳的response輸入到該檔案內容裡，
   或是可以透過curl將回傳的檔案透過CLI的方式印出JSON格式的結果。

- nslookup
   先前提過的，
   可以透過這個指令解析出該server位置是在哪裡，例如：
   >nslookup github.com

- ping
   可以透過輸入這個以及欲測試的網站來測試是否可以連上，例如：
   >ping google.com

- telnet
   這個算是去ping一個指令的port，例如：
   >telnet 52.74.223.119 80

   就是為了測試這個位置的port 80有沒有開啟這樣。

   除此之外，假如有順利連上的話，telnet還可以拿來傳資料，
   透過輸入GET等指令就可以得到該網站的內部一些資訊。

   #### 小備註: 最廣為人知的telnet應用就是ptt


---
目前看到這：

還沒看：

https://lidemy.com/courses/511271/lectures/9802493

https://github.com/Lidemy/mentor-program-5th-Wangpoching

導師計畫第一期：
https://lidemy.com/courses/enrolled/378582

沒在用：
https://github.com/ClayGao/My-study/tree/master/Lidemy/week1-4/week1-3


等這一切結束，記得把每週要知道的部分再重新整理在這裡。

---

# git commit

git commit -am "3/15"

git branch -M main
git remote add origin https://github.com/Ray7808/LSitduedmyy.git
git push -u origin main
