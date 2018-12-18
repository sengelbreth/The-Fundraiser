window.addEventListener("load", initList);

const endpoint = "https://5c0654d5c16e1200139479ba.mockapi.io/users";
let new_user;
const form2 = document.querySelector("#user_form");
const modal = document.querySelector("#myModal");
const modal1 = document.querySelector("#signModal");

function initList() {
  // listUsers();
  document.querySelector("#create_user").addEventListener("click", opretBruger);
  document
    .querySelector("#myModal")
    .addEventListener("click", lukModalVindueKlikket);
  document.querySelector("#myBtn").addEventListener("click", visModal);
  document.querySelector(".close").addEventListener("click", lukModal);
  document
    .querySelector("#submit")
    .addEventListener("click", lukModalLoggetInd);
  document
    .querySelector("#cancelBtn")
    .addEventListener("click", lukModalCancel);
  document
    .querySelector("#signModal")
    .addEventListener("click", lukModalSingUpVindueKlikket);
  document.querySelector("#signBtn").addEventListener("click", visModalSignUP);
  document.querySelector(".close1").addEventListener("click", lukModalSignUP);
}

function opretBruger() {
  const a = {
    name: form2.new_user.value,
    email: form2.email.value,
    phonenumber: form2.phonenumber.value
  };
  fetch(endpoint, {
    method: "post",
    body: JSON.stringify(a),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}
/*
function listUsers() {
  fetch(endpoint, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      data.forEach(createUserInfo);
    });
}

function createUserInfo(userData) {
  const clone = document.querySelector("#userinfo").content.cloneNode(true);

  clone.querySelector("[data-username]").textContent = userData.name;
  clone.querySelector("[data-id]").dataset.userid = userData.id;

  document.querySelector("#userlist").appendChild(clone);
} */

// https://www.w3schools.com/howto/howto_css_modals.asp?fbclid=IwAR3Lm87wEaPWQ3QQ0WNPI91R4xUh738SDQFBbC135DojytAdDpPdAtR_bw8

function visModal() {
  modal.style.display = "block";
}

function lukModal() {
  modal.style.display = "none";
}
function lukModalLoggetInd() {
  modal.style.display = "none";
}

function lukModalCancel() {
  modal.style.display = "none";
}

function lukModalVindueKlikket() {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function visModalSignUP() {
  modal1.style.display = "block";
}

function lukModalSignUP() {
  modal1.style.display = "none";
}

function lukModalSingUpVindueKlikket() {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
