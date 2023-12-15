// Test primeri

let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];

// Zadatak 2: Odrediti zbir elemenata celobrojnog niza
let sumaElem = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma = suma + niz[i];  // suma += niz[i];
    }
    return suma;
}

console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));


// Zadatak 3: Odrediti proizvod elemenata celobrojnog niza
let proizvodElem = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod = proizvod * niz[i];
    }
    return proizvod;
}
console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));