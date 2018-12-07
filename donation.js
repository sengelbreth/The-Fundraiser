window.addEventListener("load", clickedDonation);

const endpoint1 = "https://5c0654d5c16e1200139479ba.mockapi.io/donationer";

let amount;

const e = {
  userID: 1,
  what: [],
  amount: 500,
  createdAt: Date.now()
};

document.querySelector("#pengeslider").addEventListener("input", showNumber);

function showNumber() {
  amount = document.querySelector(".value").textContent = this.value;
}

function clickedDonation() {
  document.querySelector("#donerknap").addEventListener("click", donerClicked);
}

function donerClicked() {
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
