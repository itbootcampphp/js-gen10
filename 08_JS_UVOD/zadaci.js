// Zadatak 1
let sati = 23;
let minuti = 0;

let odPonoci = sati * 60 + minuti;
console.log("Minuta od ponoci: " + odPonoci);

console.log("sati i min od ponoci:" + (Math.floor(odPonoci/60)) + " " + (odPonoci%60));

//console.log("Minuta od ponoci: " + (sati * 60 + minuti));

// Zadatak 1.1 - minuta ostalo do ponoci
let doPonoci = 24 * 60 - odPonoci;
console.log("Minuta do ponoci: " + doPonoci);


// Zadatak 6.
// Prva konverzija (eur -> din)
let ukupnoEur = 70;
let kursEur = 117.29;

let ukupnoDin = ukupnoEur * kursEur;
console.log(ukupnoDin);

// Druga konverzija (din -> eur)
let novacDin = 5000;
let novacEur = novacDin / kursEur;
console.log(novacEur);


// Zadatak 7.
// Prva konverzija (eur -> dol uz pomoc din)
let brojEur = 100;
let kursDol = 106.79;

//let brojDin = brojEur * kursEur;
//let brojDol = brojDin / kursDol;

let brojDol = brojEur * kursEur / kursDol;
console.log(brojDol);

// Druga konverzija (dol -> eur uz pomoc din)
// ........

// Zadatak 8.
// ........

// Zadatak 9.
// ........

// Zadatak 4.
let datum = new Date(); // datum je promenljiva koja sadrzi info o trenutnom datumu i vremenu
let god = datum.getFullYear(); 
let mes = datum.getMonth();
let dat = datum.getDate();
console.log(god, mes + 1, dat);