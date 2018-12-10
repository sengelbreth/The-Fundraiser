window.addEventListener("load", initList);



const endpoint = "https://5c0654d5c16e1200139479ba.mockapi.io/users";
let new_user;
const form2 = document.querySelector("#user_form");



function initList() {

  listUsers();
  document.querySelector("#create_user").addEventListener("click", opretBruger);
  
} 

function opretBruger(){

const a = {
  name: form2.new_user.value,
  email: form2.email.value,
  phonenumber: form2.phonenumber.value,
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
}


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    console.log("something");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

