// Test primeri
let a = [6, 8, 9, 3, 1];

// Zadatak 2
let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma;
}

// Zadatak 5
let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if (el > max) {
            max = el;
        }
    });
    return max;
}

// Zadatak 7
let indexMaxVr = niz => {
    let maxVr = niz[0];
    let maxInd = 0;
    niz.forEach((el, i) => {
        if (el > maxVr) {
            maxVr = el;
            maxInd = i;
        }
    });
    return maxInd;
}

// Zadatak 7': Vratiti sve indekse pojavljivanja maksimalne vrednosti
let sviIndexiMaxVr = niz => {
    let max = maxVr(niz);
    let sviIndexi = [];
    niz.forEach((elem, i) => {
        if (elem == max) {
            sviIndexi.push(i);
        }
    });
    return sviIndexi;
}

console.log(sumaElem(a));
console.log(maxVr(a));
console.log(indexMaxVr(a));

let b = [9, 5, 6, 9, 8, 9, 9];   // indexMaxVr = 0
console.log(sviIndexiMaxVr(b));

let c = [3, 5, 2, 1, 6, 2, 6]; // maxVr = 5, sviIndexi = [0, 1];
console.log(sviIndexiMaxVr(c));
console.log(sviIndexiMaxVr(c)[0]); // indeks prvog pojavljivanja
console.log(sviIndexiMaxVr(c)[sviIndexiMaxVr(c).length - 1]); // indeks poslednjeg pojavljivanja

// Zadatak 19
let duzinaSvihStringova = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}

let imena = ["Stefan", "Vladislav", "Nikola", "Milan", "Nevena", "Maja"];
duzinaSvihStringova(imena);

// Zadatak 20
let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length; 
    niz.forEach(el => {
        if(el.length > duzina) {
            maxVr = el;
            duzina = el.length;
        }
    });
    return maxVr;
}

// console.log(stringMaxDuzina(imena)); 
// maxVr = "Vladislav", duzina = 6
// callback("Stefan")
// callback("Vladislav")
// ......
// callback("Maja")

let imena2 = ["Pera", "Marija", "Laza", "Vladislav", "Toni"];
stringMaxDuzina(imena2);

// Zadatak 24
let zad24 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        //c.push(a[i], b[i]);
        c.push(el, b[i]);
    });
    return c;
}

// Zadatak 25
let zad25For = (a, b) => {
    let n = a.length; // n = b.length;
    let c = [];
    for (let i = 0; i < n; i++) {
        c[i] = a[i] * b[i]; // c.push(a[i] * b[i]);
    }
    return c;
}

let zad25ForEach = (a, b) => {
    let c = [];
    a.forEach((elem, i) => {
        c.push(elem * b[i]);
    });
    return c;
}

// Zadatak 26
// a = [a[0], a[1], ...., a[2n - 1]] // niz a ima 2n elemenata
// n = 3 => a ima 6 elemenata [a[0], a[1], a[2], a[3], a[4], a[5]]
// Treba formirati niz b = [b[0], b[1], ..., b[n - 1]]
// n = 3 => b ima 3 elementa [b[0], b[1], b[2]]
// b[i] = (a[i] + a[2n - 1 - i]) / 2
// b[0] = (a[0] + a[5]) / 2
// b[1] = (a[1] + a[4]) / 2
// b[2] = (a[2] + a[3]) / 2

let zad26For = a => {
    let k = a.length;
    let n = k / 2;
    let b = [];
    for (let i = 0; i < n; i++) {
        b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
    }
    return b;
}

let zad26ForEach = a => {
    let b = [];
    let k = a.length; // k = 6
    let n = k / 2; // n = 3
    a.forEach((el, i) => {
        if (i < n) {
            b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
        }
    });
    return b;
}

let n1 = [1, 2, 3, 4];
let n2 = [5, 6, 7, 8];

console.log(zad24(n1, n2));
console.log(zad25For(n1, n2));
console.log(zad25ForEach(n1, n2));

console.log(zad26For(n1));
console.log(zad26For(n2));

let n3 = [5, 8, 0, 1, 4, 2, 4, 3];
console.log(zad26For(n3));
console.log(zad26ForEach(n3));
