class Film {

    constructor(n, r, g) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
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

    stampaj() {
        console.log(`Naslov: ${this.naslov}`); // Ovo poziva geter za naslov
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
