let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false, 
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true, 
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true, 
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};

// 1. ZADATAK
// Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)
let dani = [dan1, dan2, dan3];


// 2. ZADATAK
// Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
let maxBrMerenja = dani[0].temperature.length;
let indeksPrvog = 0;
let indeksPoslednjeg = 0;
dani.forEach((d, indeks) => {
    if(maxBrMerenja < d.temperature.length) {
        maxBrMerenja = d.temperature.length;
        indeksPrvog = indeks;
    }

    if(maxBrMerenja <= d.temperature.length) {
        maxBrMerenja = d.temperature.length;
        indeksPoslednjeg = indeks;
    }
});

// a) Ispisati svaki takav datum
dani.forEach(d => {
    if(d.temperature.length == maxBrMerenja){
        console.log(d.datum);
    }
});

// b) Ispisati prvi od njih
// 1. način
console.log(dani[indeksPrvog].datum);

// 2. način
for(let i=0; i<dani.length; i++) {
    if(maxBrMerenja == dani[i].temperature.length) {
        console.log(dani[i].datum);
        break;
    }
}

// c) Ispisati poslednji od njih
// 1. način
console.log(dani[indeksPoslednjeg].datum);

// 2. način
for(let i=dani.length-1; i>=0; i--) {
    if(maxBrMerenja == dani[i].temperature.length) {
        console.log(dani[i].datum);
        break;
    }
}

// 3. ZADATAK
// Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana
let brSuncanihIKisnih = niz => {
    let kisni = 0;
    let suncani = 0;
    niz.forEach(dan => {
        if(dan.kisa) {
            kisni++;
        }
        if(dan.sunce) {
            suncani++;
        }
    });
    console.log(`Kisnih dana je bilo: ${kisni}, a suncanih je bilo: ${suncani}`);
}
brSuncanihIKisnih(dani);

// 4. ZADATAK
// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
let brNatprosecnihDana = niz => {
    let zbirTemp = 0;
    let brTemp = 0;
    let brDana = 0;
    niz.forEach(dan => {
        dan.temperature.forEach(t => {
            zbirTemp += t;
            brTemp++;
        });
    });
    let prosekUkupno = zbirTemp / brTemp;
    console.log(prosekUkupno);
    niz.forEach(dan => {
        let zbirLok = 0;
        let brLok = 0;
        dan.temperature.forEach(t => {
            zbirLok+= t;
            brLok++;
        });
        let prosLok = zbirLok / brLok;
        console.log(prosLok);
        if(prosLok > prosekUkupno) {
            brDana++;
        }
    });
    return brDana;
}
console.log(`Broj dana sa natprosecnom temperaturom: ${brNatprosecnihDana(dani)}`);