const title = document.querySelectorAll(".section__question__title");
const desc = document.querySelectorAll(".section__question > p");
console.log(desc[0]);

title[0].addEventListener("click", () => {
  console.log("Click0!");
  if (desc[0].hidden == true) {
    desc[0].hidden = false;
  } else {
    desc[0].hidden = true;
  }
});
title[1].addEventListener("click", () => {
  console.log("Click1!");
  if (desc[1].hidden == true) {
    desc[1].hidden = false;
  } else {
    desc[1].hidden = true;
  }
});
title[2].addEventListener("click", () => {
  console.log("Click2!");
  if (desc[2].hidden == true) {
    desc[2].hidden = false;
  } else {
    desc[2].hidden = true;
  }
});
