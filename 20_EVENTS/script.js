// 1. Dohvatiti element na koji želimo da postavimo osluškivač
let btnHello = document.getElementById("hello");

// 2. Postavimo osluškivač na element koji smo dohvatili
btnHello.addEventListener("click", () => {
    console.log("Hello!");
});

btnHello.addEventListener("dblclick", () => {
    console.log("Hello hello!!");
});

// 1. ZADATAK
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBroji = document.getElementById("broji");
let pIspisBroja = document.getElementById("ispisBroja"); 
let br = 1;
btnBroji.addEventListener("click", () => {
    console.log(`Broj je ${br}`);
    pIspisBroja.innerHTML = `Broj je ${br}`; // 2. ZADATAK
    br++;
});

// 3. ZADATAK
let b = 0;

// 5. ZADATAK
// Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
let btnIspisiTekst = document.getElementById("ispisiTekst");
let pIspisTeksta = document.getElementById("ispisTeksta");
let inputTekst = document.getElementById("tekst");

btnIspisiTekst.addEventListener("click", () => {
    let preuzmiTekst = inputTekst.value;
    pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
});