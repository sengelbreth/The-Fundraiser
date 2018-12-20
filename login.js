window.addEventListener("load", init);

const endpoint3 = "https://5c0654d5c16e1200139479ba.mockapi.io/users";

let username;
let id = endpoint3.id;
let form;
let users = [];

function init() {
  fetchUsers();
  if (sessionStorage.getItem("userId") === null) {
    document.querySelector("#logout").classList.add(`hide`);
  } else {
    document.querySelector("#myBtn").classList.add(`hide`);
    document.querySelector("#signBtn").classList.add(`hide`);
  }
  // tjek userid fra session - og log ind

  document.querySelector("#submit").addEventListener("click", getUsername);
  document.querySelector("#logout").addEventListener("click", signOut);
  form = document.querySelector("form");
}

function getUsername() {
  username = form.userid.value;

  check(username);
}

function signOut() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("userId");
  document.querySelector("#myBtn").classList.remove(`hide`);
  document.querySelector("#signBtn").classList.remove(`hide`);
  document.querySelector("#logout").classList.add(`hide`);
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
  users.push(Data);
}

function check(name) {
  const found = users.find(user => {
    if (user.name === name) {
      return user;
    }
  });

  if (!found) {
    alert("Brugernavnet findes ikke");
  } else {
    if (found.name === "Ib") {
      window.open("dashboard.html");
    } else {
      document.querySelector("#myBtn").classList.add(`hide`);
      document.querySelector("#signBtn").classList.add(`hide`);
      document.querySelector("#logout").classList.remove(`hide`);

      sessionStorage.setItem("user", found.name);
      sessionStorage.setItem("userId", found.id);
    }
  }
}
