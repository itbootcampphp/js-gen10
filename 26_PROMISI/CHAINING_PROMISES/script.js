let getJSON = resource => {
    
    const request = new XMLHttpRequest(); //  1. Kreiranje XML objekta
    request.open("GET", resource); // 2. Otvaramo kreirani zahtev
    request.send(); // 3. Slanje zahteva

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if(request.readyState == 4 && request.status == 200) {
                // Sve OK
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState == 4) {
                // Nešto nije OK
                reject("Došlo je do greške");
            }
        });
    });  
}

getJSON("../JSON/prvi.json").then(sadrzaj => {
    console.log("prvi.json", sadrzaj); // Ako je prvi.json resolved ispisuje njegove podatke
    return getJSON("../JSON/drugi.json"); // Vraća instancu Promise, koja može imati .then i .catch
}).then(sadrzaj2 => {
    console.log("drugi.json", sadrzaj2); // Ako je drugi.json resolved onda ispisuje njegove podatke
    return getJSON("../JSON/treci.json");
}).then(sadrzaj3 => {
    console.log("treci.json", sadrzaj3); // Ako je treci.json resolved ispisuje njegove podatke
}).catch(greska => {
    console.log("Rejected: ", greska); // Ako je ma jedan fajl bio rejected, upada u catche granu
});

console.log("KRAJ FAJLA");
