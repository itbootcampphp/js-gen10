let getJSON = (resource, callback) => {
    //  1. Kreiranje XML objekta
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if(request.readyState == 4 && request.status == 200) {
            // Sve OK
            let data = JSON.parse(request.responseText);
            callback(data, undefined);
        }
        else if(request.readyState == 4) {
            // Nešto nije OK
            callback(undefined, "Desila se greška");
        }
    });

    // 2. Otvaramo kreirani zahtev
    request.open("GET", resource);

    // 3. Slanje zahteva
    request.send();
}

getJSON( "../JSON/prvi.json", (data, err) => {
    if(data) {
        console.log(data); // Sve prošlo OK u prvi.json i vraća podatke (data) iz prvi.json
        // Ako je sve bilo OK sa prvim fajlom, onda uzmi drugi.json fajl
        getJSON("../JSON/drugi.json", (data, err) => {
            if(data) {
                console.log(data); // Sve prošlo OK u drugi.json i vraća podatke (data) iz drugi.json
                getJSON("../JSON/treci.json", (data, err) => {
                    if(data) {
                        console.log(data); // Sve prošlo OK u treci.json
                    } else {
                        console.log(err); // Ispisuje grešku iz treci.json
                    }
                });
            } else {
                console.log(err); // Ispisuje grešku iz drugi.json
            }
        });
    } else {
        console.log(err); // Ispisuje grešku iz prvi.json
    }
});



console.log("KRAJ FAJLA");
