console.log(`Funkcije`);

////////////////////////////////////////////////////////
// Funkcija za ispis u konzoli
////////////////////////////////////////////////////////

function zdravo() {
    console.log("Hello world!");
}
zdravo(); // Poziv funkcije
zdravo();

////////////////////////////////////////////////////////
// Funkcija za ispis prosleđenog teksta u konzoli (prosleđuje se 1 parametar)
////////////////////////////////////////////////////////

function ispisiTekst(tekst) {
    console.log(tekst);
}
ispisiTekst("Ovo je neki tekst"); // Poziv kada prosleđujemo neku vrednost
ispisiTekst("Ovo je neki drugi tekst");
let t = "Moj tekst";
ispisiTekst(t);

////////////////////////////////////////////////////////
// Funkcija kojoj se prosleđuje više parametara
////////////////////////////////////////////////////////

function imePrezime(ime, prezime, godine) {
    console.log(`Ulogovana osoba je ${ime} ${prezime}. Osoba ima ${godine} god.`);
}
imePrezime("Jelena", "Matejić", 29);
let imeOsobe = "Stefan";
let godineOsobe = 34;
imePrezime(imeOsobe, "Stanimirović", godineOsobe);
imePrezime(30, "Milica", 1993); // Vodite računa o redosledu argumenata

////////////////////////////////////////////////////////
// Funkcija koja vrši sabiranje dva broja
////////////////////////////////////////////////////////

function zbir(br1, br2) {
    let rezultat = br1 + br2;
    console.log(`${br1} + ${br2} = ${rezultat}`);
}
zbir(16, 21);
let b1 = -10;
let b2 = 20;
zbir(b1, b2);
zbir(5+4, 50);
zbir("Java", "Script"); // Voditi računa šta prosleđujemo

////////////////////////////////////////////////////////
// Funkcija koja vraća vrednost
////////////////////////////////////////////////////////
function razlika(umanjenik, umanjilac) {
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}
console.log(`Razlika je: ${razlika(60, 45)}`);
let r = razlika(100, 4);
console.log(`Funkcija vraća ${r}`);

let r1 = razlika(6,3); // r1 = 3;
let r2 = razlika(17, 7); // r2 = 10;
let r3 = razlika(r1, r2); // r3 = -7;
console.log(`Promenljiva r3 iznosi ${r3}.`);
let r4 = razlika(razlika(40,60), razlika(10, 4)); // razlika(-20, 6) = -26
console.log(`Promenljiva r4 iznosi ${r4}`);

////////////////////////////////////////////////////////
// Funkcija sa više return-a
////////////////////////////////////////////////////////
function temperaturaVode(temp) {
    if(temp <= 0) {
        return "Voda se ledi";
    } else if(temp >= 100) {
        return "Voda isparava";
    } else {
        return "Voda je u tečnom agregatnom stanju";
    }
}
console.log(temperaturaVode(-5));
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);

////////////////////////////////////////////////////////
// 2. način
////////////////////////////////////////////////////////

function temperaturaVode1(temp) {
    let tekstZaIspis = "";
    if(temp <= 0) {
        tekstZaIspis = "Voda se ledi";
    } else if(temp >= 100) {
        tekstZaIspis = "Voda isparava";
    } else {
        tekstZaIspis = "Voda je u tečnom agregatnom stanju";
    }
    return tekstZaIspis;
}
console.log(temperaturaVode1(50));

////////////////////////////////////////////////////////
// 3. način
////////////////////////////////////////////////////////

function temperaturaVode2(temp) {
    let tekstZaIspis = "Voda je u tečnom agregatnom stanju";
    if(temp <= 0) {
        tekstZaIspis = "Voda se ledi";
    } else if(temp >= 100) {
        tekstZaIspis = "Voda isparava";
    } 
    return tekstZaIspis;
}
console.log(temperaturaVode2(-50));
let pTempVode = document.getElementById("tempVode");
pTempVode.innerHTML = temperaturaVode2(100);


////////////////////////////////////////////////////////
// 3. ZADATAK
// Napisati funkciju neparan koja za uneti ceo broj n vraća tekst “Broj je neparan” ukoliko je u pitanju neparan broj ili vraća tekst “Broj je paran” ukoliko broj n nije neparan.
////////////////////////////////////////////////////////
function neparan (n){
    if (n % 2 == 0){
        return "Broj je paran"
    } else {
        return "Broj je neparan"
    }
}
console.log(neparan(4));

////////////////////////////////////////////////////////
// 4. ZADATAK
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. U oba slučaja, brojevi su međusobno različiti.
////////////////////////////////////////////////////////
function maks2Function(broj1, broj2) {
    if (broj1 > broj2) {
        return broj1;
    } else {
        return broj2;
    }
}

////////////////////////////////////////////////////////
// 1. način
////////////////////////////////////////////////////////
function maks4Function(a, b, c, d) {
    let veciPrvaDva = maks2Function(a, b);
    let veciDrugaDva = maks2Function(c, d);
    return maks2Function(veciPrvaDva, veciDrugaDva);
}
console.log(maks4Function(5, 7, 10, 15));

////////////////////////////////////////////////////////
// 2. način
////////////////////////////////////////////////////////
const maks4Function2 = (a, b, c, d) => {
    return maks2Function(maks2Function(a, b), maks2Function(c, d));
}
console.log(maks4Function2(20, 11, 16, 18));

////////////////////////////////////////////////////////
// 5. ZADATAK
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
////////////////////////////////////////////////////////
function prikaziSliku(adresa) {
    document.write(`<img src="${adresa}">`);
}  
prikaziSliku("https://rasadnikgaj.com/images/vrtno%20cvece/lepi-covek-cvet-1.jpg");
prikaziSliku("1.jpg")

////////////////////////////////////////////////////////
// 5. ZADATAK - kompleksnije
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike i prosleđen id elementa u kome ta slika treba da se prikaže.
////////////////////////////////////////////////////////
function prikaziSlikuUElementu(putanja, id) {
    let element = document.getElementById(id);
    element.innerHTML = `<img src="${putanja}">`;
}
prikaziSlikuUElementu("1.jpg", "slika1");

////////////////////////////////////////////////////////
// 6. ZADATAK
// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
////////////////////////////////////////////////////////
function oboji(boja){
    document.write(`<p style="color: ${boja} ;">Ovako bojimo tekst preko funkcije </p>`)
}
oboji('blue');
oboji('rgb(255,200,150)');

////////////////////////////////////////////////////////
// 7. ZADATAK
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n u konzoli ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
////////////////////////////////////////////////////////
function sedmiDan(n) {
    if (n%7 == 0) {
        console.log(`Nedelja`);
    }else if ( n %7== 1) {
        console.log(`Ponedeljak`);
    }else if ( n%7 == 2) {
        console.log(`Utorak`);
    }else if ( n %7== 3) {
        console.log(`Sreda`);
    }else if ( n%7 == 4) {
        console.log(`Cetvrtak`);
    }else if ( n%7 == 5) {
        console.log(`Petak`);
    }else if ( n%7 == 6) {
        console.log(`Subota`);
    }
}
sedmiDan(4);