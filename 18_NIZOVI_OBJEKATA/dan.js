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
console.log(dani[indeksPrvog].datum);


// c) Ispisati poslednji od njih
console.log(dani[indeksPoslednjeg].datum);


// 3. ZADATAK
// Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

// 4. ZADATAK
// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
