// Test primeri
let imena = ["Ana", "Jelena", "Marko", "Miloš", "Bratislav", "Ljiljana"];

// Zadatak 19.

let duzinaSvakogElementa = niz => {
    for (let i = 0; i < niz.length; i++) {
        // niz[i] je string
        let s = niz[i];
        console.log(s.length);
    }
}

duzinaSvakogElementa(imena);


// Zadatak 20.
let stringMaxDuzina = niz => {
    let maxString = niz[0]; // string sa max duzinom
    let maxDuzina = maxString.length; // maximalna duzina
    for (let i = 1; i < niz.length; i++) {
        let s = niz[i]; 
        if (s.length > maxDuzina) {
            maxString = s;
            maxDuzina = s.length;
        }
    }
    return maxString;
}

// Zadatak 20'. Indeks elementa sa max duzinom
let indexMaxDuzina = niz => {
    let maxString = niz[0]; // string sa max duzinom
    let maxDuzina = maxString.length; // maximalna duzina
    let maxIndex = 0; // indeks stringa sa max duzinom
    for (let i = 1; i < niz.length; i++) {
        let s = niz[i]; 
        if (s.length > maxDuzina) {
            maxString = s;
            maxDuzina = s.length;
            maxIndex = i;
        }
    }
    return maxIndex;
}

let stringMaxDuzinaKompaktno = niz => {
    let maxString = niz[0]; // string sa max duzinom
    for (let i = 1; i < niz.length; i++) {
        let s = niz[i]; 
        if (s.length > maxString.length) {
            maxString = s;
        }
    }
    return maxString;
}

console.log(stringMaxDuzina(imena));
console.log(indexMaxDuzina(imena));

// Zadatak 21.
let prosecnaDuzina = niz => {
    let zbirDuzina = 0;
    for (let i = 0; i < niz.length; i++) {
        let s = niz[i];
        zbirDuzina += s.length;
    }
    return zbirDuzina / niz.length;
}

let brojNatprosecnoDugih = niz => {
    let pd = prosecnaDuzina(niz);
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        let s = niz[i];
        if (s.length > pd) {
            broj++;
        }
    }
    return broj;
}

console.log(prosecnaDuzina(imena));
console.log(brojNatprosecnoDugih(imena));

// Zadatak 24.
let zad24a = (a, b) => {
    let n = a.length; // n = b.length
    let c = [];
    for (let i = 0; i < n; i++) {
        c.push(a[i], b[i]); 
    }
    return c;
    // 0.  c = []
    // 1.  c = [a[0], b[0]]
    // 2.  c = [a[0], b[0], a[1], b[1]]
    // ...
    // n-1.  c = [a[0], b[0], a[1], b[1], ..., a[n - 1], b[n - 1]]
}

let zad24b = (a, b) => {
    let n = a.length;
    let c = [];
    for (let i = 0; i < n; i++) {
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}
// c = [a[0], b[0], a[1], b[1], a[2], b[2], ..., a[n - 1], b[n - 1]]
//       0      1     2     3    4     5    ...    2n-2      2n-1