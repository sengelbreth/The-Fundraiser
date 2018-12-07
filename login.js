window.addEventListener("load", init);

const endpoint3 = "https://5c0654d5c16e1200139479ba.mockapi.io/users";

let username;
let form;
let users=[];

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
  users.push(Data.name);
  //console.log(user);
}

function check() {
  const found = users.find(user=>{
    if (username === "Ib") {
      window.open("dashboard.html");
      return user;
    }
    if (username === user) {
      return user;
    }
    
  })
  console.log(found)
  if(!found){
    alert("ikke findety")
  }
}