window.addEventListener("load", clickedDonation);

const endpoint1 = "https://5c0654d5c16e1200139479ba.mockapi.io/donationer";

const e = {
    ID: "1",
    Amount: "500"
};



function clickedDonation(){
    document.querySelector("#donerknap").addEventListener("click", donerClicked);

}

function donerClicked(){  
    console.log(e) 
    fetch(endpoint1, {
        method: "post",
        body: JSON.stringify(e),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
.then(res => res.json())
.then(d => {});
}
