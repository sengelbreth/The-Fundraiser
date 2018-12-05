window.addEventListener("load", getUsers);
const endpoint2 = "https://5c0654d5c16e1200139479ba.mockapi.io/users";

const clone2 = document.querySelector("#pengeliste").content.cloneNode(true);
function getUsers() {
  fetch(endpoint2, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      data.forEach(visUsers);
    });
}

function visUsers(users) {
  console.log(users);
  clone.querySelector("[data-name]").textContent = users.name;
  document.querySelector("#penge").appendChild(clone2);
}
