// Zadatak 1b.
let i = 1;
while (i <= 20)
{
    console.log(i);
    i++;
}

// Zadatak 1a.
i = 1;
let poruka = "";
while (i <= 20)
{
    poruka = poruka + i + " ";
    i++;
}
console.log(poruka);

/*
#  |  i  |   poruka
--------------------------
0  |  1  |     ""
1  |  2  |     "1 "
2  |  3  |     "1 2 "
3  |  4  |     "1 2 3 "
...| ... |     .......
20 |  21 |     "1 2 ... 20 "
*/

// Zadatak 2.
// 1. nacin:
i = 20;
while (i >= 1)
{
    console.log(i);
    i--;
}

// 2. nacin:
i = 1;
while (i <= 20)
{
    console.log(21 - i);
    i++;
}

/*
i = 1  =>  20 = 21 - i
i = 2  =>  19 = 21 - i
i = 3  =>  18 = 21 - i
.............
i = 19 =>  2 = 21 - 19
i = 20 =>  1 = 21 - 20
*/

// Zadatak 3.
// 1. nacin:
i = 1;
while (i <= 20)
{
    if (i % 2 == 0)
    {
        console.log(i);
    }
    i++;
}

// 2. nacin:
i = 2;
while (i <= 20)
{
    console.log(i);
    i = i + 2;  // i += 2;
}

// Zadatak 4.
/*
let n = 11;
i = 1;
while (i <= n)
{
    if (i % 3 == 1)
    {
        document.body.innerHTML += `<p class='plava'>Paragraf broj ${i} </p>`;
    }
    else if (i % 3 == 2)
    {
        document.body.innerHTML += `<p class='crvena'>Paragraf broj ${i} </p>`;
    }
    else
    {
        document.body.innerHTML += `<p class='zelena'>Paragraf broj ${i} </p>`;
    }
    i++;
}
*/
let n = 11;
i = 1;
while (i <= n)
{
    let klasa;  // let - vazi u bloku u kom je definisana
    if (i % 3 == 1)
    {
        klasa = 'plava';
    }
    else if (i % 3 == 2)
    {
        klasa = 'crvena';
    }
    else
    {
        klasa = 'zelena';
    }
    document.body.innerHTML += `<p class='${klasa}'>Paragraf broj ${i} </p>`;
    i++;
}

// Zadatak 6: Suma brojeva od 1 do 100
i = 1;
let suma = 0;
while (i <= 100)
{
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je: ${suma}`);

// Zadatak 7: Suma brojeva od 1 do n
n = 5;
i = 1;
suma = 0;
while (i <= n)
{
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je: ${suma}`);

// Zadatak 8: Suma brojeva od n do m
n = 5;
let m = 10;
i = n;
suma = 0;
while (i <= m)
{
    suma += i;
    i++;
}
console.log(`Suma brojeva od ${n} do ${m} jednaka je: ${suma}`);

// Zadatak 9: Proizvod brojeva od n do m
n = 3;
m = 8;
let proizvod = 1;
i = n;
while (i <= m)
{
    proizvod *= i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednak je: ${proizvod}`);

// Zadatak 10: Suma kvadrata parnih i suma kubova neparnih brojeva od n do m
n = 2;
m = 5;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
i = n;
while (i <= m)
{
    if (i % 2 == 0) 
    {
        sumaKvadrataParnih += (i ** 2);
    }
    else
    {
        sumaKubovaNeparnih += (i ** 3); 
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je: ${sumaKvadrataParnih}`);
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} jednaka je: ${sumaKubovaNeparnih}`);

// 2 * 2 + 4 * 4 = 4 + 16 = 20 - suma kvadrata parnih
// 3 * 3 * 3 + 5 * 5 * 5 = 27 + 125 = 152 - suma kubova neparnih

// Zadatak 11: Odredi broj delioca broja k.
let k = 7;
i = 1;
let brojDelioca = 0;
while (i <= k)
{
    if (k % i == 0)
    {
        brojDelioca++;
    }
    i++;
}
console.log(`Broj delioca broja ${k} jednak je: ${brojDelioca}`);

// Zadatak 12
n = 113;
i = 1;
brojDelioca = 0;
while (i <= n)
{
    if (n % i == 0)
    {
        brojDelioca++;
    }
    i++;
}
if (brojDelioca == 2)
{
    console.log(`Broj ${n} je prost`);
}
else 
{
    console.log(`Broj ${n} je slozen`);
}