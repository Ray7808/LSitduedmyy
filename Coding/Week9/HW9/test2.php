<!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="utf-8">
   <title>留言板</title>
   <link rel="stylesheet" href="./test.css" /> 
 </head>

 <body>
   <header class="warning">
     <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
   </header>
   <main class="board">
       <h1 class="board__title">Comments</h1>
       <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
         <div class="board__nickname">
           <span>暱稱：</span>
           <input type="text" name="nickname" />
         </div>
         <textarea name="content" rows="5"></textarea>
         <input class="board__submit-btn" type="submit" />
       </form>
       <div class="board__hr"></div>
       <section>
         <div class="card">
           <div class="card__avatar">
           </div>
           <div class="card__body">
               <div class="card__info">
                 <span class="card__author">huli</span>
                 <span class="card__time">2020-05-06 11:11:11</span>
               </div>
               <p class="card__content">
                   留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容
               </p>
           </div>
         </div>
         <div class="card">
           <div class="card__avatar">
           </div>
           <div class="card__body">
               <div class="card__info">
                 <span class="card__author">huli</span>
                 <span class="card__time">2020-05-06 11:11:11</span>
               </div>
               <p class="card__content">
                   留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容
               </p>
           </div>
         </div>
         <div class="card">
           <div class="card__avatar">
           </div>
           <div class="card__body">
               <div class="card__info">
                 <span class="card__author">huli</span>
                 <span class="card__time">2020-05-06 11:11:11</span>
               </div>
               <p class="card__content">
                   留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容
               </p>
           </div>
         </div>
       </section>

   </main>
 </body>
 </html> 

