const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function() {
            if(request.readyState === 4 && request.status === 200) {
                // sve ok, obradi zahtev
                let data = JSON.parse(request.responseText);
                resolve(data);  // funkcija radi nesto sa podacima koji su stigli sa servera
            }
            else if(request.readyState === 4) {
                // desila se neka greska
                reject("Desila se greska");
            }
        });
        request.open("GET", resource);
        request.send();
    });
}

function submitFormVarijanta2(event) {
    event.preventDefault();
    let nizArtikala = [];
    getItemsReturnPromise("json/stock.json")
    .then(data => {
        data.forEach(artikal => {
            if(artikal.stock == 0) {
                nizArtikala.push(artikal.id);
            }
        });
        return getItemsReturnPromise("json/weights.json");
    })
    .then(data => {
        let totalWeight = 0;
        data.forEach(artikal => {
            if(nizArtikala.includes(artikal.id)) {
                totalWeight += artikal.weight;
            }
        });
        if(totalWeight <= Number(capacity.value)) {
            return getItemsReturnPromise("json/prices.json");
        }
        else {
            div.innerHTML = "Not enough capacity in truck!!";
        }
    })
    .then(data => {
        if(data !== undefined) {
            let totalPrice = 0;
            data.forEach(artikal => {
                if(nizArtikala.includes(artikal.id)) {
                    totalPrice += artikal.price;
                }
            });
            div.innerHTML = `Total price of articles: ${totalPrice}`;
        }
    })
    .catch(msg => {
        div.innerHTML = msg;
    });
}

form.addEventListener("submit", submitFormVarijanta2);