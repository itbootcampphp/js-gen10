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

// 3. ZADATAK
// Ispisati parne brojeve od 1 do 20 
// 1. način
for (i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(`${i} je parni broj`);
    }
}
// 2. način
for (i = 2; i <= 20; i +=2){
    console.log(i);
}

// 4. ZADATAK
// Ispisati dvostruku vrednost brojeva od 5 do 15.
for (i = 5; i <= 15; i++){
    console.log(`${i*2} je dvostruka vrednost broja ${i}`);
}


// 5. ZADATAK
// Odrediti sumu brojeva od 1 do n
let suma = 0;
let n = 5;
for(let p=1; p<=n; p++) {
    suma += p; // suma = suma + p;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

// 6. ZADATAK
// Odrediti sumu brojeva od n do m 
suma = 0;
let o = 1;
let p= 5;
for (p; p>=o; p--)
{
    suma += p;
}
console.log(`Suma brojeva od o do p je ${suma}`);

// 7. ZADATAK
// Odrediti proizvod brojeva od n do m
let proizvod = 1;
let j = 5;
let k = 13;
for (j; j<=k; j++)
{
    proizvod *= j;
}
console.log(`Proizvod brojeva od j do k je ${proizvod}`);

// 8. ZADATAK
// Odrediti sumu kvadrata brojeva od n do m 
let suma_kvadrata = 0;
n = 4;
m = 6;
for (i = n; i <= m; i++) {
  suma_kvadrata = suma_kvadrata + i ** 2; // suma_kvadrata += i*i
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma_kvadrata}`);

// 9. ZADATAK
// Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
for(i=1; i<=3; i++) {
    document.write(`<img src="slike/${i}.jpg">`);
}

// 10. ZADATAK
// Odrediti proizvod svih brojeva deljivih sa 11 
// u intervalu od 20 do 100. 
proizvod= 1;
for(i=20; i <= 100; i++){
if(i % 11 == 0) {
    proizvod *= i;
}
}
console.log(`Proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 je ${proizvod}`);

// 11. ZADATAK
// Prebrojati koliko ima brojeva deljivih sa 13 
// u intervalu od 5 do 150.
n=5;
m=150;
let brojBrojeva = 0;
for(i=n; i<=m; i++){
if(i % 13==0){
    brojBrojeva++;
}
}
console.log(brojBrojeva);

// 12. ZADATAK
// Ispisati aritmetičku sredinu brojeva od n do m.
n = 3;
m = 6;
suma = 0;
br = 0;
for(i=n; i<=m; i++) {
    suma += i; // suma=suma+i;
    br++; // br+=1; // br=br+1;
}
let arsr = suma/br;
console.log(`Aritmetička sredina brojeva od ${n} do ${m} je ${arsr}`);

// 13. ZADATAK
// Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
let pozbrojevi = 0;
let negbrojevi = 0;
n = -4;
m = 20;
for(let i=n; i<=m; i++) {
  if(i>0) {
    pozbrojevi++;
  } else if(i<0) {
    negbrojevi++;
  }
}
console.log(`Pozitivni brojevi: ${pozbrojevi}`);
console.log(`Negativni brojevi: ${negbrojevi}`);

// 14. ZADATAK
// Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
n = 5;
m = 50;
brojac = 0;
for(let i=n; i<=m; i++) {
  if(i%3 ==0 || i%5 == 0) {
    brojac++;
  }
}
console.log(`Broj brojeva od ${n} do ${m} koji su deljivi sa 3 ili 5 je ${brojac}`);

// 15. ZADATAK
// Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
let brojac2 = 0;
let suma2 = 0;
let g = 6;
let v = 34;
for (i = g; i <= v; i++)
{
    if(i % 10 === 4)
    {
        brojac2++;
        suma2 += i;
    }
}
console.log(brojac2);
console.log(suma2);

// 16. ZADATAK
// Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 3;
m = 9;
suma = 0;
a = 4;
for(i=n; i<=m; i++) {
    if(i%a != 0) {
        suma += i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji NISU deljivi brojem ${a} je ${suma}`);
// i=3, suma=3
// i=4, suma=3
// i=5, suma=8
// i=6, suma=14
// i=7, suma=21
// i=8, suma=21
// i=9, suma=30
// i=10

// 17. ZADATAK
// Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
// 1. način
k = 4;
j = 12;
a = 3;
proizvod = 1;
for(i = k; i <= j; i++)
{
    if(i % a === 0)
    {
        proizvod *= i;
    }
}
console.log(proizvod);

// 2. način
console.log("17. zadatak");
n = 3;
m = 9;
a = 4;
prod = 1;
let n1 = n;
while (n1 % a != 0) {
  n1++;
}
for (let i = n1; i <= m; i += a) {
  prod *= i;
}
console.log(
  `Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${prod}`
);

// 18. ZADATAK
// Odrediti sa koliko brojeva je deljiv uneti broj k
// 1. način
k = 15;
let brBrojevaDeljiv = 0;
for(i=1; i<=k; i++) {
    if(k%i == 0) {
        brBrojevaDeljiv++;
    }
}
console.log(`Broj ${k} je deljiv sa ${brBrojevaDeljiv} brojeva`);

// 2. način
k = 5;
if(k == 1) {
    brBrojevaDeljiv = 1;
} else {
    brBrojevaDeljiv = 2;
    for(i=2; i<=k/2; i++) {
        if(k%i == 0) {
            brBrojevaDeljiv++;
        }
    }
}
console.log(`Broj ${k} je deljiv sa ${brBrojevaDeljiv} brojeva`);

// 19. ZADATAK
// Odrediti da li je dati prirodan broj n prost. 
// Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

// 1. način
n = 1;
br = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    br++;
  }
}
console.log(br);
if (br > 2) {
  console.log(`Broj ${n} je složen broj`);
} else {
  console.log(`Broj ${n} je prost broj`);
}
// 1 nije prost broj

// 2. način
let prost = true;
k = 13;
for (i = 2; i <= Math.sqrt(k); i++) {
  if (k % i == 0) {
    prost = false;
    break;
  }
}
if (prost) {
  console.log(`Broj ${k} je prost.`);
} else {
  console.log(`Broj ${k} je složen.`);
}

// 20. ZADATAK
// Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
let divTabela = document.getElementById(`tabela`);
let tabela = `<table>`;
for(i=1; i<=6; i++) {
    let obojen = "belo";
    if(i%2 == 0) {
        obojen = "roze";
    } 
    tabela += 
    `<tr class="${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>`;
}
tabela += `</table>`;
divTabela.innerHTML = tabela;