# 網頁模版網站

可以使用以下連結直接下載下來察看他們所使用的 html 各個格式長什麼樣子。

參考連結：https://html5up.net

---

## HTML (HyperText Markup Language 超文本標記語言)

- <h1~h6> : h 代表 heading 的意思。

- span 跟 div 的差別：都是匡列東西，但是因為 div 是匡列一整組，因此假如用 div 的話會幫你換行，但是 span 不會。

- img：可以在 src 那邊輸入來源。在同個地方輸入 title 的話，可以在滑鼠移到該圖片上時，看到 title 輸入的文字。而在同個地方輸入 alt 的話，代表假如圖片沒辦法載入時所顯示的替代文字。

- ul(undered list), ol(ordered list)和 li(list item)：這邊的話可以先用 ul 或 ol 包住多個 li 組成的 html，藉由 ul 或 ol 可以判斷其會幫忙編號還是不會。

- pre(preformatted text)和 br(line break)：以往在 html 裡面輸入多個空格，最終網頁呈現的結果只會判定為一個空格，因此透過 pre(`<p></p>`)的這個標籤，即可呈現原先在 html 裡面寫的樣子。br 則是換行的意思。

- `<table>`：表格

  - `<tr>`：table row (橫的一列)
  - `<td>`：table cell (裡面的各個元素)
  - `<th>`：table header (標頭(會變粗體))

- `<a>`：anchchor 點

  - `<href>`：hypertext reference(輸入網址當作參考來源 )
  - `target`：在 a 的<>裡面除了輸入 href 外，也可輸入 target，這裡有兩種
    - `target = '_self'`：從現在這個分頁直接跳到該網頁位置
    - `target = '_blank'`：開啟新分頁再跳到該網頁位置
  - (進階)導覽頁使用：

    假如在 htlm 裡面的各個位置設定 id，例如：

    > `<h1 id = "p1">aaa</h1>`

    之後假如在最上面加入一個

    > `<a href ="#p1">go to p1</a>`

    之後就可以直接透過最上面這個 a 的標籤，跑到同個頁面的 p1 標籤這邊。

- Semantic elements(語意化標籤)

  - `<main>`：可以把整個網頁最重要的東西包起來。

  - `<nav>`：navigation 導覽列。

  - `<footer>`：算是一些網站資訊，通常會出現在一個網頁的最底端。

- iframe(較少用)：嵌入網頁，例如：

  > `<iframe src="網頁網址">`

  另外在裡面也可以輸入寬度(weight)或高度(height)。這個東西比較少用，因為現今很多網站都不讓嵌入到別的地方，因此用的頻率就大幅降低。

- `<form></form>`：表單，可以輸入多種不同參數或數值，因此每次需要使用`<input type=(欲輸入的數值型態)>`來進行使用(input 標籤前面可以輸入要輸入的字串名稱)：

  - text：`<type = "text">`
  - email：`<type = "email">`
  - password：`<type = "password">`
  - date：`<type = "date">`
  - radio(單選匡)：`<type = "radio">`
  - checkbox(複選匡)：`<type = "checkbox">`

  - **小補充**：<u>若要使用 radio 時，需要額外輸入 name = "(一樣的 group)"，這樣才可以只選其中一個，詳情可看 Week6 的 RadioTest.html。</u>
  - **小補充 2**：<u>在使用 radio 時，因為只能選擇那個框框進行勾選，沒辦法直接點選向來勾選，因此為了增加使用者體驗，會再額外輸入 id 來將對應的選項匡列進去，因此只要點選對應的名稱也可以進行勾選的動作，使用者體驗也會好很多，詳情可看 Week6 的 RadioTest.html。</u>
  - **小補充 3**：<u>使用 checkbox 時，其情形也可以比照 radio 辦理。</u>
    <br/>
    <br/>

  另外在這之後可以打上：`<input type = "submit" />`  
   代表一個按鈕來進行提交的動作。另外因為 submit 按鈕預設是「提交」，
  若要修改內容，可以使用`<input type = "submit" value = "(欲修改的文字)" />`
  即可修改對應的內容。

---

## SEO (Search Engine Optimization 搜尋引擎優化)

### `<meta>`：主要是給予搜尋引擎妳的一些關鍵字以及內容，方便搜尋引擎找到你來提供一些相關資訊，主要有兩個：

- keywords
- description

可以藉由查詢網頁的 html，然後看他們的：

- `<meta name = "keywords" content="(關鍵字)">`
- `<meta name = "description" content="(內容的描述)">`

另外也有一些 og 開頭的(open graph protocol)也是為了方便爬蟲或搜尋引擎辨識你的一些部分。

### `<ld+json>`：Json-ld(JSON for Linking Data)

跟上述的部分有點像，這邊會輸入 JSON 格式的內容，一樣也是幫助電腦跟瀏覽器了解及辨識該網頁的內容。

<u>假如在網站上看到一些搜尋結果的描述就是從這邊來的</u>

### robots.txt

給網頁爬蟲看的檔案，假如在一個網站網址的最後輸入：

> /robots.txt

即可看到該網頁設置給爬蟲的一些可爬及不可爬的一些資訊

- sitemap：可以在 robots.txt 看到這個部分，這個主要是讓搜尋引擎知道說它應該爬哪些連結。

### `<link rel ="alternate" hreflang="(各個國家的語言)">`

這個主要是要告訴搜尋引擎，假如當不同國家的使用者想要搜尋一樣的網站時，這個可以告訴搜尋引擎，他應該要使用哪個頁面來進行呈現。

**備註**：其他也有像是給 app 使用的，像是`<meta property = "al:ios:app_name">`

**重要備註**：<u>可以利用 Google Search Console 來查看你的網站的點擊率等等重要資訊</u>

---

## Escape 跳脫(假如想單純顯示標籤)

假如想在網頁顯示`<div></div>`的話，單純在 html 檔是無法顯示的，要使用以下字元：

- `&`：&amp;
- `<`：&lt;
- `>`：&gt;

要使用右邊這些字符進行代替才可以顯示在網頁上。

---

## CSS(Cascading Style Sheets 階層式樣式表)

- 詳情也可以查看 Week6/style.css 的檔案內容。

  較好維護的方式就是在 html 輸入：

  > `<link rel="stylesheet" href="(欲載入的css檔案)">`

  常用的像是：

  > `<link rel="stylesheet" href="./style.css">`

  這樣即可在同個資料夾下的 css 檔案進行編輯。

- id 與 class
  id 在 html 裡面一個名稱只能有一個 id，但是 class 可以有很多個。
  id 在 css 要用`#(該id名稱){}`，而 class 在 css 要用`.(該class名稱){}`

- 同時符合多條件的 selector：
  假如想符合同個標籤又符合特定 class 時，可以在 css 裡輸入：

  > (欲符合的標籤名稱).(欲符合的 class){(css 內容)}

  而想符合多個特定的 class 時，可以輸入：

  > (欲符合的 class1).(欲符合的 class2){(css 內容)}

- 選擇多層不同的架構：
  假如有一個包了多個 div 標籤的 html 檔，在最外層有使用 class
  則內部的 div 標籤可以使用：

  > (該 class 標籤) > div { (css 內容) }

  來撰寫內部 div 標籤的 css。

### 接下來都在+\_~.html 裡面進行:

- `+` 和 `~` 的區別 :
  假如想要選擇在同一層中，
  某個標籤相鄰的標籤，可以輸入 :

  > (該標籤) + (與該標籤相鄰的欲選擇的標籤) { (css 內容) }

  但是假如想要該標籤右邊所有相關的標籤的話，則可以輸入 :

  > (該標籤) ~ (與該標籤相鄰的欲選擇的標籤) { (css 內容) }

  這樣就會把該標籤右邊所有想選擇的標籤都輸入進去了。

- Pseudo-classes : hover
  假如想加入一些特效，但是希望瀏覽器幫你達成的話，
  可以使用 Pseudo-classe，這邊列舉一個最常用的「hover」，
  當滑鼠點擊上去該標籤時，他會使用對應的 css 做改變:

  > (該標籤):hover { (css 內容) }

  **備註**：假如想確認這個會在瀏覽器表現的結果，單純用 Chrome，
  沒辦法直接呈現。可以進到 DevTools，然後先點選有用 hover 的標籤，點選下面 Styles 的下方 filter 的右邊有個:hov，就可以直接勾選該 hover 的標籤來查看在網頁上顯示的效果。

- Pseudo-classes : nth child
  這邊假如有多個相同或不同標籤在一個主標籤底下，
  若想選擇特定標籤進行變化的話，
  可以使用 nth-child，可以輸入 :

  > (欲選擇的標籤):nth-child(n){(css 內容)}

  裡面的 n 可以帶換成想選擇的位置，或甚至可以單純就用 n 代替。假如只用 n 的話，它就會輸入 0~n 進去，然後看有幾個會選到。因此也可以使用 2n，2n+1 這種方程式的用法。

  除此之外也可以輸入 odd 或是 even 這種奇數偶數的方式。

  **備註**：要注意的是因為是選擇特定位置的部分，因此它是先判斷第幾個位置才判斷是不是該標籤，因此假如在第 n 個位置上並不是想使用的標籤的話，它是不會 work 的。

- Pseudo-elements (偽元素)(before / after)
  假如不想在 html 裡面改動東西，可以在 CSS 裡面進行改動，
  比方說在每個標籤前面輸入$的符號，可以輸入:

  > .(欲改動的標籤)::before{
  > content:"$";
  > }

  而後方則可以使用 after 來加入 NTD 等符號:

  > .(欲改動的標籤)::after{
  > content:"NTD";
  > }

  **備註**：為了跟 pseudo-class 區分，會使用::。
  **備註 2**：假如想自動加入該標籤對應的 class 或 data-symbol 可以輸入:

  > .(欲改動的標籤)::after{
  > content:"attr(class)";
  > }

  > .(欲改動的標籤)::after{
  > content:"attr(data-symbol)";
  > }

### CSS Selector 的權重

**接下來都在 weight.html 裡面進行:**

這邊假如有多個 css 選到同個標籤時，後面(下面)的優先。然後可以使用 DevTools 的 Styles 可以看到最終是哪個選到，然後他們選擇的先後順序是什麼。

這邊他們對應的權重順序是

> **id > class > 標籤**

> **越詳細的贏**

但是假如跟直接寫在 html 裡面的相比，
寫在 html 裡面的則會蓋過 CSS 檔案裏面的，
除非又在 css 裡面加入一個 important 標籤，例如:

> CSS 內容 !importmant;

這樣這個就會是最前面的那個順序。

### CSS Background

**接下來都在 cssPart2.html 裡面進行:**
假如今天想調整顏色，除了可以直接輸入顏色名稱，色碼之外，
也可以輸入 rgb(r,g,b)，這個 r,g,b 分別代表紅色、綠色及藍色的數值。

此外也可以輸入 rgba(r,g,b,a)，這個 a 就是透明度的意思。

---

目前看到這：

https://lidemy.com/courses/390445/lectures/5958371

https://github.com/Lidemy/mentor-program-5th-Wangpoching

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

git commit -am "4/4"

git branch -M main
git remote add origin https://github.com/Ray7808/LSitduedmyy.git
git push -u origin main

vscode 開啟 terminal：control + ~(左上角)

vscode 開啟 markdown(md 檔)：command + shift + v

查看隱藏資料夾快捷鍵：Command + shift + .

開啟 Google Chrome 的 Devtool 快捷鍵 : command + option + i
