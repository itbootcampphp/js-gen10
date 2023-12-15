// Test primeri

let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5]; // 0

// Zadatak 2: Odrediti zbir elemenata celobrojnog niza
let sumaElem = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma = suma + niz[i];  // suma += niz[i];
    }
    return suma;
}

console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));


// Zadatak 3: Odrediti proizvod elemenata celobrojnog niza
let proizvodElem = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod = proizvod * niz[i];
    }
    return proizvod;
}
console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));

// Zadatak 4: Odrediti srednju vrednost elemenata celobrojnog niza
let srVrednost = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    let srvr = suma / niz.length;
    return niz.length != 0 ? srvr : 0;
}

let srVrednost2 = niz => niz.length != 0 ? sumaElem(niz) / niz.length : 0;

console.log(srVrednost2(brojevi1));
console.log(srVrednost2(brojevi2));
console.log(srVrednost2(brojevi3));

// Zadatak 4a: Odrediti srednju vrednost parnih elemenata celobrojnog niza
let srVrednostParnih = niz => {
    let suma = 0;
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma = suma + niz[i];
            br++;
        }
    }
    if (br != 0) {
        return suma / br;
    }
    else {
        return 0;
    }
}
console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));

console.log(srVrednostParnih(brojevi4));
console.log(srVrednost([]));

// Zadatak 5: Odrediti maksimalnu vrednost u celobrojnom nizu
// Koraci:
// 1) Proglasiti prvi element niza za maximalni
// 2) Proci kroz OSTALE elemente niza i utvrditi nema li veceg elementa od do sada nadjenog maximuma
//    Ako ima, azurirati ovu vrednost
let maxNiza = niz => {
    let max = niz[0]; // korak 1
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}

console.log(maxNiza(brojevi1));
console.log(maxNiza(brojevi2));
console.log(maxNiza(brojevi3));
console.log(maxNiza(brojevi4));

// Zadatak 7: Odrediti indeks maksimalnog elementa celobrojnog niza.
let indMaxNiza = niz => {
    let max = niz[0]; 
    let index = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indMaxNiza(brojevi5));


/* Samostalni rad */
//Zadatak 6
let minNiza = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++){
        if (niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}
console.log(minNiza(brojevi1));

//Zadatak 8
let indMinNiza = niz => {
    let min = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indMinNiza(brojevi1));

//Zadatak 9
let veciOdSrednje = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++){
        if(niz[i] > srVrednost(niz)){
            br++;
        }
        //br += niz[i] > srednjaVred(niz) ? 1 : 0;  //umesto if
    }
    return br;
}
console.log(veciOdSrednje(brojevi1));

// Zadatak 10 - Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPozEl = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0){
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirPozEl(brojevi1));
console.log(zbirPozEl(brojevi2));
console.log(zbirPozEl(brojevi3));
console.log(zbirPozEl(brojevi4));

//  Zadatak 11 - Odrediti broj parnih elemenata u celobrojnom nizu.
let zbirParEl = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0){
            br++;
        }
    }
    return br;
}
console.log(zbirParEl(brojevi1));
console.log(zbirParEl(brojevi2));
console.log(zbirParEl(brojevi3));
console.log(zbirParEl(brojevi4));

let znak2 = niz => {
    for (i=0; i<niz.length; i++){
        if (niz[i]%2 !=0 && i%2 ==0){
            niz[i] *= -1
        }
    }
    return niz;
}

console.log(znak2(brojevi1));
console.log(znak2(brojevi2));
console.log(znak2(brojevi3));
console.log(znak2(brojevi4));
console.log(znak2(brojevi5));

// ZADATAK 12  Odrediti broj parnih elemenata sa neparnim indeksom.
let brojParElemNeparIndex = niz => {
    let br = 0;
    for(i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            if(i % 2 != 0) {
                br++;
            }
        }
    }
    return br;
}
console.log(`ZADATAK 12`);
console.log(brojParElemNeparIndex(brojevi1));
console.log(brojParElemNeparIndex(brojevi2));
console.log(brojParElemNeparIndex(brojevi3));
console.log(brojParElemNeparIndex(brojevi4));
console.log(brojParElemNeparIndex(brojevi5));

// ZADATAK 13  Izračunati sumu elemenata niza sa parnim indeksom.
let sumaElemNizaParniIndex = niz => {
    let suma = 0;
    for(i = 0; i < niz.length; i++) {
        if(i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(`ZADATAK 13`);
console.log(sumaElemNizaParniIndex(brojevi1));
console.log(sumaElemNizaParniIndex(brojevi2));
console.log(sumaElemNizaParniIndex(brojevi3));
console.log(sumaElemNizaParniIndex(brojevi4));
console.log(sumaElemNizaParniIndex(brojevi5));

// 12. Zadatak
// Odrediti broj parnih elemenata sa neparnim indeksom.
let brojParnihSaNeparnimIndexom = (niz) => {
    let count = 0;
    for (let i = 1; i < niz.length; i += 2) {
      // if (niz[i] % 2 == 0) {
      //   count++
      // }
      count += niz[i] % 2 == 0 ? 1 : 0;
    }
    return count;
  };
  console.log(
    "brojParnihSaNeparnimIndexom",
    brojParnihSaNeparnimIndexom(brojevi4)
  );
  // 13. Zadatak
  // Izračunati sumu elemenata niza sa parnim indeksom.
  let sumaElemenataSaParnimIndexom = (niz) => {
    let sum = 0;
    for (let i = 0; i < niz.length; i += 2) {
      sum += niz[i];
    }
    return sum;
  };
  console.log(
    "sumaElemenataSaParnimIndexom",
    sumaElemenataSaParnimIndexom(brojevi1)
  );

  // Zadatak 14:
  brojevi1 = [8, 4, -2, 10, 1, 100];
  brojevi2 = [10, -5, 0, -3];
  brojevi3 = [1, 2, 3, 4, 5, 6];
  brojevi4 = [1, 5, 9, 3];
  brojevi5 = [8, 6, 7, 8, 5];
  let menjanjeZnaka = niz => {
      for (let i = 0; i < niz.length; i++){
          niz[i] = niz[i] - (2 * niz[i])
      }
      return niz;
  }
  console.log(menjanjeZnaka(brojevi1));
  console.log(menjanjeZnaka(brojevi2));
  console.log(menjanjeZnaka(brojevi3));
  console.log(menjanjeZnaka(brojevi4));
  console.log(menjanjeZnaka(brojevi5));

  // Zadatak 15:
  brojevi1 = [8, 4, -2, 10, 1, 100];
  brojevi2 = [10, -5, 0, -3];
  brojevi3 = [1, 2, 3, 4, 5, 6];
  brojevi4 = [1, 5, 9, 3];
  brojevi5 = [8, 6, 7, 8, 5];
  let menjanjeZnakaNeparnomElementu = niz => {
      for (let i = 0; i < niz.length; i+=2){
          if (niz[i] % 2 != 0){
          niz[i] = niz [i] - (2 * niz[i])
          }
      }
      return niz
  }
  console.log(menjanjeZnakaNeparnomElementu(brojevi1));
  console.log(menjanjeZnakaNeparnomElementu(brojevi2));
  console.log(menjanjeZnakaNeparnomElementu(brojevi3));
  console.log(menjanjeZnakaNeparnomElementu(brojevi4));
  console.log(menjanjeZnakaNeparnomElementu(brojevi5));

  let promenitiZnak2 = niz => {
    for(let i=0; i<niz.length; i+=2){
        if (niz[i] % 2 != 0) {
            niz[i] = niz[i]*(-1);
        }
    }
    return niz;
}
console.log(promenitiZnak2(brojevi1));