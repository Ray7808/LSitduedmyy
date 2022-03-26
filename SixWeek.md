# 網頁模版網站

參考連結：https://html5up.net

## HTML (HyperText Markup Language 超文本標記語言)
- <h1~h6> : h代表heading的意思。

- span跟div的差別：都是匡列東西，但是因為div是匡列一整組，因此假如用div的話會幫你換行，但是span不會。

- img：可以在src那邊輸入來源。在同個地方輸入title的話，可以在滑鼠移到該圖片上時，看到title輸入的文字。而在同個地方輸入alt的話，代表假如圖片沒辦法載入時所顯示的替代文字。

- ul(undered list), ol(ordered list)和li(list item)：這邊的話可以先用ul或ol包住多個li組成的html，藉由ul或ol可以判斷其會幫忙編號還是不會。

- pre(preformatted text)和br(line break)：以往在html裡面輸入多個空格，最終網頁呈現的結果只會判定為一個空格，因此透過pre(`<p></p>`)的這個標籤，即可呈現原先在html裡面寫的樣子。br則是換行的意思。

- `<table>`：表格
   - `<tr>`：table row (橫的一列)
   - `<td>`：table cell (裡面的各個元素)
   - `<th>`：table header (標頭(會變粗體))

- `<a>`：anchchor 點
   - `<href>`：hypertext reference(輸入網址當作參考來源 )
   - `target`：在a的<>裡面除了輸入href外，也可輸入target，這裡有兩種
      - `target = '_self'`：從現在這個分頁直接跳到該網頁位置
      - `target = '_blank'`：開啟新分頁再跳到該網頁位置
   - (進階)導覽頁使用：

      假如在htlm裡面的各個位置設定id，例如：
      >`<h1 id = "p1">aaa</h1>`
      
      之後假如在最上面加入一個
      >`<a href ="#p1">go to p1</a>`
      
      之後就可以直接透過最上面這個a的標籤，跑到同個頁面的p1標籤這邊。





---
目前看到這：

https://lidemy.com/courses/390445/lectures/5958280

https://github.com/Lidemy/mentor-program-5th-Wangpoching

https://hackmd.io/@benben6515

https://www.evernote.com/shard/s358/client/snv?noteGuid=cb7acfa7-1450-377d-efe3-831387b100fe&noteKey=8e365929e4b9dfb2554d26355b672e04&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs358%2Fsh%2Fcb7acfa7-1450-377d-efe3-831387b100fe%2F8e365929e4b9dfb2554d26355b672e04

還沒看：

導師計畫第一期：
https://lidemy.com/courses/enrolled/378582

沒在用：
https://github.com/ClayGao/My-study/tree/master/Lidemy/week1-4/week1-3


等這一切結束，記得把每週要知道的部分再重新整理在這裡。
以及可以再來玩HTTPGame後續的部分

---

# git commit

git commit -am "3/20"

git branch -M main
git remote add origin https://github.com/Ray7808/LSitduedmyy.git
git push -u origin main

vscode 開啟 terminal：control + ~(左上角)

vscode 開啟 markdown(md 檔)：command + shift + v

查看隱藏資料夾快捷鍵：Command + shift + .

開啟Google Chrome的Devtool 快捷鍵 : command + option + i