let datum1 = new Date("2024-01-26 17:00:00");
let datum2 = new Date("2024-01-26 21:00:00");

//  collection("...").add()
//  collection("...").doc().set()

db.collection('tasks')
.add({
    title: "Cas ITBootcamp",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Cas iz baza podataka"
})
.then(() => {
    console.log("Uspesno dodat task");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

// doc("...").set() -> kompletno menja ("gazi") sadrzaj dokumenta
// doc("...").update() -> menja sadrzaj postojecih polja

db.collection("users").doc("cust04")
.update({
    age: 28
})
.then(() => {
    console.log("Uspesno promenjene godine");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

db.collection('movies').doc('mov1')
.set({
    name: "Citizen Kane",
    director: {
        name: "Orson",
        surname: "Welles"
    },
    release_year: 1941,
    genres: ["Drama", "Mistery", "Noir"],
    rating: 8.3
})
.then(() => {
    console.log("Uspesno dodat film");
    return db.collection('movies').doc('mov1')
    .update({
        rating: 8.4
    });
})
.then(() => {
    console.log("Uspesno izmenjen film");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

// Dohvatanje dokumenta
db.collection('movies').doc('mov1')
.get()
.then(doc => {
    if(doc.exists) {
        let data = doc.data();
        console.log("Uspesno skinut dokument: " + doc.id);
        console.log(data);
    }
    else {
        console.log("Ne postoji ovaj dokument");
    }
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

// Dohvatanje svih dokumenata iz kolekcije
db.collection('customers')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, " => ", data);
    });
})
.catch(e => {
    console.log(`Greska: ${e}`);
});