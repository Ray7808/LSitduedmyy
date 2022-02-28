# Week1

(其他人的筆記-開始)

## 請解釋後端與前端的差異。

- 前端：泛指使用者使用瀏覽器時所見到且可與之互動的一切。包括文字，色彩，按鈕，移動到該圖片或影片時會自動放大或自動播放，都是所於前端的範疇。

- 後端：泛指因前端接收到使用者行為（如輸入帳號密碼，關鍵字，點擊按鈕）而接收其所發出的 request 的一切部分。如伺服器端接受到該 request 並將其輸入內容傳入給資料庫 (Database)分析，都是屬於後端範疇。

* 兩者差異；比較明顯的差異是本質與事件順序的不同。

  就一般使用者感官而言，前端所輸出的內容絕大多數都是使用者可見的，而後端的運算邏輯與分析一般使用者通常不易看到或察覺。

  就時點而言，前端所顯現的內容一般最先被使用者接觸，而使用者與前端互動後才會經過後端的接收 request 與回傳 response 的部分，而其又再次回傳至前端給使用者觀覽。

---

## 假設我今天去 Google 首頁搜尋框打上：JavaScri**p**t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 你在搜尋框輸入 Javasript 　並按下 Enter
2. 前端收到 Javascript 這個關鍵字，並將其關鍵字送至伺服器
3. 後端伺服器接收到後，於資料庫經歷過幾千幾萬次的**運算**，彙整最適合的搜尋結果
4. 伺服器將運算與搜尋結果回傳給前端
5. 前端瀏覽器收到結果，轉化為使用者可以閱讀的文字與內容部分

- 在第 3 步驟，關於**運算**的部分，實際上當伺服器接收到關鍵字的同時，Google 資料庫會命令名為 Spider 的搜尋索引功能，這些蜘蛛會先從少量網頁開始，在每一次找到網頁都會再從其蔓延至更多的網頁，當收集了上萬筆資料後，再篩選要取哪些內容，其會分析你關鍵字代表的意思，比如說**判斷關鍵字比較常屬於是別人網址的一部分，或者是標題還是內容，其來自優質網頁還是垃圾網頁**，每經過一次判斷，就過濾一次結果。篩選決定最後要回傳哪些內容給前端至使用者。

  由於這運算過程經歷過幾上萬至上百萬次運算，故以補充說明補上

  而上述所有過程，使用可能僅僅只有 0.5 的時間。

  - 參考資料：

    <https://www.youtube.com/watch?time_continue=137&v=BNHR6IQJGZs>

---

## 請列舉出 5 個 command line 指令並且說明功用

| 指令 |                 功用                  |       舉例       |
| :--: | :-----------------------------------: | :--------------: |
| head |      顯示文件最初算起 n 行的內容      | head -n fileName |
| tail |    顯示文件最後往回算起 n 行的內容    | tail -n fileName |
| diff |          比較兩個文件之差異           | diff fileA fileB |
|  wc  | 統計文件的行數, 詞數與字元數 (左至右) |   wc fileName    |
|  nl  |           印出文件加上行號            |   nl fileName    |

- 參考資料：

  <https://www.jianshu.com/p/3291de46f3ff>

  <http://linux.vbird.org/linux_basic/0220filemanager/0220filemanager.php>

(其他人的筆記-結束)

---

##Command line 指令

| 指令  |        整體名稱         |           功用           |
| :---: | :---------------------: | :----------------------: |
|  LS   |          List           | 印出現在資料夾的所有檔案 |
|  PWD  | Print Working Directory |     印出目前所在位置     |
|  CD   |    Change directory     |        切換資料夾        |
| Ｍ AN |         Manual          |        使用說明書        |

> 註解：cd .. 代表回到上一層的位置

##檔案操作相關指令
| 指令 | 功用 |
| -----: | :----: |
| touch | 建立檔案或是更改時間|
| rm (Remove) | 刪除檔案|
| rmdir | 刪除資料夾|
| mkdir (Make directory) | 建立資料夾|
| cp (Copy) | 複製檔案|

> 註解：cpdir 就可以複製資料夾

| 指令 |               功用               |
| :--: | :------------------------------: |
| grep | 抓取關鍵字以及可以標示關鍵字位置 |
| wget |             下載檔案             |
| curl |           送出 request           |

> 範例：grep (空格) 要抓取的關鍵字 (空格) 檔案名稱
> wget 要自己安裝

---

# Git 版本控制

-請確定你這邊已經安裝好 Cmder 或已經開啟你 MAC 的 Terminal，之後開啟我剛剛給你的 Cmd 指令教學，用 mkdir 指令創建一個資料夾 test1，然後輸入下列指令開始 git 版控

> git init

對了，輸入 ls -al 應該可以看到 .git 資料夾，git init 指令創造了這個資料夾。同理，要移除 Git。原理就是刪除資料夾即可，因此指令 rm -rf .git 可以將 Git 移除。

---

## 開始操作

首先你必須建立一個概念，git 有分為工作區、暫存區與倉庫，檔案進入版控的程序也是如此，大概是如下表格

| 區域名稱 |         代表意思         |       如何進入下一區        |
| :------: | :----------------------: | :-------------------------: |
|  工作區  |   尚未 add 加入暫存區    |        git add 檔名         |
|  暫存區  |  檔案 add 後暫存的地方   | git commit -m "commit 訊息" |
|   倉庫   | 檔案完成版本控管儲存之地 |   這樣已經完成了這一版本    |

在你剛剛輸入 git init 的時候，你就已經替這個資料夾建立了一個 repository，簡稱 repo，代表這個資料夾已經有了版控。你可以輸入 git status 來看目前的版控狀態

> git status 顯示版控狀態

應該會顯示 Nothing to commit，因為沒有任何檔案。

這時候輸入 touch test.js 創建這個檔案，然後我們就可以開始。

再一次輸入 git status，你應該會看到以下資訊 :

> On branch master //目前在 master 這個 branch

> No commits yet //還沒有 commit 檔案

> Untracked files:
> (use "git add <file>..." to include in what will be committed)

> test.js

> nothing added to commit but untracked files present (use "git add" to track)

可以看到 test 被歸類在 Untracked files 底下，也很貼心地告訴你可以使用 git add 加入版控，也是將檔案放入暫存區。

---

## Example

當進入一個 file 並輸入 git init，即可使用 git status 來顯示版控狀態。
這時我先加入一個檔案 test.js，並在 terminal 輸入

> git add test.js

之後輸入 git status 可以看到 changes to be committed(新版本)，
以及 untracked files(這個是假如該文件夾有其他檔案但是還沒加入的話，會在 untracked files 裡面顯示)，

之後 terminal 裡面有寫道假如不想要這個 add 過的檔案加入版本控制的話，可以輸入
git rm --cached <file>來取消版本控制。 (這邊看沒有變化的來輸入)像是：

> git rm --cached test.js

假如想將資料夾裡的所有檔案加入版本控制，可以輸入 git add .
即可將所有檔案加入。

---

## git commit 新建版本

當 add 完檔案之後，可以輸入

> git commit -m "message"

其中-m 是要輸入訊息的意思(一定要輸入不然沒辦法成功)
而 message 則可以修改成你要輸入的內容
輸入完成後就完成版本控制的建立。

---

## 歷史紀錄

這時只要輸入

> git log

即可觀看自己之前 commit 的結果。

---

## 假如今天修改了檔案？

假如今天 commit 完，再做額外的修改後，再輸入

> git status

可以看到 test.js 已經是 modified(被改變的狀態)，
這時要輸入

> git restore test.js

就可以將 test.js 變回原本的狀態。

這邊要提到的是，加入版本控制是每次都要做的。
(只要檔案有做額外的修改就要再額外重新 add 跟 commit)

另外假如想快速檢查不同版本對應的編號的話可以輸入

> git --oneline

這樣就可以查看不同版本對應的不同 commit 的前七碼。

或是 commit 的訊息是輸入錯的話，可以使用

> git commit --amend

就可以直接透過 terminal 改正 commit 的訊息

---

## 想回到過去 git checkout

可以先輸入 git log 來得到不同版本對應的 commit(通常是一對亂碼)，
之後輸入

> git checkout (該版本對應的亂碼)

就可以將檔案切換回該版本的部分。

假如想回到最新版本的話，只要輸入

> git checkout master

就可以回到最新版本這樣。

小技巧：使用

> git checkout --<想變回未修改的檔案名稱>

就可以將已經修改但是還沒 commit 的檔案變回原本的未修改的檔案。

---

## .gitignore

這個是假如當你一個資料夾，裡面有多個檔案
(包含想加入版本控制以及不想的)

這時以往的做法都是在

> git add <想加入版本控制的檔案>

但是現在可以先透過

> touch .gitignore

創造一個想忽略檔案的清單資料夾
之後在 .gitignore 裡輸入想忽略的檔案名稱(含檔名)，
之後輸入

> git status

即可看到想忽略的檔案不在 Untracked files 裡面了。

補充：
假如你想直接透過一行程式完成加入版本控制跟 commit 的動作的話，
可以使用

> git commit -am 'message'

(message 可以輸入要 commit 的訊息)

但是使用這個的大前提是所有檔案之前就有加入版本控制的部分。

所以假如你有新的檔案但還沒加入版本控制的話，需要先透過

> git add .

或是

> git add <欲新增的檔案名稱>

來先加入版本控制之後才可以使用上述的指令做一行的 commit。

---

## Git 總複習

1. 初始化，輸入

   > git init

   將資料夾加入.git

2. 建立.gitignore，輸入

   > git .gitignore

   將不想要的檔案輸入進.gitignore

3. 使用 git add . 或是 git add <檔案名稱>

   > git add .

   > git add <欲加入版本控制的檔案名稱>

   來將檔案加入版本控制(將檔案加入可版本控制的資料夾)

4. 使用 git commit -m "message"或是 git commit -am "message"

   > git commit -m "message"

   > git commit -am "message"

5. 使用 git log 確認版本歷史紀錄
   > git log
6. 當有創建新檔案並想加入版本控制時，輸入

   > git add .

   或是

   > git add <該檔案名稱>

   之後再進行

   > git commit -am "message"

   加入版本控制

7. 切換版本內容，可以輸入

   > git log

   先查看不同版本對應的 commit 亂碼，
   之後再輸入

   > git checkout <該版本亂碼>

   就可以修改編輯該版本的內容

備註：這邊在 git commit 之前，可以輸入

> git diff

查看這次檔案修改的檔案內容，然後按 q 可以跳出。

或是輸入

> git diff commit1 commit2

來比較這兩個版本之間差異的部分

---

## Git 的平行時空 git branch

這邊可以嘗試輸入

> git branch -v

可以看到目前所在的 branch 資訊，
其中\*號位置代表目前所在的 branch

如何創建新的 branch 則是輸入

> git branch <新的 branch 名稱>

範例：假設輸入

> git branch week1

來創建一個 week1 的新 branch，
再輸入

> git branch -v

則可以看到已經創建完成。

另外假如要刪除 branch 則要輸入

> git branch -d <要刪除的 branch>

範例：假設輸入

> git branch -d week1

就可以刪除剛剛創建的新 branch。

假如當輸入的 branch 輸入錯的話，
可以使用

> git branch -m <新的 branch 名稱>

即可修改成正確的 branch 名稱

---

## 使用 git checkout 跳到不同 branch

假如已經透過

> git branch <新的 branch 名稱>

可以輸入

> git checkout <新的 branch 名稱>

來跳到新的 branch。

另外使用

> git merge <branch 的名稱>

可以將各個 branch 合併到同一個 branch，
因此最好先切換到主要的 branch，像是 master(一開始創建的)，可以輸入

> git checkout master

之後再輸入上述的

> git merge <要加入 master 的 branch>

之後兩者就合而為一了，
只是原先新的 branch 還在，因此可以使用

> git branch -d <新的 branch 名稱>

來刪除。

## 遇到衝突怎麼辦？使用 git conflict

(別人的筆記 開始)

有一天你想到，你 Netflix 原本的紀錄和你之前新開的紀錄都有用來看 JOJO 的奇妙冒險，那合併之後的集數紀錄會以哪個為主呢？

在 Git 之中，如果 branch A merge branch B，而兩個檔案較之於最初的狀況而言都有做修改，那麼 merge 的時候 Git 會告訴你是哪個文件有這樣的衝突，並且你可以進入該文件自由選擇你想保留或刪除哪一個部分（兩者文件內容全留下當然也可以）

假設這個都有做修改的文件叫做 jojo.js，那麼 merge 時發現衝突時會顯示：

Auto-merging jojo.js
CONFLICT (content): Merge conflict in jojo.js
Automatic merge failed; fix conflicts and then commit the result.
意思是當 Git 要自動幫你 merge 時，發現 jojo.js 這個檔案有衝突問題，需要你修正

輸入 git status 也可以看到輸出 Unmerged paths: 底下有 both modified: jojo.js

進入 jojo.js 檔案，相異之處會特別標示

以剛剛 Week1 合併至 master 為例

============ 用來分開兩個 branch 各自不同的部分

|jojo.js| :-:|:-:|:-: |<<<<<<<<<<<<<<<< HEAD| |master 內容| |====================| |week1 內容| |>>>>>>>>>>>>>>>> week1| |其他相同的部分

至此，是一個自由編輯的模式，所以你要留那一個 branch 的部分都是可以的。

(別人的筆記 結束)

================

今天看到這(未修改):

https://lidemy.com/courses/379441/lectures/6026909

https://github.com/ClayGao/My-study/blob/master/Lidemy/week1-4/week1-3/Git%20commands.md

https://github.com/Lidemy/mentor-program-5th-Wangpoching

https://www.mdeditor.tw

vscode 開啟 terminal：control + ~(左上角)

vscode 開啟 markdown(md 檔)：command + shift + v

查看隱藏資料夾快捷鍵：Command + shift + .

開啟Google Chrome的develop tool 快捷鍵 : command + option + i
