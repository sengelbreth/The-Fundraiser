window.addEventListener("load", initList);

const a = {
    ID: "1",
    name: "Magnus"
  };
  
const b = {
    ID: "2",
    name: "Sophie"
  };

const c = {
    ID: "3",
    name: "Ib"
  };

const endpoint = "https://5c0654d5c16e1200139479ba.mockapi.io/users";

  fetch(endpoint, {
    method: "post",
    body: JSON.stringify(a),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      
    }
    
  })

  fetch(endpoint, {
    method: "post",
    body: JSON.stringify(b),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      
    }
    
  })
  fetch(endpoint, {
    method: "post",
    body: JSON.stringify(c),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      
    }
    
  })

    .then(res => res.json())
    .then(d => {});
    
    function initList() {
        console.log("Init list");
    
    
        listUsers();
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
          
            data.forEach( createUserInfo );
    
    
        });
    
    }
    
    function createUserInfo( userData ) {
        const clone = document.querySelector("#userinfo").content.cloneNode(true);
    
        clone.querySelector("[data-username]").textContent = userData.name;
        clone.querySelector("[data-id]").dataset.userid = userData.id;
    
        document.querySelector("#userlist").appendChild(clone);
    }
