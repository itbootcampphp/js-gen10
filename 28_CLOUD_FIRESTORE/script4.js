// Dohvatanje dokumenata iz kolekcije po redosledu polja
// (dokument mora da sadrzi to polje da bi bio dohvacen)
// (ako ima vise od jednog polja, neophodno je prvo kreirati index)
/*
db.collection('users')
.orderBy('name', 'desc')
.orderBy('age', 'asc')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje odredjenog broja dokumenata (limitiranje)
/*
db.collection('users')
.orderBy('name', 'desc')
.orderBy('age', 'asc')
.limit(2)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje dokumenata koji zadovoljavaju odredjene uslove (filtriranje)

// Dohvati sve klijente koji Imaju platu veću ili jednaku od 500
/*
db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/


// Dohvati sve klijente koji Imaju platu između 300 i 800
/*
db.collection('customers')
.where('salary', '>=', 300)
.where('salary', '<=', 800)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvati sve klijente koji Imaju platu manju od 900, i imaju 30 godina
/*
db.collection('customers')
.where('salary', '<=', 900)
.where('age', '==', 30)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvati sve klijente koji imaju preko 25 godina sortirane po imenu
/*
db.collection('customers')
.where('age', '>', 25)
.orderBy('age')
.orderBy('name')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvati sve klijente koji Imaju adresu u Nišu
/*
db.collection('customers')
.where('addresses', 'array-contains', 'Nis')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvati sve klijente koji Imaju adresu u Nišu ili Beogradu,
/*
db.collection('customers')
.where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvati sve klijente koji Imaju 22, 25 ili 28 godina
/*
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve zadatke koji Treba da se izvrše u tekućoj godini
/*
let datum = new Date();
let godina = datum.getFullYear(); // tekuca godina
let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); // 1. januar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

db.collection('tasks')
.where('due_date', '>=', ts1)
.where('due_date', '<', ts2)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/


// Dohvatiti sve zadatke koji Su zavrseni
/*
let datum = new Date();

db.collection('tasks')
.where('due_date', '<=', datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/


// Dohvatiti sve zadatke koji Tek treba da pocnu
let datum = new Date();

db.collection('tasks')
.where('start_date', '>=', datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});