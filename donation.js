window.addEventListener("load", init);

const endpoint1 = "https://5c0654d5c16e1200139479ba.mockapi.io/donationer";

let amountOnSlider;

function init() {
  document.querySelector("#pengeslider").addEventListener("input", showNumber);
  document.querySelector("#donerknap").addEventListener("click", donerClicked);
  // console.log(users);
}
/************************************Slider**********************************************/

function showNumber() {
  console.log(this.value);
  amountOnSlider = document.querySelector(".value").textContent = this.value;
}

/************************************Slider slut**********************************************/

function donerClicked() {
  const e = {
    userID: 1,
    what: [],
    amount: document.querySelector("#pengeslider").value,
    createdAt: Date.now()
  };
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
