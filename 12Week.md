# Rest countries

這邊提供這個網站，上面都是 Restful 形式的一些公開 API，可以嘗試自己串接對應的 API 並確定自己有成功可以使用。

# jQuery

可以直接上網找相關的連結，簡單來說就是可以用比較簡潔的程式碼完成原生 js 要做的事情，只是在大型專案裡面，這樣的寫法還是會造成效能上的問題，因此只能做一些簡單的操作或是動畫呈現。

這邊可以直接搜尋`JQuery`看到對應的頁面，另外因為有些人不喜歡`JQuery`的寫法，也可以直接搜尋`You may not need JQuery`看到`JQuery`跟原生的 js 的對應程式碼。

# Bootstrap

裡面有很多寫好的 css 跟 js，這樣直接引用就可以用出有 RWD 的網頁架構。

另外因為這個是大家都可以使用的部分，不免讓網站看起來都一樣，
這邊提供一個網站叫`Bootswatch`可以稍微根據客戶再客製化一下自己設計的網站頁面。

# CSS 預處理器

SCSS 介紹像是巢狀結構或是參數化的部分(前面加＄)，

要是想用 hover 等等的參數的話，可以在裡面用`&:hover`指向自己。
要是原先 class 是`OAO`然後裡面有`OAO__title`，可以使用`&__title`一樣可以指到裡面的部分。

mixin, extend, function。

# Babel

Javascript 的 compiler，可以將 ES6 的語法轉換回 ES5 或是更前面的語法。

# gulp

用程式的方式把各個要做的事情結合到一起。

這邊可以看一個網站`IFTTT`上面就有一些任務排程的範例可以看。

假如寫完程式碼，想用 babel 打包，再輸出到另外一個資料夾，就可以查一個叫做`babel-gulp`然後按照上面的步驟就可以實現了。

因此若是想找`scss-gulp`也可以自動幫忙 compile scss 檔案。

這邊介紹一個新的部分，因為上傳檔案通常會先將他壓縮，因此這邊有個套件叫`uglify`，可以把一些空白或是多餘的部分刪除，變成只有一行的程式碼，這樣就可以節省程式碼的容量。像是`css uglify`或是`js uglify`。

# Webpack <mark>(重要！)</mark>

原本常見引入模組(module)的概念，在 node.js 上可以用，但是在瀏覽器上沒辦法，
因此需要透過`webpack`來將整個專案的 js 打包成瀏覽器可以使用的。

這邊除了可以使用一般的 webpack 功能來產生瀏覽器可以使用的 html,css,js 語法外，
可以用 webpack server，來及時打包程式碼給使用者。

相比於 gulp(多任務排程，但不是 bundler)，Webpack 可以做網頁(js/scss)等等的 bundle，把所有東西都打包起來。

# Regular expression(正規表達式)

# Mocky(免費自己生成API網站)

這邊這個可以免費幫你生成API，你可以自行輸入想要輸出的資訊，然後看說這個API什麼時候會終止

# Fetch and Promise

# async and await

---

## 目前看到這：

可以等都大概看完後再回來看fetch的介紹跟第十四週後面的系統架構

https://lidemy.com/courses/390624/lectures/23381365

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
