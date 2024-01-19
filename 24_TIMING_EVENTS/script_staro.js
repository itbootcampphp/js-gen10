window.setTimeout(() => {
    console.log("Poruka ispisana nakon 3 sekunde");
}, 1000 * 3);
console.log(1);
console.log(2);
window.setTimeout(() => {
    console.log("Poruka ispisana nakon nekog vremena");
}, 1000 * 2);
console.log(3);
console.log(4);

/*
1) 1, 2, 3, 4, "Poruka ispisana nakon nekog vremena"
2) 1, 2, (.... ceka se 2 sekunde ...) "Poruka ispisana nakon nekog vrmenea"
   , 3, 4
Izvrsava se varijanta 1), zato sto setTimeout nije blokirajuca
*/

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const div = document.getElementById("ispis");

let timer = null;

btn1.addEventListener("click", function(e) {
    e.preventDefault();
    let datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    if(timer === null) {
        timer = setTimeout(function() {
            div.innerHTML += `${h}:${m}:${s}`;
            timer = null;
        }, 2000);
    }
});

btn2.addEventListener("click", function(e) {
    e.preventDefault();
    clearTimeout(timer);
    timer = null;
});