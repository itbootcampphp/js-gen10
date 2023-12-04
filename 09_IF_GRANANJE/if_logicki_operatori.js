/*
15. ZADATAK
U promenljivu uneti broj koji predstavlja temperaturu vazduha. 
Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih 
ili veća od 40 stepeni Celzijusovih
*/
let t = 25;

// 1. način
if(t<-15 || t>40) {
    console.log(`Ekstremna temperatura`);
} else {
    console.log(`Nije ekstremna temperatura`);
}

// 2. način
if(t>=-15 && t<=40) {
    console.log(`Nije ekstremna temperatura`);
} else {
    console.log(`Ekstremna temperatura`);
}


/*
16. ZADATAK
Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
*/
let datum = new Date();
let godina = datum.getFullYear();
godina = 2019;
if((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0) {
  console.log(`Godina je prestupna`);
} else {
  console.log(`Godina nije prestupna`);
}

/*
17. ZADATAK
Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. 
Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
U suprotnom ispisati “zatvoreno”.
(Ko bude imao vremena: Ukoliko je butik trenutno otvoren, 
    prikazati sličicu otvorenih vrata na ekranu. 
    Ukoliko je butik trenutno zatvoren, prikazati sličicu zatvorenih vrata.)
*/
let dan = datum.getDay();
let vreme = datum.getHours();
if (dan != 0 && dan != 6 && vreme >= 9 && vreme < 20) {
    document.write('<img src="https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">');
} else if ((dan == 6 || dan == 0) && vreme >= 10 && vreme < 18){
    document.write('<img src="https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">');
} else {
    document.write('<img src="https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">');
}

/*
18. ZADATAK
Odrediti i u paragrafu ispisati najveći od tri uneta broja:
a) Samo uz pomoć if naredbi (bez korišćenja if-else strukture, logičkih operatora ili ugnježdenog grananja)
b) Korišćenjem if – else strukture
c) Korišćenjem ugnježdenog grananja.
d) Korišćenjem logičkih operatora
*/

// a) 
let b1 = -6;
let b2 = 15;
let b3 = 10;

let maks = b1;
if(b2 > maks){
    maks = b2;
}
if(b3 > maks) {
    maks = b3;
}
console.log(`Najveći od brojeva je ${maks}`);

// b)
let maksimum = null;
if(b1>b2) {
    maksimum = b1;
}
else {
    maksimum = b2;
}
if(maksimum < b3) {
    maksimum = b3;
}
console.log(`Najveći od brojeva je ${maksimum}`);

// c)
if(b1 > b2) {
    if(b1 > b3) {
        console.log(`Najveći je ${b1}`);
    } else {
        console.log(`Najveći je ${b3}`);
    }
} else if(b2 > b3) {
    console.log(`Najveći je ${b2}`);
} else {
    console.log(`Najveći je ${b3}`);
}

// d)
if(b1>b2 && b1>b3) {
    console.log(`Najveći od brojeva je ${b1}`);
} else if(b2>b3) {
    console.log(`Najveći od brojeva je ${b2}`);
} else {
    console.log(`Najveći od brojeva je ${b3}`);
}