const API = "https://foodish-api.com/api/images/pizza/";

const pizzaContainer = document.getElementById("pizza-data");

async function getAllpizza() {

    try {
        const res = await fetch(API, {
            method: "GET",
        });
        const data = await res.json();
        appendNewpizza(data);
    } catch (error) {
        console.log(error);
    }
}

getAllpizza();

function appendNewpizza(pizza){
    const mainDiv = document.createElement("div");
    mainDiv.className = "card";
    mainDiv.innerHTML +=`
    <p><span>Pizza image </span></p>
    <p><span>URL : ${pizza.image}</span></p>
    <img src=${pizza.image} alt="image" width="600" height="400">
    `;
   pizzaContainer.append(mainDiv);
};