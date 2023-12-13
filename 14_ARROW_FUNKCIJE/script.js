// Klasicne (imenovane) funkcije
function sum(a, b)
{
    return a + b;
}

let rez = sum(1, 2); // poziv funkcije (po imenu, iza koga se navode argumenti)
console.log(rez);


// Anonimne funkcije (funkcije bez imena)
let suma = function(a, b)
{
    return a + b;
}

console.log(suma(1, 2)); // poziv anonimne funkcije


// Arrow funkcije (= anonimne funkcije koje imaju 2 specificna svojstva)
// 1) imaju skracen zapis
// 2) znacenje kljucne reci this

let suma2 = (a, b) => {
    return a + b;
}

console.log(suma2(1, 2)); // poziv arrow f-je = poziv anonimne f-je


let hello = () => {
    console.log("Hello world!");
}

hello();
hello();

let echo = (s1, s2) => {
    let result = s1 + ", " + s2;
    console.log(result);
}

echo("Stefan", "Stanimirovic");
echo("Jelena", "Matejic");