/*
12. ZADATAK
Učitati dva različita cela broja i ispitati da li je veći od njih paran, a manji od njih deljiv sa 3.
*/
let br1 = 10;
let br2 = 16;

// 1. način
if(br1 > br2) {
    console.log(`Veći broj je ${br1}, a manji broj je ${br2}`);

    // ispitujemo da li je veći broj deljiv sa 2 tj. da li je paran
    if(br1%2 == 0) {
        console.log(`Veći broj je paran`);
    } else {
        console.log(`Veći broj nije paran`);
    }

    // ispitujemo da li je manji broj deljiv sa 3
    if(br2%3 == 0) {
        console.log(`Manji broj je deljiv sa 3`);
    } else {
        console.log(`Manji broj nije deljiv sa 3`);
    }
} else {
    console.log(`Veći broj je ${br2}, a manji broj je ${br1}`);

    // ispitujemo da li je veći broj deljiv sa 2 tj. da li je paran
    if(br2%2 == 0) {
        console.log(`Veći broj je paran`);
    } else {
        console.log(`Veći broj nije paran`);
    }

    // ispitujemo da li je manji broj deljiv sa 3
    if(br1%3 == 0) {
        console.log(`Manji broj je deljiv sa 3`);
    } else {
        console.log(`Manji broj nije deljiv sa 3`);
    }
}

// 2. način
 br1 = 12;
 br2 = 4;
let veci = Math.max(br1,br2)
let manji = Math.min(br1,br2);
if (veci % 2 === 0 ) {
    console.log(`Veci broj je deljiv sa 2`);
} else console.log(`Veci broj nije deljiv sa 2`);
if(manji % 3 == 0) {
    console.log(`Manji broj je deljiv sa 3`);
} else {
    console.log(`Manji broj nije deljiv sa 3`);
}

// 3. način
br1 = 15;
br2 = 19;
veci = br1;
if(br2 > veci) {
    veci = br2;
}
manji = br1 + br2 - veci;

if(veci % 2 == 0) {
    console.log(`Veći broj je deljiv sa 2`);
} else {
    console.log(`Veći broj nije deljiv sa 2`);
}

if(manji % 3 == 0) {
    console.log(`Manji broj je deljiv sa 3`);
} else {
    console.log(`Manji broj nije deljiv sa 3`);
}

/*
13. ZADATAK
Uneti dva datuma i ispisati onaj koji je raniji. 
Datume unosimo tako što u posebnim promenljivama navedemo dan, 
mesec i godinu, za svaki od njih.
*/
let godina1= 2018;
let godina2 = 2018;
let mesec1=6;
let mesec2= 5;
let dan1 = 6;
let dan2 = 7;
if(godina1 < godina2) {
    console.log( `datum 1 je ranija od datuma 2`);
}else if (godina2< godina1){
    console.log( `datum 2 je ranija od datuma 1`);
}else if(godina1 == godina2) {
    if(mesec1 < mesec2) {
        console.log(`Ranije prvi datum`);
    } else if(mesec2<mesec1) {
        console.log(`Raniji je drugi datum`);
    } else if(mesec1 == mesec2) {
        if(dan1<dan2) {
            console.log(`Ranije je prvi dan`);
        } else if(dan2<dan1) {
            console.log(`Raniji je drugi datum`);
        } else {
            console.log(`Datumi su isti`);
        }
    }
}

// 2. način
dan1 = 5;
mesec1 = 5;
godina1 = 2018;
dan2 = 5;
mesec2 = 5;
godina2 = 2018;
if (godina1 > godina2) {
    console.log(`Datum2 je raniji od datuma1`);
} else if (godina1 < godina2) {
    console.log(`Datum1 je raniji od datuma2`);
} else if (mesec1 > mesec2) {
    console.log(`Datum2 je raniji od datuma1`);
} else if (mesec1 < mesec2) {
    console.log(`Datum1 je raniji od datuma2`);
} else if (dan1 > dan2) {
    console.log(`Datum2 je raniji od datuma1`);
} else if (dan1 < dan2) {
    console.log(`Datum1 je raniji od datuma2`);
} else {
    console.log(`Datumi su jednaki`);
}

/*
14. ZADATAK
Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan
*/
let pol = "m";
let godine = 18;
if(pol == "z"){
    if(godine >= 18){
        console.log(`Korisnik je zenskog pola i punoletan je`);
    }else {
        console.log(`Korisnik je zenskog pola i maloletan je`);
    }
} else if(pol == "m"){
    if(godine >= 18){
        console.log(`Korisnik je muskog pola i punoletan je`);
    } else {
        console.log(`Korisnik je muskog pola i maloletan je`);
    }
}