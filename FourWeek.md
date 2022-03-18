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
>node GetRequestInformation > github.html

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
目前看到這：

還沒看：

https://lidemy.com/courses/511271/lectures/9668272

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
