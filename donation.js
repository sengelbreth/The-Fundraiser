window.addEventListener("load", init);

const endpoint1 = "https://5c0654d5c16e1200139479ba.mockapi.io/donationer";

let amountOnSlider;
let checkBox;
let what = [];
let data = sessionStorage.getItem("userId");

function init() {
  document.querySelector("#pengeslider").addEventListener("input", showNumber);
  document.querySelector(".and").addEventListener("input", madDonation);
  document.querySelector(".rodkal").addEventListener("input", madDonation);
  document.querySelector(".fleaskesteg").addEventListener("input", madDonation);
  document.querySelector(".kartofler").addEventListener("input", madDonation);
  document.querySelector("#donerknap").addEventListener("click", donerClicked);
  // console.log(users);
}
/************************************Slider**********************************************/

function showNumber() {
  console.log(this.value);
  amountOnSlider = document.querySelector(".value").textContent = this.value;
}
function madDonation() {
  console.log(what);
  checkBox = document.querySelector(".and").textContent = this.value;
  what.push(checkBox);
}

/************************************Slider slut**********************************************/

function donerClicked() {
  const e = {
    userID: data,
    what: what,
    amount: document.querySelector("#pengeslider").value,
    createdAt: Date.now()
  };

  console.log(e);
  fetch(endpoint1, {
    method: "post",
    body: JSON.stringify(e),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(d => {});
}
