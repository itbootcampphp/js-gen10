// 1. ZADATAK
// Ispisati brojeve od 1 do 20 

// Pomoću WHILE petlje
let i = 1;
while(i <= 20) {
    console.log(`Broj ${i}`);
    i++; //i+=1; //i = i+1;
}

// Pomoću FOR petlje
// Umesto j++, možete koristiti j+=1; ili j=j+1;
for(let j=1; j<=20; j++) {
    console.log(`Ovo je broj ${j}`);
}

// 2. ZADATAK
// Ispisati brojeve od 20 do 1 
// Umesto k--, možete koristiti k-=1; ili k=k-1;
for(let k=20; k>=1; k--) {
    console.log(`Ovo je k ${k}`);
}

// 5. ZADATAK
// Odrediti sumu brojeva od 1 do n
let suma = 0;
let n = 5;
for(let p=1; p<=n; p++) {
    suma += p; // suma = suma + p;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);