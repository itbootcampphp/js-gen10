class User {
    constructor(n, s, a) {
        this.name = n;
        this.surname = s;
        this.age = a;
    }
}
User.prototype.bojaKose = "crna";

let branko = new User("Branko", "Milivojevic", 27);
branko.grad = "Paracin";
/*
branko.potpis = function() {
    console.log(this.name, this.surname);
} // dodavanje metode
branko.potpis(); // poziv metode 
*/


let ivan = new User("Ivan", "Stanimirovic", 37);
ivan.poreklo = "Leskovac";

console.log(branko);

db.collection('users').doc('cust04')
.set(Object.assign({}, branko))
.then(() => {
    console.log("Uspesno dodat user")
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

db.collection('users').doc('istanimirovic')
.set(Object.assign({}, ivan))
.then(() => {
    console.log("Uspesno dodat user")
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});
//  JS poziva set metodu kojoj se prosledjuje JS OBJEKAT
//  Na osnovu tog objekta se u bazi kreira novi DOKUMENT

/*
JS OBJEKAT:
1) Moze za poseban objekat da se dodaju polja i metode (kao i za dokumenta u bazi)
2) Moze klasi kojoj pripada objekat da se dodaju polja i metode
3) Moze da se nasledjuju klase { User  ->  UserCreditCart }

Primer:
HTML: Formu gde se unose korisnici
Za sve korisnike pamtimo: ime, prezime, godine, pretplata
Ako korisnik odabere karticu kao nacin pretplate, za te korisnike pamtiti i broj kartice
*/