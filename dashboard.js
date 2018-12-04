window.addEventListener("load", getDonationer);

const endpoint1 = "https://5c0654d5c16e1200139479ba.mockapi.io/donationer";
const endpoint2 = "https://5c0654d5c16e1200139479ba.mockapi.io/users";



function getDonationer(){   
    fetch(endpoint1, {
        method: "get",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
.then(res => res.json())
.then(data => {
    data.forEach(visDonationer);
});

}

function getUsers(){   
    fetch(endpoint2, {
        method: "get",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
.then(res => res.json())
.then(data => {
    data.forEach(visDonationer);
});

function visDonationer(donationer, users){
    console.log(donationer);
  
    const clone = document.querySelector("#pengeliste").content.cloneNode(true);
    clone.querySelector("[data-name]").textContent = users.name;
    clone.querySelector("[data-amount]").textContent = donationer.Amount;
    document.querySelector("#penge").appendChild(clone);
}};