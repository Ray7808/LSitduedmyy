## Javascript 能做到的事情

- 介面：如何改變介面

- 事件：如何監聽事件並作出反應

- 資料：如何跟伺服器交換資料

---

## 執行 javascript 的一百種方式

想在 html 外部寫入 javascript，可以輸入

> `<script src="(js路徑檔)"></script>`

即可引入該 js 檔案。

---

## DOM(Document Object Model) 文件物件模型

把 Document 轉換成 Object 的 model。

瀏覽器提供一個橋樑，讓 javascript 可以連接網頁的 html 跟 css 檔案。

---

## 如何抓取 html 上的標籤或是 class (GetElement)

- 假如今天想抓取 html 的 div 標籤，可以輸入

  > `<script>const elements = document.getElementByTagName('div')</script>`

  即可拿到該標籤的檔案內容，但因為 html 是由上往下跑的部分，因此通常 javascript 會放在 body 的上面一行，這樣才可以在載入所有 html 跟 css 之後，透過 js 來修改內容。

- 假如今天想抓取 html 的 class(這邊名稱是“OAO”)，可以輸入

  > `<script>const elements = document.getElementByClassName('OAO')</script>`

- 假如今天想抓取 html 的 id(這邊名稱是“Weee”)，可以輸入

  > `<script>const elements = document.getElementById('Weee')</script>`

- 想按自己的方式抓不管是標籤還是 class 還是 id，可以輸入

  > `<script>const elements = document.querySelector('想選擇的標籤或是class或是id')</script>`

  因為這個其實是一種 css 選擇器，因此要用`'div > a.ABCD'`這種也是可以的。不過有個小盲點是因為這個只會配到第一個抓到的元素，因此有另外一種變形
  `querySelectorAll`，這樣就可以抓取所有想選擇的標籤。

---

## 目前看到這：

https://lidemy.com/courses/390588/lectures/9653578

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

git commit -am "5/2"

git branch -M main
git remote add origin https://github.com/Ray7808/LSitduedmyy.git
git push -u origin main

vscode 開啟 terminal：control + ~(左上角)

vscode 開啟 markdown(md 檔)：command + shift + v

查看隱藏資料夾快捷鍵：Command + shift + .

開啟 Google Chrome 的 Devtool 快捷鍵 : command + option + i
