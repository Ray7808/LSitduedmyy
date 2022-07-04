let url =
  "https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery";
const showPrizeResult = (myJson) => {
  const prizeResult = myJson.prize;
  console.log(prizeResult);

  const priceChoices = {
    FIRST: "恭喜你中頭獎了！日本東京來回雙人遊！",
    SECOND: "二獎！90 吋電視一台！",
    THIRD: "恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！",
    NONE: "銘謝惠顧",
  };
  const Background = document.querySelector(".Image__related");
  console.log(Background);
  if (prizeResult == "FIRST") {
    Background.innerHTML = `
  <div class="Image__related">
  <div class="Image__background_v1">
    <div class="Image__background__black">
        <h3>${priceChoices.FIRST}</h3>
       
        <button class="price__again">再抽一次</button>
      
    </div>
  </div>
</div>`;
  } else if (prizeResult == "SECOND") {
    Background.innerHTML = `
    <div class="Image__related">
    <div class="Image__background_v2">
      <div class="Image__background__black">
        
          <h3>${priceChoices.SECOND}</h3>
         
          <button class="price__again">再抽一次</button>
     
      </div>
    </div>
  </div>`;
  } else if (prizeResult == "THIRD") {
    Background.innerHTML = `
    <div class="Image__related">
    <div class="Image__background_v3">
      <div class="Image__background__black">
     
          <h3>${priceChoices.THIRD}</h3>
         
          <button class="price__again">再抽一次</button>
    
      </div>
    </div>
  </div>`;
  } else if (prizeResult == "NONE") {
    Background.innerHTML = `
    <div class="Image__related">
    <div class="Image__background_vnone">
      <div class="Image__background__black">
        
          <h2>${priceChoices.NONE}</h2>
         
          <button class="price__again">再抽一次</button>
       
      </div>
    </div>
  </div>`;
  }
  prizeButton = document.querySelector(".price__again");
  prizeButton.addEventListener("click", (e) => {
    console.log(e.target.classList.contains("price__submit"));
    e.target.classList.contains("price__again");
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          return response.json();
        } else {
          alert(errMsg);
        }
      })
      .then((myJson) => showPrizeResult(myJson))
      .catch((error) => {
        console.log(error);
      });
  });
};
const errMsg = "請重新點選一次";

let prizeButton = document.querySelector(".price__submit");

prizeButton.addEventListener("click", (e) => {
  console.log(e.target.classList.contains("price__submit"));
  if (e.target.classList.contains("price__submit")) {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          return response.json();
        } else {
          alert(errMsg);
        }
      })
      .then((myJson) => showPrizeResult(myJson))
      .catch((error) => {
        console.log(error);
      });
  } else if (e.target.classList.contains("price__submit")) playAgain();
});
