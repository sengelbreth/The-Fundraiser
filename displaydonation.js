window.addEventListener("load", getDonationer);

const endpoint1 = "https://5c0654d5c16e1200139479ba.mockapi.io/donationer";
const endpoint2 = "https://5c0654d5c16e1200139479ba.mockapi.io/users";

let donationer=[];
let users=[];

function getDonationer() {
  fetch(endpoint1, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      //data.forEach(visDonationer);
      donationer=data;
      console.log("1")
      fetchId();
    });
    
}

function visDonationer(donationer, users) {
  console.log("3")
  donationer.forEach(donation=>{
    const user = users.find(function(user) {
      return user.id == donation.userID;
    });
    const clone = document.querySelector("#pengeliste").content.cloneNode(true);
    clone.querySelector("[data-name]").textContent = user.name;
    clone.querySelector("[data-amount]").textContent = donation.amount;
    document.querySelector("#penge").appendChild(clone);
  })
  
}

function fetchId() {
  fetch(endpoint2, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      //data.forEach(idInfo);
      users=data;
      console.log("2")
      visDonationer(donationer, users)
    });
}

function idInfo(Data) {
  console.log(user)
  //user.create(Data.id);
  //console.log(user);
}