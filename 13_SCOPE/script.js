let a = 10;
var b = 20;
const c = 30;
console.log(a, b, c);

a = 15; // let
var b = 25; // var
console.log(a, b);

// if(true) {
//     console.log(a);
//     let a = -4;
// }

if(true) {
    let a = 50; // to je a samo za scope u if naredbi
    var b = 70; // globalno
    let d = 60;
    console.log(a, b, d);
    if(true) {
        console.log(a, b, d);
    }
}

// console.log(a, b, d); // d nije definisano
console.log(a, b);
