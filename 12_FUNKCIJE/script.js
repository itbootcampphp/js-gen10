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

////////////////////////////////////////////////////////
// 8. ZADATAK
// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
////////////////////////////////////////////////////////

function deljivSaTri(n, m) {
    let brojac = 0;
    for(let i=n; i<=m; i++) {
        if(i%3 == 0) {
            console.log(i);
            brojac++;
        }
    }
    console.log(`U intervalu od ${n} do ${m} ima ${brojac} brojeva deljivih brojem 3`);
    return brojac;
}
let a = deljivSaTri(10,30) // Izvrši funkciju i u a smesti njen produkt (što smo vratili - return)
console.log(a); 

////////////////////////////////////////////////////////
// 9. ZADATAK
// Napisati funkciju sumiraj koja određuje i vraća sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.
////////////////////////////////////////////////////////
function sumiraj(n, m) {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
    }
    return suma;
}
let n = 1;
let m = 10;
console.log(`Suma brojeva od ${n} do ${m} je: ${sumiraj(n, m)}`);

////////////////////////////////////////////////////////
// 10. ZADATAK
// Napisati funkciju množi koja određuje i vraća proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
////////////////////////////////////////////////////////
function mnozi(n, m) {
    let proizvod = 1;
    for (let i = n; i <= m; i++) {
        proizvod *= i;
    }
    return proizvod;
}
console.log(`Proizvod brojeva od ${n} do ${m} je: ${mnozi(n, m)}`);

////////////////////////////////////////////////////////
// 11. ZADATAK
// Napraviti funkciju aritmeticka koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
////////////////////////////////////////////////////////
function aritmeticka(n, m) {
    let suma = sumiraj(n, m);
    let br = 0;
    for (let i = n; i <= m; i++) {
        br++;
    }
    return suma / br;
}
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je: ${aritmeticka(n, m)}`);

////////////////////////////////////////////////////////
// 12. ZADATAK
// Napisati funkciju aritmetickaTri koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
////////////////////////////////////////////////////////
function aritmetickaTri (n, m) {
    let arithmeticMean = 0;
    let sum = 0;
    let counter = 0;
    for (i = n; i <= m; i++) {
        if (i % 10 == 3) {
            counter++;
            sum = sum + i;
        }
    }
    arithmeticMean = sum / counter;
    return arithmeticMean;
}
console.log(aritmetickaTri(10, 13));

////////////////////////////////////////////////////////
// 13. ZADATAK
// Napisati funkciju velicinaFonta kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
////////////////////////////////////////////////////////
function velicinaFonta(n) {
    document.write(`<p style='font-size: ${n}px;'>Lorem ipsum</p>`);
}
velicinaFonta(30);

////////////////////////////////////////////////////////
// 14. ZADATAK
// Napisati funkciju recenica5 koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 
////////////////////////////////////////////////////////
// 1. NAČIN
function recenica5a () {
    for (i=1; i<=5; i++)
    {
        document.write(`<h${i}>Neki tekst</h${i}>`)
    }
}
recenica5a()

// 2. NAČIN
function recenica5b() {
    for(let i = 1; i <= 5; i++) {
        document.write(`<p style='font-size: ${i*5}px;'>Lorem ipsum</p>`);
    }
}
recenica5b();

////////////////////////////////////////////////////////
// 15. ZADATAK
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
// a) Napišite funkciju poslednjaPlata kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati kolika će vam plata biti poslednjeg meseca prakse, ukoliko svakog meseca budete dobijali povišicu.
//    Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
////////////////////////////////////////////////////////
// 1. NAČIN
function poslednjaPlata (n, a, d){
    let zadnjaPlata = a + (n-1) * d;
    return zadnjaPlata;
}
console.log(`Poslednja plata zaposlenog je ${poslednjaPlata(4, 5, 1)} dinara`);

// 2. NAČIN
function poslednjaPlata1(n, a, d) {
    return a + (n - 1) * d;
}
console.log(poslednjaPlata1(6, 1000, 100));

// 3. NAČIN
function poslednjaPlata2(n, a, d) {
    let plata = a;
    let povisica = 0;
    for (let i = 1; i <= n; i++) {
        povisica = povisica + d;
    }
    return plata + povisica;
}
console.log(poslednjaPlata2(10, 1000, 50));

////////////////////////////////////////////////////////
// 15. ZADATAK
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
// b) Napišite funkciju ukupnaPlata kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi na praksi, ukoliko svakog meseca budete dobijali povišicu.
//    Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
////////////////////////////////////////////////////////
// 1. NAČIN
function ukupnaPlata (n, a, d){
    let suma = 0;
    for(let i = 0; i< n; i++){
        suma = suma + a + d * i;
    }
    return suma;
}
console.log(`Ukupna plata zaposlenog je ${ukupnaPlata(5, 10, 2)} dinara`);

// 2. NAČIN
function ukupnaPlata1(n, a, d) {
    return ((a + poslednjaPlata1(n, a, d)) / 2) * n;
}
console.log(ukupnaPlata1(3, 1000, 100));

// 3. NAČIN
function ukupnaPlata2(n, a, d) {
    let plata = 0;
    let povisica = 0;
    for (let i = 1; i <= n; i++) {
        povisica = povisica + d;
        plata = plata + a + povisica;
    }
    return plata;
}
console.log(ukupnaPlata2(10, 1000, 50));

////////////////////////////////////////////////////////
// 16. ZADATAK
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Ukoliko takmičar pre podizanja mosta kroči na most, zadržaće ga svojom težinom i most se neće podići tj. takmičar će moći nesmetano da pređe most. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
////////////////////////////////////////////////////////
function igreBezGranica(t,p,n) {
    if(t<p || t>p+n) {
        console.log(`Čekanje je 0s`);
    } else {
        let cekanje = p + n - t;
        console.log(`Takmičar je potrebno da sačeka ${cekanje}s.`)
    }
}
igreBezGranica(15, 20, 25);
igreBezGranica(15, 10, 12);