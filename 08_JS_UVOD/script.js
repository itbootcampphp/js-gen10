document.getElementById("d1").innerHTML = "Ja se zovem Stefan Stanimirovic";

console.log("Zdravo!");

console.log("Pera"); 
console.log('Mika');

console.log("It's alright");
console.log('It"s alright');
console.log('It\'s alright');

// Literali
console.log(5);
console.log(-5.189);
console.log(3 + 4); // 7
console.log('3' + '4');  // konkatenacija (spajanje stringova) '34'
console.log('3 + 4');  // '3 + 4'
console.log('3 + 4 = ', 3 + 4);
console.log('3 + 4 = ' + (3 + 4));
console.log(true);
console.log(false);

// Promenljive
let x;  // 1) deklaracija promenljive (uvodjenje promenljive u program)

console.log(x); // ???

x = 5;
console.log(x);

x = "Laza";
console.log(x);

let y = true; // 2) definicija promenljive (deklaracija + dodela vrednosti)

console.log(y);

const z = -7.6;

// z = 6; // ne moze!

console.log(z);

let age;
console.log(age, age + 3); // undefined, NaN - Not a Number

age = null;
console.log(age, age + 3); // null, 3

let broj = 3 + 4 * 2;  // 11
console.log(broj);

broj = (3 + 4) * 2; // 14
console.log(broj);

//broj += 6; // 20
//console.log(broj);

broj = broj + 6; // 14 + 6 = 20
console.log(broj); // 20

broj *= 5;  // broj = broj * 5;
console.log(broj); // 100

x = 6;
x++;
console.log(x);  // 7

++x;
console.log(x); // 8

x = 6;
console.log(x++); // 6 [post-increment] (prvo se iskoristi stara vrednost prom. x, pa se onda uveca)
console.log(x); // 7
console.log(++x); // 8 [pre-increment] (prvo se uveca vrednost prom. x pa se onda koristi)

// Beba ima 28 meseci
// 28 delimo sa 12, i trazimo kolicnik i ostatak
// console.log(28 / 12);
// Kolicnik: 
console.log(Math.floor(28 / 12)); // 2
// Ostatak:
console.log(28 % 12); // 4
// 28 = 2 * 12 + 4
//     (k)      (o)

console.log(7 % 3); // 1
console.log(24 % 18); // 6

x = 5;
y = 3;
console.log(x ** y); // 5^3 = 5 * 5 * 5 = 125