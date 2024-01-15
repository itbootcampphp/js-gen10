class Film {

    constructor(n, r, g, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
        this.ocene = o;
    }

    // seteri - set metode - postavljaju vrednost polja
    set naslov(n) {
        this._naslov = n;
    }

    set reziser(r) {
        this._reziser = r;
    }

    set godinaIzdanja(gi) {
        if(gi < 1800) {
            this._godinaIzdanja = 1800;
        } else {
            this._godinaIzdanja = gi;
        }
    }

    set ocene(o) {
        for(let i=0; i<o.length; i++) {
            if(o[i]<5 || o[i]>10 || o[i]!=Math.ceil(o[i])) {
                o[i] = 5;
            }
        }
        this._ocene = o;
    }

    // geteri - get metode - vraćaju vrednost polja
    get naslov() {
        return this._naslov;
    }

    get reziser() {
        return this._reziser;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    get ocene() {
        return this._ocene;
    }

    stampaj() {
        console.log(`Naslov: ${this.naslov}`); // Ovo poziva geter za naslov
    }

    // Napraviti metod prosek koji vraća prosečnu ocenu 
    prosecna() {
        let suma = 0;
        this.ocene.forEach(elem => {
            suma += elem;
        });
        return suma / this.ocene.length;
    }
}

export default Film;

// let film1 = new Film("Čuvari formule", "Dragan Bjelogrlić", 2023);
// let film2 = new Film("Klopka", "Srdan Golubović", 2007);
// console.log(film1);
// console.log(film2);
// film1.stampaj();
// film1.godinaIzdanja = 2024; // ovo poziva samo seter, ne i konstruktor
// console.log(film1);
// console.log(`Film: ${film2.naslov} , Godina izdanja: ${film2.godinaIzdanja} `);

// let filmovi = [film1, film2];
