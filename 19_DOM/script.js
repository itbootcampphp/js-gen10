console.log(document); // document je objekat (koren DOM stabla)
console.log(document.body); // body svojstvo document objekta je objekat

let e1 = document.getElementById("p2");
console.log(e1); // (jedinstven) objekat iz DOM stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML kolekcija objekata iz DOM stabla

// Pristup elementima HTML kolekcije
for (let i = 0; i < el2.length; i++) {
    console.log(el2[i]);
}

// HTML kolekcije ne poseduju forEach petlju
// ovo ne moze:
/*
el2.forEach(el => {
    console.log(el);
});
*/
let niz = Array.from(el2);
niz.forEach(el => {
    console.log(el);
});

let el3 = document.getElementsByTagName("img"); // Vraca HTML kolekciju
console.log(el3); 

let el4 = document.getElementsByName("p"); // Vraca NodeList
console.log(el4);
el4.forEach(el => {
    console.log(el);
});
console.log(el4[0]); 

// Array (forEach), HTMLCollection, NodeList (forEach)

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par"); // Vraca objekat iz DOM stabla
console.log(t2);

let t3 = document.querySelectorAll(".par"); // Vraca NodeList
console.log(t3); 

t3.forEach(el => {
    console.log(el);
});

let t4 = document.querySelectorAll("div p.par, div a.par");
console.log(t4);

let link = document.querySelector("a");
link.innerHTML = "<span style='font-weight: bold'>Novi tekst</span> prvog linka";
//link.href = "https://www.google.com";
link.setAttribute("href", "https://www.google.com");
//link.target = "_blank";
link.setAttribute("target", "_blank");
link.id = "pera";

let linkovi = document.querySelectorAll("a");
linkovi.forEach(link => {
    link.style.color = "red";
    link.style.fontSize = "18px";
    link.style.textDecoration = "none";
    //link.setAttribute('style', 'color: red; font-size: 18px; text-decoration: none;');
});

//console.log(link);