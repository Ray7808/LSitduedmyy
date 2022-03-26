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

- Semantic elements(語意化標籤)
   - `<main>`：可以把整個網頁最重要的東西包起來。

   - `<nav>`：navigation導覽列。

   - `<footer>`：算是一些網站資訊，通常會出現在一個網頁的最底端。

- iframe(較少用)：嵌入網頁，例如：
   >`<iframe src="網頁網址">`

   另外在裡面也可以輸入寬度(weight)或高度(height)。這個東西比較少用，因為現今很多網站都不讓嵌入到別的地方，因此用的頻率就大幅降低。

- `<form></form>`：表單，可以輸入多種不同參數或數值，因此每次需要使用`<input type=(欲輸入的數值型態)>`來進行使用(input標籤前面可以輸入要輸入的字串名稱)：
   - text：`<type = "text">`
   - email：`<type = "email">`
   - password：`<type = "password">`
   - date：`<type = "date">`
   - radio(單選匡)：`<type = "radio">`
   - checkbox(複選匡)：`<type = "checkbox">`

   - **小補充**：<u>若要使用radio時，需要額外輸入name = "(一樣的group)"，這樣才可以只選其中一個，詳情可看Week6的RadioTest.html。</u>
   - **小補充2**：<u>在使用radio時，因為只能選擇那個框框進行勾選，沒辦法直接點選向來勾選，因此為了增加使用者體驗，會再額外輸入id來將對應的選項匡列進去，因此只要點選對應的名稱也可以進行勾選的動作，使用者體驗也會好很多，詳情可看Week6的RadioTest.html。</u>
   - **小補充3**：<u>使用checkbox時，其情形也可以比照radio辦理。</u>
   <br/>
   <br/>

   另外在這之後可以打上：`<input type = "submit" />`   
   代表一個按鈕來進行提交的動作。另外因為submit按鈕預設是「提交」，
   若要修改內容，可以使用`<input type = "submit" value = "(欲修改的文字)" />`
   即可修改對應的內容。

# SEO (Search Engine Optimization 搜尋引擎優化) 
### `<meta>`：主要是給予搜尋引擎妳的一些關鍵字以及內容，方便搜尋引擎找到你來提供一些相關資訊，主要有兩個：
   - keywords
   - description

   可以藉由查詢網頁的html，然後看他們的：
   - `<meta name = "keywords" content="(關鍵字)">`
   - `<meta name = "description" content="(內容的描述)">`

   另外也有一些og開頭的(open graph protocol)也是為了方便爬蟲或搜尋引擎辨識你的一些部分。

### `<ld+json>`：Json-ld(JSON for Linking Data)

   跟上述的部分有點像，這邊會輸入JSON格式的內容，一樣也是幫助電腦跟瀏覽器了解及辨識該網頁的內容。

   <u>假如在網站上看到一些搜尋結果的描述就是從這邊來的</u>

### robots.txt
   給網頁爬蟲看的檔案，假如在一個網站網址的最後輸入：
   >/robots.txt

   即可看到該網頁設置給爬蟲的一些可爬及不可爬的一些資訊
  
  - sitemap：可以在robots.txt看到這個部分，這個主要是讓搜尋引擎知道說它應該爬哪些連結。

### `<link rel ="alternate" hreflang="(各個國家的語言)">`
  這個主要是要告訴搜尋引擎，假如當不同國家的使用者想要搜尋一樣的網站時，這個可以告訴搜尋引擎，他應該要使用哪個頁面來進行呈現。

**備註**：其他也有像是給app使用的，像是`<meta property = "al:ios:app_name">`

**重要備註**：<u>可以利用Google Search Console來查看你的網站的點擊率等等重要資訊</u>
   
     

   





---
目前看到這：

https://lidemy.com/courses/390445/lectures/6224930

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