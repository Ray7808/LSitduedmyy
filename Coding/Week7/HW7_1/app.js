let error = document.querySelectorAll(".error"); //先把所有error抓起來
let radio = document.querySelectorAll("input[type=radio]");
//console.log(radio[0].parentElement[1].labels[0].innerText);

//當提交表單時
document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  let valid = 0;
  const inputs = document.querySelectorAll("input[type=text]");
  for (let i = 0; i < inputs.length - 1; i++) {
    if (inputs[i].value == "") {
      error[i].hidden = false;
    } else {
      error[i].hidden = true;
      valid = valid + 1;
    }
  }
  let status = "";
  if (radio[0].checked == true) {
    status = radio[0].parentElement[0].labels[0].innerText;
    valid++;
  } else if (radio[1].checked == true) {
    status = radio[0].parentElement[1].labels[0].innerText;

    valid++;
  }

  //完成
  let name = inputs[0].value;
  let email = inputs[1].value;
  let num = inputs[2].value;
  if (valid == 5) {
    alert(`您好，報名資訊如下：
    暱稱：
    電子郵件：${name}
    手機號碼：${email}
    報名類型：${status}
    活動消息來源：${num}`);
  } else {
    alert("請填寫資料!");
  }
  //console.log(valid);
  valid = 0;
});
