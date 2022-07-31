# Express

這邊使用 MVC 架構可以簡單建構出一個完整的伺服器專案，
在 request 傳給 controller 後，他會傳給 model 來回傳得到資料，再傳給 views 渲染畫面後再回傳，再傳給使用者。

這邊使用 ejs 來進行畫面的修改跟渲染。

這邊可以使用 `body-parser` 拿到表單資料(在`express_index.js`裡面)。
這樣就可以透過定義 req.body.<form 輸入的 name>
`ORM(Object Relational Mapping)`是一個物件，只要操作這個物件，就可以針對資料庫去進行變化，這樣就不用再額外處理 SQL query 的部分。
`N+1 problem`是 N 次迴圈中，每次迭代都呼叫資料庫，因而拖慢速度

`expression-session`則是可以用來處理 session 相關的部分。
`connect-flash`也可以用來處理 session 相關的部分
`sequelize`可以直接對資料庫操作，相較一般輸入 SQL query 的方式，更為方便。
`PM2`是一個可以一直在背景執行的 npm 軟體。假如想部署就可以使用這個，這樣就可以一直跑這個服務。
`gandi`是一款可以讓你自己搭載網域的網站，這樣就可以利用這個服務讓你的網站可以跟外界溝通。純粹建部落格的話，可以使用 githube page + hexo 就可以了。
`Nginx`是一種可以提供反向代理的套件，藉由 user 都透過同一個網址(port)輸入進來，再由那個服務決定是從哪裡來的，然後再轉連到不同的服務(port)上。
`clearDB`是 heroku 一個免費的套件，可以稍微存取資料庫來做使用。

- cp : 複製檔案的指令

useEffect：render 後你想做什麼(可以先 import from react)
useLayoutEffect：render 前你想做什麼(可以先 import from react)

---

## 目前看到這：

可以等都大概看完後再回來看 fetch 的介紹跟第十四週後面的系統架構

https://lidemy.com/courses/1181039/lectures/25643186

可以在 terminal 使用 vimtuber

============

github 的 Lidemy 5th:
https://github.com/Lidemy/mentor-program-5th

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
