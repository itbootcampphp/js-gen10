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

console.log(sumaElem(a));
console.log(maxVr(a));