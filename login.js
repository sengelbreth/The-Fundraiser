
window.addEventListener("load", init);

const endpoint3 = "https://5c0654d5c16e1200139479ba.mockapi.io/users";

let username = "";
let form ;


sessionStorage.setItem("user", username);

function init(){
    fetchUsers();
    document.querySelector("#submit").addEventListener("click", getUsername); 
    form = document.querySelector("form");

}

function getUsername(){
    console.log("kom nu")
    username = form.userid.value;
    console.log(username);
    
    
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

        data.forEach(check);
      });
      
  }

/* function createUserInfo(userData) {
const clone = document.querySelector("#userinfo").content.cloneNode(true);

    clone.querySelector("[data-username]").textContent = userData.name;
    clone.querySelector("[data-id]").dataset.userid = userData.id;
  
    document.querySelector("#userlist").appendChild(clone);
    console.log(userData); 
  } */

function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(username == "Ib" )
  {
    window.open('dashboard.html')/*opens the target page while Id & password matches*/
  }
  else (username == "Sophie" )
  {
    window.open("index.html", "_self")/*opens the target page while Id & password matches*/
  }
 /*  else
 {
   alert("Error Username is not correct") 
  }*/
} 






