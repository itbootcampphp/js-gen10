// Zadatak 3
// Varijanta 1: Preko klasicnih funkcija

if(true) {
    let x = 6;
    // ...
    // ...
    // ...
    // ...
}

function neparan(n) {
    let x; // x - vazi u bloku u kojem je definisana
    if (n % 2 == 1) {
        x = true;
    }
    else {
        x = false;
    }
    // let x; // netacno
    return x;
}

function neparan2(n) {
    if (n % 2 == 1) {
        var x = true; // var - dostupna unutar funkcije u kojoj je deklarisana
    }
    else {
        var x = false;
    }
    var x; // tacno, ali besmisleno
    return x;
}

var x = 90;

let p = 5;
console.log(neparan(p));
console.log(neparan2(p));

var m = 9;

let neparan3 = (n) => {
    let x = false;
    if (n % 2 == 1) {
        x = true;
    }
    return x;
}

let neparan4 = (n) => {
    return (n % 2 == 1) ? true : false;  // ?: - ternarni operator
}

console.log(neparan4(6));

let neparan5 = (n) => {
    return (n % 2 == 1);
}
console.log(neparan5(6));

let neparan6 = n => (n % 2 == 1);
console.log(neparan6(6));

let uvecajZaDva = n => (n += 2);
console.log(uvecajZaDva(5));


/*
let radniDan = () => {
    let dan = new Date();
    let day = dan.getDay();
    if (day == 0 || day == 6) {
        return "Vikend je";
    }
    else {
        return "Radni dan";
    }
}
*/

//console.log(radniDan());
//document.body.innerHTML += radniDan();
//alert(radniDan());

let maks2 = (a, b) => a > b ? a : b;

let maks4 = (a, b, c, d) => 
    maks2(maks2(a, b), maks2(c, d));

console.log(maks2(-6.9, 3.09));
console.log(maks4(8, 4, 9, 2));

let prikaziSliku = putanja => `<img src='${putanja}' alt='blabla'>`;

let d1 = document.getElementById("d1");
d1.innerHTML += prikaziSliku("1.png");
d1.innerHTML += prikaziSliku("2.png");