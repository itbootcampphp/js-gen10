// Pamćenje/Upisivanje/Smeštanje u lokalnu memoriju
localStorage.setItem("ime", "Stefan");
localStorage.setItem("grad", "Niš");

// Izmena/Update u lokalnoj memoriji
localStorage.setItem("grad", "Leskovac");
// Ukoliko postoji neki key u LS onda vrši update
// Ukoliko ne postoji neki key u LS onda vrši upis (novi unos)

// Preuzimenja iz lokalne memorije
let unetoIme = localStorage.getItem("ime");
console.log(unetoIme);
console.log(localStorage.getItem("grad"));

console.log(localStorage.getItem("godine")); // vraća null jer ključ godine ne postoji u LS

localStorage.removeItem("grad"); // briše iz LS po zadatom ključu