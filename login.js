window.addEventListener("load", init);

const endpoint3 = "https://5c0654d5c16e1200139479ba.mockapi.io/users";

let username = "";
let form;
let user = "";

//sessionStorage.setItem("user", username);

function init() {
  fetchUsers();
  document.querySelector("#submit").addEventListener("click", getUsername);
  form = document.querySelector("form");
}

function getUsername() {
  username = form.userid.value;
  check();
}

function fetchUsers() {
  fetch(endpoint3, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      data.forEach(UserInfo);
    });
}

function UserInfo(Data) {
  user = Data.name;
  console.log(user);
}

function check() {
  if (username === user) {
    window.open("dashboard.html");
  } else {
    alert("Error Username is not correct");
  }
}
