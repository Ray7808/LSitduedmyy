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

---

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

---

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

---

### CSS Background

**接下來都在 cssPart2.html 裡面進行:**

- 顏色與透明度

  假如今天想調整顏色，除了可以直接輸入顏色名稱，色碼之外，
  也可以輸入 rgb(r,g,b)，這個 r,g,b 分別代表紅色、綠色及藍色的數值。

  此外也可以輸入 rgba(r,g,b,a)，這個 a 就是透明度的意思，可調整 0~1。

- 背景圖片

  另一方面假如想加入背景圖片的話，可以使用 background: url()，例如：

  > background: url(./bg.jpg);

  就可以進行新增的部分。

  另外假如假如透過 width 或 height 調整寬度高度以致於圖片重複做使用的話，
  可以輸入 no-repeat，這樣就可以只顯示一張圖片的大小這樣。

  而想要調整圖片到畫面中間則可以輸入 `center center`
  (兩個 center 是 x 跟 y 軸都要在中間)，或是可以輸入`bottom`或是`left`、`right`進行調整。

  以及透過`background-size`去進行背景大小的調整。

  > background-size: 50% 50% /_ 長寬進行設置 _/

  或是設置單一的`width`或`height`之後，利用

  > background-size:cover;

  這樣就可以在不改變寬度或高度的情況下，
  調整畫面大小已達到隨大小調整圖形的效果。

  ***

  ### 邊框 border 與 border-radius

  這邊可以輸入:

  > border: 20px solid green;

  來得到邊框都是 20px 的實心綠線。

  而 border-radius 則是在邊框尖角的地方加上圓角的部分。

  這邊有個小補充是可以再額外輸入 outline，
  outline 算是也是外框，
  這邊加入 outline 並不會動到位置，
  但是 border 會改變元素的位置。

  這邊有個小應用是想畫圓形的話，可以使用

  > border-radius:50%; /_ 或是 width 跟 height 的一半就可以變 _/

  另外假如想畫三角形的話：可以使用

  > background:transparent;

  > width:0px;

  > height:0px;

  > border-top:100px solid transparent;

  > border-bottom:100px solid red;

  > border-left:100px solid transparent;

  > border-right:100px solid transparent;

  這樣就可以得到紅色的三角形，
  然後想調整大小的話就可以針對上面的 100px 去進行調整。

  ***

  ### margin and padding(邊距)

  padding 可以把邊緣撐大(也有 padding-top、padding-right 等等的元素)，
  直接輸入

  > padding: 10px 20px;

  第一個數值代表上下，第二個數值代表左右這樣。

  `padding是元素的內邊距，margin則是外邊距。`

  **注意** 這邊因為瀏覽器都會固定幫你的邊緣加 margin:8px，
  因此很多網頁都會特別再多加一行:

  > body{margin:0px;}

  來把邊緣的白色部分去除。

  ***

  ### 文字相關 color、font-family、font-weight 與 line-height

  - 大小粗細與字體：

    這邊可以針對文字進行調整，比方說像是`font-size`是調整文字大小。

    而`font-weight`則是調整文字粗細，這邊可以利用
    `font-weight:bold`代表文字是使用粗體。

    而字體的話可以使用`font-family`，例如：

    > font-family:新細明體;

  - 字句與行高：
    其他像是字距`letter-spacing`以及行高`line-height`也可以進行調整。

    這邊行高`line-height`可以使用

    > line-height:1.5em

    代表字體大小的 1.5 倍行高。

    另外可以使用`text-align`就可以讓文字在不同的位置。
    但是假如因為使用這個的話有時文字太多的話就會超出位置，
    因此可以使用`padding`去把整個區塊撐開，
    這樣使用上比較不會有問題。

  - 調整文字空行：
    假如有文字太長等等的問題可以使用`word-break`，例如：

    > word-break:break-all

    > word-break:breakword

    `break-all`是不管單字只要在分行位置就強制分行，
    `breakword`是按照字來進行分行。

    另外想要不管怎麼樣就想在同一行的話，可以使用`white-space`：

    > white-space:nowrap;

    這樣就可以總是在同一行顯示。

  ### 超出寬度已進行調整：overflow 與 text-overflow：

  - overflow:

    假如內容超出原先設定的寬度或高度時，但是之後的東西不想給別人看到時，
    可以使用`overflow`：

    > overflow:hidden

    這樣超出的東西就會被隱藏起來。

    而超出區域還是想被看到的話，可以使用`scroll`或是`auto`

    > overflow:scroll

    > overflow:auto

    這邊`scroll`是不管有沒有超出都會出現滾輪，
    `auto`則是有超出的話才會出現滾輪可以滾動這樣。

  - text-overflow:
    這邊`text-overflow`主要是針對文字上的部分，
    但是這邊有個額外的小功能是

    > text-overflow:ellipsis;

    代表假如文字超出範圍的話，會自動顯示...的結果。

  ### 漸變的效果：transition

  假如有針對一些標籤使用 hover(滑鼠滑上去會變化)的功能，
  但是因為是馬上變化，觀感沒有那麼地好，
  因此會在原先未使用 hover 的標籤裡面輸入

  > transition: all 1s;

  這樣的話它會使有用 hover 的該標籤有一個逐漸變化的效果(持續 1 秒)。

  **transition 備註**：第一參數是想對哪個部分有漸變的效果，
  第二個是持續的時間，第三個則是可以調整漸變的效果。
  第三個可以先在 css 裡 transition 的第三個參數輸入`ease-in`
  之後打開 DevTools 然後去 styles 那邊可以點選`ease-in`的部分，
  可以調整它變化的幅度，然後再把對應的參數輸入回 css 裡面就可以了。

  這邊要注意的是
  `transition不要放在hover裏面`
  因為這樣會導致當你滑鼠移開時，就沒有那個漸變的效果。

  另外 transition 假如有改屬性的話，可能會有`效能問題`。

  **transition 備註 2**：通常在使用 transition 外，
  也會針對 hover 裡面額外輸入一個參數：

  > cursor:pointer;

  這個是當滑鼠移上去時，
  其鼠標會變成一個可點選的圖示，
  會增加使用者體驗。

---

### CSS position 定位

**接下來都在 part4.html 裡面進行:**

- relative 相對定位

  這邊可以輸入

  > postive:relative;

  之後就可以加入

  > top:20px

  來移動 20px 等等(可以調上下左右都行)

- fixed 固定定位

  如同字面上的位置，不管怎麼移動，他都會固定在一個固定的位置。
  這邊可以輸入

  > postive:fixed;

- Absolute 絕對定位
  絕對定位要針對某個參考點進行絕對定位，
  因此就是網上找，找到不是預設 static 的元素，
  這邊在`class="box"`這邊可以找到，
  因此就可以定在那個位置，
  但是假如沒有的話，就會最終找到 body 並進行對應的定位這樣。

  這邊可以輸入

  > postive:absolute;

  即可以進行使用。

  **小備註**：這邊提到假如有元素事先使用絕對定位時，
  之後再新增元素在一樣的子標籤時，
  因為使用絕對定位會使該標籤脫離原先的排版流程，
  因此後續的元素會出現在原先絕對定位前的標籤在的位置。
  就是假裝已經絕對定位的標籤不存在，
  然後來做排版的部分。

### 決定圖層順序 z-index

這邊先將兩個標籤用不同顏色匡起來並放在同個位置，
可以看到其中一個個標籤被覆蓋住，
這邊可以在該標籤輸入

> z-index:(數值(可正可負，可以決定該圖層順序))

就可以將原先被覆蓋的標籤拯救回來。

### 黏住 sticky (新瀏覽器才有)

這邊可以輸入

> position:sticky;

一般在使用上有沒有這個屬性其實都沒差，
但是假如將瀏覽器的畫面往下滾動，
該標籤會在最上端那邊就再也上不去了，
算是一個蠻有趣的屬性。

### CSS 調整 part5

**接下來都在 part5.html 裡面進行:**

- transform
  這邊假如要針對標籤進行放大縮小旋轉等功能的話，
  可以使用`transform`，
  其範例在 part5 裡面顯示，
  另外也可以透過 DevTools 裡面看到還有其他相關的功能可以使用。

- inline, block, inline-block

  常見的像是 div、h1 或是 p 等等的標籤就是 block 標籤(可調寬高也可調上下邊距，但是不可併排)

  而 span 或是 a 等等的標籤則是 inline 標籤(不可調寬高也不可調上下邊距，但是可併排)
  因此假如輸入

  > display:inline-block;

  就可以擁有 inline 跟 block 的各個優點。

---

目前看到這：

HW6先把基本版面生出來，在看怎麼切版。

https://lidemy.com/courses/390445/lectures/5958412

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
