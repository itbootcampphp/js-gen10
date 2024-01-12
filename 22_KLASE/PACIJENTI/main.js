import Pacijent from "./pacijent.js";

let p1 = new Pacijent("Marko", 178, 101);
let p2 = new Pacijent("Nikola", 199, 106);
let p3 = new Pacijent("Nemanja", 155, 75);

p1.stampaj();
console.log(p1.bmi());
console.log(p1.kritican());

let pacijenti = [p1, p2, p3];

// Ispisati podatke o pacijentu sa najmanjom težinom.
let pacijentSaNajmanjomTezinom = niz => {
    let minTezinaPacijent = niz[0]; // Čuva ceo objekat
    let minTezina = minTezinaPacijent.tezina; // Čuva samo težinu

    niz.forEach(p => {
        if(p.tezina < minTezina) {
            minTezina = p.tezina;
            minTezinaPacijent = p;
        }
    });

    return minTezinaPacijent;
}

// let rez = pacijentSaNajmanjomTezinom(pacijenti);
// rez.stampaj();

pacijentSaNajmanjomTezinom(pacijenti).stampaj(); // ili kraće ovako

/////////////////////////////////////////////////

// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let najveciBMI = niz => {
    let pacijentsaNajvecimBMI = niz[0];
    let najveci = pacijentsaNajvecimBMI.bmi();
    niz.forEach(pacijent => {
        if(pacijent.bmi() > najveci) {
            najveci = pacijent.bmi();
            pacijentsaNajvecimBMI = pacijent;
        }
    });
    return pacijentsaNajvecimBMI;
}
let rezultat = najveciBMI(pacijenti);
rezultat.stampaj();

/////////////////////////////////////////////////

// Ispisati sve pacijente čije ime sadrži slovo A.
let pacijentSaA = niz => {
    let pacijentiA = [];
    niz.forEach(pacijent => {
        if(pacijent.ime.includes('a') || pacijent.ime.includes('A')) {
            pacijentiA.push(pacijent);
            // console.log(pacijent);
        }
    });
    return pacijentiA;
}
pacijentSaA(pacijenti).forEach(p => {
    p.stampaj();
});

/////////////////////////////////////////////////

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.
let srednjaVisina = niz => {
    let sumaVisina = 0;
    niz.forEach(pac => {
        sumaVisina += pac.visina; // geter za visinu pacijenta
    });
    return sumaVisina / niz.length;
}
console.log(`Srednja visina pacijenata je: ${srednjaVisina(pacijenti)}`);