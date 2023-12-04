/*
6. ZADATAK
Preuzeti sa računara koji je dan u nedelji i ispitati da li je to radni dan 
ili je u pitanju vikend. 
*/
let datum = new Date();
let dan = datum.getDay();
if(dan == 0) {
  console.log(`Vikend je.`);
}
else if(dan == 6) {
  console.log(`Vikend je.`);
}
else {
  console.log(`Radni dan je.`);
}

/*
7. ZADATAK
Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati,
u ostalim slučajevima ispisati dobro veče.
*/
let s = datum.getHours();
if (s < 12) {
    console.log("Dobro jutro");
} else if (s < 18) {
    console.log("Dobar dan");
} else {
    console.log("Dobro veče");
}

/*
8. ZADATAK
Radno vreme jedne programerske firme je od 9h do 17h. 
Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
09:00 - firma je otvorena
17:00 - firma je zatvorena
*/
let sati = datum.getHours();
if(sati < 9) {
    console.log(`Firma trenutno ne radi`);
} else if (sati >= 17) {
    console.log(`Firma trenutno ne radi`);
} else {
    console.log(`Firma radi`);
}

/*
9. ZADATAK
Za unet sat početka i sat kraja radnog vremena dva lekara,  
ispisati DA ukoliko se smene lekara preklapaju, 
u suprotnom ispisati NE.
(Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, 
ovo se podrazumeva i ne ispitivati dodatno)

NE -  k1<p2   ili    k2<p1
*/
let p1 = 16;
let k1 = 21;
let p2 = 18;
let k2 = 23;
if(k1<=p2) {
    console.log("NE");
} else if(k2<=p1) {
    console.log("NE");
} else {
    console.log("DA");
}

/*
10. ZADATAK
Uneti dva broja. Većem  broju ispisati sledbenik, a manjem broju ispisati prethodnik.
*/
let a = 7;
let b = 17;
if (a > b) {
    console.log(++a);
    console.log(--b);
} else if (a < b) {
    console.log(--a);
    console.log(++b);
} else {
    console.log("Brojevi su jednaki");
}

/*
11. ZADATAK
Učitati broj ispitati na ekranu “Ceo broj”, ukoliko je učitani broj ceo. 
*/
// 1. način
let c
if (c % 1 != 0) {
    console.log("Nije ceo broj");
} else {
    console.log("Ceo broj");
}

// 2. način
a = 15.6;
if (a === Math.round(a)) {
    console.log("Ceo broj");
} else {
    console.log("Nije ceo broj")
}
